import { type Theme, css } from "@emotion/react";

export const styles = ({ color }: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0;

  .time-cell {
    display: flex;
    align-items: center;

    .value {
      font-weight: bold;
      color: ${color.color10};
      font-size: 42px;
      line-height: 50px;
      border-bottom: 2px solid ${color.color10};
      padding-bottom: 2px;
      margin: 0 auto;
      width: 54px;
      margin-bottom: 15px;
      text-align: center;
    }

    .label {
      font-size: 20px;
    }

    .separator {
      font-weight: bold;
      font-size: 36px;
      margin: 0 28px;
    }
  }
`;
