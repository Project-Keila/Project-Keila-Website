import React from "react";
import styled from "styled-components";

const Button = ({ title, onClick, disabled }) => {
  return (
    <Btn disabled={disabled} onClick={onClick}>
      {title}
    </Btn>
  );
};

export default Button;

const Btn = styled.button`
  color: #1d620e;
  background: #ffb000;
  outline: none;
  cursor: pointer;
  border: none;
  padding: 10px 30px;
  font-weight: 900;
  font-size: 20px;
  border-radius: 10px;
  margin: 10px;
`;
