import { fontSizer } from "./index";
import { css } from "styled-components";

// Paragraph Styles #1 //
export const B1Base = css`
  ${fontSizer(1.4, 1.8, 76.8, 150, 1.6)};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
`;

export const B1White = css`
  ${B1Base};
  color: var(--color-white);
`;

export const B1LgtBlack = css`
  ${B1Base};
  color: var(--color-lgt-black);
`;
