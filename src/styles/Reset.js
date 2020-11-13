import { css } from "styled-components";

const CssReset = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    overflow-x: hidden !important;
  }

  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    font-family: "Open Sans", "Segoe UI", Tahoma, sans-serif;
    font-weight: normal;
    letter-spacing: 0.1rem;
    line-height: 1.5;
  }
`;

export default CssReset;
