import { fontSizer } from "./index";
import { css } from "styled-components";

// Headline Styles #1 //
export const H1Base = css`
  ${fontSizer(2.8, 3.6, 76.8, 150, 3.0)};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
`;
export const H1Dark = css`
  ${H1Base};
  color: var(--color-prim);
`;

export const H1White = css`
  ${H1Base};
  color: var(--color-gray);
`;

// Headline Styles #1 //
export const H2Base = css`
  ${fontSizer(2.4, 3, 76.8, 150, 2.0)};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
`;

export const H2Cyan = css`
  ${H2Base};
  color: var(--color-quin);
`;

export const H2White = css`
  ${H2Base};
  color: var(--color-gray);
`;

// Headline Styles #1 //
export const H3Base = css`
  ${fontSizer(1.8, 2.2, 76.8, 150, 1.8)};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
`;

export const H3White = css`
  ${H3Base};
  color: var(--color-gray);
`;
