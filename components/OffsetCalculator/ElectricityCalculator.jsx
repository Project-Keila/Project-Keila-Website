import React from "react";
import styled from "styled-components";

const Calculator = () => {
  return (
    <Container>
      <h2>Annual Electricity Usage Calculator</h2>
      <Values>
        <h3>Enter your energy/electricity consumption (KW/H)</h3>
        <input type="number" />
        <h3>Enter your energy source</h3>
        <input type="number" />
        <h3>Total</h3>
        <input type="number" />
      </Values>
    </Container>
  );
};

export default Calculator;

const Values = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  margin-top: 10vh;
  background: #ffcc5a;
  width: 60vw;
  padding: 10px;
  border-radius: 10px;
  h2 {
    text-align: center;
  }

  margin-left: auto;
  margin-right: auto;
  padding-bottom: 30vh;
`;
