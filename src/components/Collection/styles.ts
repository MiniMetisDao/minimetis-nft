import { css } from "@emotion/react";

export const styles = css`
  color: #443247;

  .collection-list {
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    .item {
      display: flex;
      width: 199px;
      overflow: hidden;
      padding: 10px;
      flex-grow: 1;
      position: relative;
      span {
        position: absolute;
        top: 10px;
        right: 10px;
        background: #04d8cc;
        padding: 5px;
        border-radius: 0 0 0 10px;
      }
    }
    img {
      width: 100%;
      display: flex;
    }
  }
`;
