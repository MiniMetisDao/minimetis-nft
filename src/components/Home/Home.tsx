import { Trans, useTranslation } from "react-i18next";
import { Parallax } from "react-scroll-parallax";

import nftBg from "assets/images/nft-bg.jpg";
import { Container } from "components/Layout/Container";

import { styles } from "./styles";

export const Home: React.FC = () => {
  const { t } = useTranslation("home");

  return (
    <div css={styles}>
      <div className="header-section">
        <Parallax translateY={[-15, 15]}>
          <Container>
            <h2>{t("minimetisAdventures")}</h2>
            <h3>{t("theNftsSeries")}</h3>
          </Container>
        </Parallax>
      </div>
      <div className="intro">
        <Parallax translateY={[-15, 15]}>
          <Container>
            <div className="wrapper">
              <div className="minimetis-map"></div>
              <p>{t("intro")}</p>
            </div>
          </Container>
        </Parallax>
      </div>
      <div className="nft-bg">
        <img src={nftBg} alt="MiniMetis nft preview" />
      </div>
      <div className="nft-story">
        <Parallax translateY={[-15, 15]}>
          <Container>
            <div className="wrapper">
              <div className="minimetis-planet-wrapper">
                <div className="minimetis-planet"></div>
              </div>
              <div>
                <Trans i18nKey="home:story" components={{ p: <p /> }} />
              </div>
            </div>
          </Container>
        </Parallax>
      </div>
      <div className="banner">
        <Container>
          <div className="wrapper">
            <a href="https://discord.gg/cuBskkFZHC">
              <span className="click-here">Join Discord</span>
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
};
