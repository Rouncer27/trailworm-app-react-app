import { css } from "styled-components";

// 300 weight Open Sans font //
import openSans300 from "../assets/fonts/open-sans/open-sans-v18-latin-300.woff";
import openSans300Woff2 from "../assets/fonts/open-sans/open-sans-v18-latin-300.woff2";
import openSans300Italic from "../assets/fonts/open-sans/open-sans-v18-latin-300italic.woff";
import openSans300ItalicWoff2 from "../assets/fonts/open-sans/open-sans-v18-latin-300italic.woff2";

// 400 weight Open Sans font //
import openSans400 from "../assets/fonts/open-sans/open-sans-v18-latin-regular.woff";
import openSans400Woff2 from "../assets/fonts/open-sans/open-sans-v18-latin-regular.woff2";
import openSans400Italic from "../assets/fonts/open-sans/open-sans-v18-latin-italic.woff";
import openSans400ItalicWoff2 from "../assets/fonts/open-sans/open-sans-v18-latin-italic.woff2";

// 700 weight Open Sans font //
import openSans700 from "../assets/fonts/open-sans/open-sans-v18-latin-700.woff";
import openSans700Woff2 from "../assets/fonts/open-sans/open-sans-v18-latin-700.woff2";
import openSans700Italic from "../assets/fonts/open-sans/open-sans-v18-latin-700italic.woff";
import openSans700ItalicWoff2 from "../assets/fonts/open-sans/open-sans-v18-latin-700italic.woff2";

// 800 weight Open Sans font //
import openSans800 from "../assets/fonts/open-sans/open-sans-v18-latin-800.woff";
import openSans800Woff2 from "../assets/fonts/open-sans/open-sans-v18-latin-800.woff2";
import openSans800Italic from "../assets/fonts/open-sans/open-sans-v18-latin-800italic.woff";
import openSans800ItalicWoff2 from "../assets/fonts/open-sans/open-sans-v18-latin-800italic.woff2";

const MainFonts = css`
  /* open-sans-300 - latin */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 300;
    src: local("Open Sans Light"), local("OpenSans-Light"),
      url(${openSans300Woff2}) format("woff2"),
      url(${openSans300}) format("woff");
  }
  /* open-sans-300italic - latin */
  @font-face {
    font-family: "Open Sans";
    font-style: italic;
    font-weight: 300;
    src: local("Open Sans Light Italic"), local("OpenSans-LightItalic"),
      url(${openSans300ItalicWoff2}) format("woff2"),
      url(${openSans300Italic}) format("woff");
  }
  /* open-sans-regular - latin */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    src: local("Open Sans Regular"), local("OpenSans-Regular"),
      url(${openSans400Woff2}) format("woff2"),
      url(${openSans400}) format("woff");
  }
  /* open-sans-italic - latin */
  @font-face {
    font-family: "Open Sans";
    font-style: italic;
    font-weight: 400;
    src: local("Open Sans Italic"), local("OpenSans-Italic"),
      url(${openSans400ItalicWoff2}) format("woff2"),
      url(${openSans400Italic}) format("woff");
  }
  /* open-sans-700 - latin */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    src: local("Open Sans Bold"), local("OpenSans-Bold"),
      url(${openSans700Woff2}) format("woff2"),
      url(${openSans700}) format("woff");
  }
  /* open-sans-700italic - latin */
  @font-face {
    font-family: "Open Sans";
    font-style: italic;
    font-weight: 700;
    src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"),
      url(${openSans700ItalicWoff2}) format("woff2"),
      url(${openSans700Italic}) format("woff");
  }
  /* open-sans-800 - latin */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 800;
    src: local("Open Sans ExtraBold"), local("OpenSans-ExtraBold"),
      url(${openSans800Woff2}) format("woff2"),
      url(${openSans800}) format("woff");
  }
  /* open-sans-800italic - latin */
  @font-face {
    font-family: "Open Sans";
    font-style: italic;
    font-weight: 800;
    src: local("Open Sans ExtraBold Italic"), local("OpenSans-ExtraBoldItalic"),
      url(${openSans800ItalicWoff2}) format("woff2"),
      url(${openSans800Italic}) format("woff");
  }
`;

export default MainFonts;
