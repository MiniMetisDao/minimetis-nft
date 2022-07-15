import { ethers } from "ethers";
import React from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { Container } from "components/Layout/Container";
import { Timer } from "components/Timer";
import { MINT_HUMAN_DATE } from "config";
import { useGetNftDetails, useWhitelistMint } from "queries";

import { styles } from "./styles";

export const Mint: React.FC = () => {
  const { t } = useTranslation("mint");
  const [amount, setAmount] = React.useState(5);
  const { data: nftDetails } = useGetNftDetails();
  const { mutate, isError, error, data: whitelistData } = useWhitelistMint();

  const handleClick = () => {
    const amount = 1;
    mutate({
      amount,
      userAddress: "0xF1Eb81107353127B1cA6CDbd8266366637e9b5C6",
      value: ethers.BigNumber.from(nftDetails?.cost).mul(amount),
    });
  };

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

  return (
    <div css={styles}>
      <div className="mint-section">
        <Container>
          <div className="wrapper">
            <div className="content">
              <h2>{t("miniMetisNfts")}</h2>
              <h3>{t("mintingTime")}</h3>
              <Timer
                onExpire={() => {
                  console.log("oops expired!!");
                }}
              />

              <p className="human-date">{MINT_HUMAN_DATE}</p>

              {/* <h3>{t("mintNow")}</h3> */}
              {nftDetails?.whitelistMintEnabled && (
                <>
                  <div className="mint-count-wrapper">
                    <button onClick={handleDecrement} disabled={amount === 1}>
                      <AiOutlineMinus />
                    </button>
                    <input readOnly type="number" value={amount} />
                    <button onClick={handleIncrement} disabled={amount === 5}>
                      <AiOutlinePlus />
                    </button>
                  </div>
                  <button className="mint-btn" onClick={handleClick}>
                    <span>{t("mint")}</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
