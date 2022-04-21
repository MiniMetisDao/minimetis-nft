import { type Theme, css } from "@emotion/react";

export const globalStyles = (theme: Theme) => css`
  html,
  body {
    padding: 0;
    margin: 0;

    font-family: "Rambla", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;

    background: ${theme.color.primary};
    color: ${theme.color.text.primary};
  }
  html {
    position: relative;
    display: flex;
    box-sizing: border-box;
  }
  body {
    flex: 1;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  button {
    font-family: "Rambla", sans-serif;
  }

  .group:before,
  .group:after {
    content: "";
    display: table;
  }
  .group:after {
    clear: both;
  }
`;
