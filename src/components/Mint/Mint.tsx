import { cx } from "@emotion/css";
import { ethers } from "ethers";
import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { toast } from "react-toastify";

import { Container } from "components/Layout/Container";
import { Timer } from "components/Timer";
import { EXPLORER_URL, MINT_HUMAN_DATE, MINT_UTC_DATE } from "config";
import {
  useGetNftDetails,
  useGetWalletDetails,
  useGetWhitelistStatus,
  useWhitelistMint,
} from "queries";
import { getShortTransactionHash } from "utils";

import { styles } from "./styles";

const timeExpired = () => {
  const now = new Date();
  const utcDate = new Date(MINT_UTC_DATE);

  return now > utcDate;
};

export const Mint: React.FC = () => {
  const { t } = useTranslation("mint");
  const [amount, setAmount] = React.useState(5);
  const [mintStarted, setMintStarted] = React.useState(timeExpired);
  const [mintingInProgress, setMintingInProgress] = React.useState(false);

  const { data: walletDetails } = useGetWalletDetails();
  const { data: nftDetails } = useGetNftDetails();
  const { data: whitelistStatus } = useGetWhitelistStatus();
  const { mutate, isError, error, data: whitelistData } = useWhitelistMint();

  const handleClick = () => {
    if (walletDetails?.address) {
      setMintingInProgress(true);
      mutate({
        amount,
        userAddress: walletDetails.address,
        value: ethers.BigNumber.from(nftDetails?.cost).mul(amount),
      });
    } else {
      //TODO: this is an unnecessary error
      toast.error(t("walletNotConnected"));
    }
  };

  React.useEffect(() => {
    if (isError && error) {
      toast.error(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        (error as any).code! === 4001
          ? t("transactionCancelled")
          : t("transactionError")
      );
      setMintingInProgress(false);
    }
  }, [error, isError, t]);

  React.useEffect(() => {
    const { txHash, txReceipt } = whitelistData || {};
    if (!txHash) return;
    setMintingInProgress(true);

    const shortHash = getShortTransactionHash(txHash);
    if (txHash) {
      toast.loading(
        <Trans
          i18nKey="transactionPending"
          values={{ txHash: shortHash }}
          components={{
            a: <a target="_blank" href={`${EXPLORER_URL}tx/${txHash}`} />,
          }}
        />,
        { toastId: "minting", closeButton: true }
      );
    }
    if (txReceipt) {
      txReceipt
        .then(() => {
          toast.update("minting", {
            render: (
              <Trans
                i18nKey="transactionSuccess"
                values={{ txHash: shortHash }}
                components={{
                  a: <a target="_blank" href={`${EXPLORER_URL}tx/${txHash}`} />,
                }}
              />
            ),
            type: toast.TYPE.SUCCESS,
            isLoading: false,
            autoClose: 6000,
          });
        })
        .catch((error: any) => {
          toast.update("minting", {
            render:
              error?.code === 4001
                ? t("transactionCancelled")
                : t("transactionError"),
            type: toast.TYPE.ERROR,
            isLoading: false,
            autoClose: 6000,
          });
        })
        .finally(() => setMintingInProgress(false));
    }
  }, [whitelistData, t]);

  const handleIncrement = () => {
    if (amount < 5) {
      setAmount((amt) => amt + 1);
    }
  };

  const handleDecrement = () => {
    if (amount > 1) {
      setAmount((amt) => amt - 1);
    }
  };

  const handleTimerExpire = () => setMintStarted(true);

  return (
    <div css={styles}>
      <div className="mint-section">
        <Container>
          <div className="wrapper">
            <div className="content">
              <h2>{t("miniMetisNfts")}</h2>
              {!mintStarted ? (
                <>
                  <h3>{t("mintingTime")}</h3>
                  <Timer
                    expiryTimestamp={new Date(MINT_UTC_DATE)}
                    onExpire={handleTimerExpire}
                  />

                  <p className="human-date">{MINT_HUMAN_DATE}</p>
                </>
              ) : (
                <>
                  <h3 className="mint-large-text">
                    <Trans
                      i18nKey="mint:mintNow"
                      components={{ span: <span /> }}
                    />
                  </h3>
                  {whitelistStatus?.whitelistClaimed ? (
                    <p className="success-mint-message">{t("successMint")}</p>
                  ) : (
                    <>
                      {nftDetails?.whitelistMintEnabled === "false" && (
                        <p className="mint-info-message">
                          {t("whitelistNotEnabled")}
                        </p>
                      )}

                      <div className="mint-actions">
                        <div className="mint-count-wrapper">
                          <button
                            onClick={handleDecrement}
                            disabled={amount === 1}
                          >
                            <AiOutlineMinus />
                          </button>
                          <input readOnly value={amount} />
                          <button
                            onClick={handleIncrement}
                            disabled={amount === 5}
                          >
                            <AiOutlinePlus />
                          </button>
                        </div>
                        <button
                          onClick={handleClick}
                          disabled={
                            walletDetails?.status !== "CONNECTED" ||
                            nftDetails?.whitelistMintEnabled === "false"
                          }
                          className={cx("mint-btn", {
                            disabled: walletDetails?.status !== "CONNECTED",
                          })}
                        >
                          <span>
                            {mintingInProgress ? t("minting") : t("mint")}
                          </span>
                        </button>
                      </div>

                      {nftDetails?.totalSupply && (
                        <p className="mint-stats">
                          <span>
                            {nftDetails?.totalSupply === nftDetails?.maxSupply
                              ? t("soldOut")
                              : t("remainingNfts", {
                                  totalSupply: nftDetails?.totalSupply,
                                  maxSupply: nftDetails?.maxSupply,
                                })}
                          </span>
                        </p>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
