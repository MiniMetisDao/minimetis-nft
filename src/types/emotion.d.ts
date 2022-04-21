import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      text: {
        primary: string;
        secondary: string;
      };
      primary: string;
      secondary: string;
    };
  }
}
