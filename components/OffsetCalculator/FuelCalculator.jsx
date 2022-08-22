import React from "react";
import styled from "styled-components";
import { fuelNames } from "../../utils/offsetCalculator/constants";
import { getSourceName } from "../../utils/offsetCalculator/functions";
import { fuelSources } from "../../utils/offsetCalculator/offsetCalculator";
import { FlexCenter } from "../About/About";
import Button from "../Button/Button";
import Footsteps from "./Footsteps";

const Calculator = () => {
  const [distance, setDistance] = React.useState(0);
  const [fuelType, setFuelType] = React.useState("");
  const [total, setTotal] = React.useState(0);

  const calculateCarbonFootPrint = () => {
    const footprint = fuelSources[fuelType] * distance;
    setTotal(footprint / 1000);
  };

  React.useEffect(() => {
    calculateCarbonFootPrint();
    // eslint-disable-next-line
  }, [fuelType, distance]);
  return (
    <Container>
      <h2>Annual Fuel Usage Calculator</h2>
      <Values>
        <h3>Enter Distance Travelled(Km)</h3>
        <input
          type="number"
          value={distance}
          onChange={(e) => setDistance(parseFloat(e.target.value))}
        />
        <h3>Enter fuel type</h3>
        <select id="type" onChange={(e) => setFuelType(e.target.value)}>
          <option>Fuel Type</option>
          {Object.keys(fuelNames).map((fuel, idx) => (
            <option key={idx} value={fuel}>
              {getSourceName(fuel)}
            </option>
          ))}
        </select>
        <h3>Total</h3>
        <Total>{Number.isNaN(total) ? "" : total.toFixed(2)}</Total>
        <span>Kgs of carbon</span>
      </Values>

      <p>Offset your carbon footprint now</p>

      <FlexCenter>
        <Button title="Plant Trees!" />
      </FlexCenter>
      <Footsteps />
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
  background: #d4f5d1;
  position: relative;
  width: 60vw;
  padding: 10px;
  border-radius: 10px;
  h2 {
    text-align: center;
  }
  p {
    margin-top: 40px;
    color: #1d5611;
    text-align: center;
    font-weight: bold;
  }
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 30vh;
`;

export const Total = styled.div`
  text-align: center;
  background: white;
  padding: 5px 10px;
  min-width: 100px;
  border: 1px solid #000000;
  min-height: 20px;
`;
