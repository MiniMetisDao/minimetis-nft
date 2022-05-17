import { css } from "@emotion/react";

import clickHereHover from "assets/images/click-here-hover.png";
import clickHere from "assets/images/click-here.png";
import discordBannerBg from "assets/images/discord-banner-bg.png";
import headerTitle from "assets/images/header-title.png";
import minimetisMap from "assets/images/minimetis-map.png";
import minimetisStory from "assets/images/minimetis-story.png";
import wave from "assets/images/wave.svg";

export const styles = css`
  font-size: 28px;
  line-height: 1.35;
  .header-section {
    background: #443247;
    padding-bottom: 250px;
    padding-top: 50px;

    h2,
    h3 {
      line-height: 0;
      font-size: 0;
      margin: 0 auto;
    }
    h2 {
      background: url(${headerTitle}) no-repeat center;
      background-size: 100%;
      width: 527px;
      height: 289px;
      min-height: 289px;
      @media (max-width: 1024px) {
        width: 100%;
        max-width: 527px;
      }
    }
  }
  .intro {
    position: relative;
    background: #04d8cc;
    font-weight: 700;
    font-style: italic;
    color: #443247;
    padding-bottom: 40px;

    ::before {
      content: "";
      background: url(${wave}) repeat-x bottom;
      position: absolute;
      top: -290px;
      height: 300px;
      width: 100%;
    }

    .wrapper {
      display: flex;
      align-items: center;
      position: relative;
      margin-top: -180px;
      z-index: 1;
      @media (max-width: 1024px) {
        flex-direction: column;
      }
      p {
        padding-right: 60px;
        @media (max-width: 1024px) {
          padding-right: 0;
        }
      }
    }
  }
  .minimetis-map {
    background: url(${minimetisMap}) no-repeat center;
    background-size: 100%;
    width: 559px;
    height: 523px;
    flex-shrink: 0;
    margin-right: 20px;
    @media (max-width: 1024px) {
      width: 100%;
      max-width: 559px;
      flex-shrink: 1;
    }
  }
  .nft-bg {
    display: flex;
    img {
      width: 100%;
    }
  }
  .nft-story {
    background: #443247;
    color: #fff;
    padding: 150px 0;

    .wrapper {
      display: flex;
      align-items: center;
      @media (max-width: 1024px) {
        flex-direction: column;
      }
    }
  }
  .minimetis-planet-wrapper {
    flex-shrink: 0;
    @media (max-width: 1024px) {
      display: flex;
      justify-content: center;
      flex-shrink: 1;
      width: 100%;
    }
    .minimetis-planet {
      background: url(${minimetisStory}) no-repeat center;
      background-size: 100%;
      width: 422px;
      height: 474px;
      margin-right: 50px;
      @media (max-width: 1024px) {
        width: 100%;
        max-width: 422px;
        margin-right: 0;
      }
    }
  }
  .banner {
    background: #638ef6;
    margin-bottom: 100px;
    padding: 50px 0;
    @media (max-width: 1024px) {
      padding: 100px 0;
    }
    .wrapper {
      a {
        background: url(${discordBannerBg}) no-repeat;
        aspect-ratio: 1200/300;
        background-size: 100%;
        text-align: center;
        position: relative;
        overflow: hidden;
        display: block;

        .click-here {
          line-height: 0;
          font-size: 0;
          background: url(${clickHere}) no-repeat center bottom;
          background-size: 100%;
          aspect-ratio: 229/52;
          display: block;
          position: absolute;
          bottom: -13%;
          width: 33%;
          height: 100%;
          left: 50%;
          margin-left: -16%;
        }
        :hover {
          .click-here {
            background: url(${clickHereHover}) no-repeat center bottom;
          }
        }
      }
    }
  }
`;
