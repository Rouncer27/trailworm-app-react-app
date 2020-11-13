import { css } from "styled-components";
import { fontSizer } from "./helpers/FontSizer";

const FontsInit = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    font-family: "Open Sans", "Segoe UI", Tahoma, sans-serif;
    font-size: 1.8rem;
    font-weight: normal;
    line-height: 1.5;
  }

  h1 {
    ${fontSizer(3.2, 5.6, 76.8, 120)}
  }
  h2 {
    ${fontSizer(2.6, 4.6, 76.8, 120)}
  }

  h3 {
    ${fontSizer(2.2, 3.4, 76.8, 120)}
  }

  h4 {
    ${fontSizer(2, 2.8, 76.8, 120)}
  }

  h5 {
    ${fontSizer(2, 2.4, 76.8, 120)}
  }

  h6 {
    ${fontSizer(1.8, 2.2, 76.8, 120)}
  }

  p {
    ${fontSizer(1.8, 2, 76.8, 120)}
    margin: 0;
    margin-bottom: 1.5em;
    line-height: 1.4;
  }

  a {
    ${fontSizer(1.8, 2, 76.8, 120)}
    text-decoration: none;
    color: #000;
    font-weight: normal;
    transition: all 0.3s ease;

    &:hover {
      color: #bada55;
    }
  }

  span {
    font-size: 1em;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    font-size: 1.8rem;
    list-style-type: none;
  }

  img {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }
`;

export default FontsInit;
