// import { ethers } from "ethers";
import { useTranslation } from "react-i18next";

import { Container } from "components/Layout/Container";
import { Timer } from "components/Timer";
import { MINT_HUMAN_DATE } from "config";
// import { useGetNftDetails, useWhitelistMint } from "queries";

import { styles } from "./styles";

export const Mint: React.FC = () => {
  const { t } = useTranslation("mint");

  // const { data: nftDetails } = useGetNftDetails();
  // const { mutate, isError, error, data: whitelistData } = useWhitelistMint();

  // const handleClick = () => {
  //   const amount = 1;
  //   mutate({
  //     amount,
  //     userAddress: "0xF1Eb81107353127B1cA6CDbd8266366637e9b5C6",
  //     value: ethers.BigNumber.from(nftDetails?.cost).mul(amount),
  //   });
  // };

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
              {/* {nftDetails?.whitelistMintEnabled && (
                <button onClick={handleClick}>Mint</button>
              )} */}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
