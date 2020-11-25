import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { fontSizer } from "../../styles/helpers/index";

const InputFieldStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-bottom: 1.5rem;

  input {
    ${fontSizer(1.8, 2.2, 76.8, 150, 1.8)};
    width: 100%;
    padding: 1rem;
    background-color: transparent;
    border: none;
    border-bottom: solid 0.2rem var(--color-quin);
    color: var(--color-white);
  }

  label {
    ${fontSizer(1.8, 2.2, 76.8, 150, 1.8)};
    width: 100%;
    color: var(--color-quin);
  }
`;

const InputField = ({ type, label, id, value, handleUpdateField }) => {
  return (
    <InputFieldStyled>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={handleUpdateField}
      />
      <label htmlFor={id}>{label}</label>
    </InputFieldStyled>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleUpdateField: PropTypes.func.isRequired,
};

export default InputField;
