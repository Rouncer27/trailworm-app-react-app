import { css } from "styled-components";
import { fontSizer } from "./index";

const Btn1Base = css`
  ${fontSizer(1.4, 1.6, 76.8, 150, 1.8)};
  position: relative;
  display: inline-block;
  padding: 0.75rem 4rem;
  transition: all 0.3s ease;
  border: solid 0.2rem var(--color-lgt-black);
  border-radius: 0.5rem;
  font-family: "Open Sans", "Segoe UI", Tahoma, sans-serif;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.11;
  letter-spacing: normal;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Btn1Green = css`
  ${Btn1Base};
  background: transparent;
  background-image: linear-gradient(138deg, #1f6a4e -1%, #77bbb1 103%);
  box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.1);
  color: var(--color-white);
  z-index: 1;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(138deg, #428bca -1%, #8fd8ff 103%);
    z-index: -1;
    transition: opacity 0.5s linear;
    opacity: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
  }
`;

export const Btn1Infor = css`
  ${Btn1Base};
  background: transparent;
  background-image: linear-gradient(138deg, #428bca -1%, #8fd8ff 103%);
  box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.1);
  color: var(--color-white);
  z-index: 1;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(138deg, #1f6a4e -1%, #77bbb1 103%);
    z-index: -1;
    transition: opacity 0.5s linear;
    opacity: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
  }
`;

export const Btn1Warning = css`
  ${Btn1Base};
  background: transparent;
  background-image: linear-gradient(138deg, #d9534f -1%, #ffb9b5 103%);
  box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.1);
  color: var(--color-white);
  z-index: 1;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(138deg, #a6201c -1%, #a6201c 103%);
    z-index: -1;
    transition: opacity 0.5s linear;
    opacity: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
  }
`;
