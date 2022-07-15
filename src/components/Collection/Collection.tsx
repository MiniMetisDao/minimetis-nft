import { useTranslation } from "react-i18next";

import nftPlaceholder from "assets/images/minime-nft-placeholder.png";
import { Container } from "components/Layout/Container";
import { NFT_CONTRACT_ADDRESS } from "config";
import { useGetMintedTokens } from "queries";

import { styles } from "./styles";

export const Collection: React.FC = () => {
  const { t } = useTranslation("mint");
  const { data } = useGetMintedTokens();

  if (!data?.length) {
    return null;
  }

  return (
    <div css={styles}>
      <Container>
        <h2>{t("yourCollection", { count: data?.length })}</h2>
        <div className="collection-list">
          {data?.map((tokenId) => (
            <div className="item" key={tokenId}>
              <a
                href={`https://opensea.io/assets/ethereum/${NFT_CONTRACT_ADDRESS}/${tokenId}`}
                title={t("viewOnOpenSea", { tokenId })}
              >
                <img src={nftPlaceholder} alt={t("minimeNft", { tokenId })} />
              </a>
              <span>#{tokenId}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
