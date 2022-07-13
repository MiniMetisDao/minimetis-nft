import { useTranslation } from "react-i18next";

import { Container } from "components/Layout/Container";

import { styles } from "./styles";

export const Mint: React.FC = () => {
  const { t } = useTranslation("mint");

  return (
    <div css={styles}>
      <div className="mint-section">
        <Container>
          <h2>{t("miniMetisNfts")}</h2>
          <h3>{t("mintNow")}</h3>
        </Container>
      </div>
    </div>
  );
};
