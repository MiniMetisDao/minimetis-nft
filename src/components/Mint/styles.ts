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
      &.mint-large-text {
        font-size: 160px;
        line-height: 0.75;
        margin: 50px 0 40px;
        border-bottom: 2px solid #443247;
        padding-bottom: 40px;
        span {
          font-size: 220px;
        }
      }
      @media (max-width: 1024px) {
        font-size: 60px;
        &.mint-large-text {
          font-size: 100px;
          line-height: 0.75;
          margin: 50px 0 40px;
          border-bottom: 2px solid #443247;
          padding-bottom: 40px;
          span {
            font-size: 140px;
          }
        }
      }
    }
    .human-date {
      font-size: 22px;
      line-height: 1.6;
      border-bottom: 2px solid #443247;
    }
  }
  .mint-btn {
    position: relative;
    background: #04d8cc;
    font-size: 22px;
    text-transform: uppercase;
    border: none;
    text-rendering: optimizeLegibility;
    display: inline-block;
    border-radius: 0.3em;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1),
      inset 0 -0.25em 0 rgba(0, 0, 0, 0.25), 0 0.25em 0.25em rgba(0, 0, 0, 0.05);
    color: #fff;
    cursor: pointer;
    font-weight: 700;
    line-height: 1.5;
    padding: 0.25em 1.5em 0.5em;
    position: relative;
    vertical-align: middle;
    user-select: none;
    :disabled,
    .disabled {
      background: #a2a2a2;
      cursor: not-allowed;
    }
    :not(:disabled):active {
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2),
        inset 0 2px 0 rgba(255, 255, 255, 0.1),
        inset 0 0.25em 0.5em rgba(0, 0, 0, 0.05);
      margin-top: 0.25em;
      padding-bottom: 0.25em;
    }
    :active,
    :focus {
      outline: none;
    }
  }
  .mint-actions {
    display: flex;
    justify-content: center;
  }
  .mint-count-wrapper {
    display: inline-flex;
    font-size: 22px;
    margin-right: 20px;
    button {
      background: none;
      cursor: pointer;
      border: none;
      :disabled,
      .disabled {
        cursor: not-allowed;
        color: #666;
      }
      svg {
        height: 3em;
        width: 3em;
        border-radius: 50%;
        padding: 5px;
      }
      :hover {
        svg {
          background: #d0cdba;
        }
      }
    }
    input {
      width: 60px;
      font-size: 22px;
      text-align: center;
      border: none;
      background: none;
      padding: 0;
    }
  }
`;
