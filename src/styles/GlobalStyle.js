import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import MainFonts from "./FontsLoader";
import CssReset from "./Reset";
import FontsInit from "./FontsInit";
import { GlobalVariables } from "./GlobalVariables";

const GlobalStyle = createGlobalStyle`
  ${MainFonts};
  ${normalize};
  ${CssReset};
  ${GlobalVariables};
  ${FontsInit};
`;

export default GlobalStyle;
