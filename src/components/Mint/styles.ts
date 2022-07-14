import { css } from "@emotion/react";

import mintBg from "assets/images/mint-bg.jpg";

export const styles = css`
  color: #443247;
  .mint-section {
    background: #e6e4d9;
    margin-bottom: 60px;

    .wrapper {
      background: url(${mintBg}) no-repeat center right;
      background-size: 50%;
      padding: 40px 0;
      @media (max-width: 1024px) {
        background-image: none;
        ::after {
          content: "";
          display: block;
          width: 100%;
          height: 410px;
          background: url(${mintBg}) no-repeat center;
          background-size: 60%;
        }
      }
      @media (max-width: 640px) {
        ::after {
          height: 200px;
        }
      }
    }
    .content {
      width: 560px;
      text-align: center;
      @media (max-width: 1024px) {
        width: 100%;
      }
    }
    h2 {
      font-size: 32px;
      border-bottom: 2px solid #443247;
      font-weight: normal;
    }
    h3 {
      font-size: 90px;
      line-height: 1;
      margin: 0 0 30px;
      @media (max-width: 1024px) {
        font-size: 60px;
      }
    }
    .human-date {
      font-size: 22px;
      line-height: 1.6;
      border-bottom: 2px solid #443247;
    }
  }
`;
