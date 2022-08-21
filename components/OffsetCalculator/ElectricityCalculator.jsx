import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { energySourceNames } from "../../utils/offsetCalculator/constants";
import { getSourceName } from "../../utils/offsetCalculator/functions";
import { energySources } from "../../utils/offsetCalculator/offsetCalculator";
import { FlexCenter } from "../About/About";
import Button from "../Button/Button";
import Footsteps from "./Footsteps";
import { Total } from "./FuelCalculator";

const Calculator = () => {
  const [kwH, setKWH] = React.useState(0);
  const [energySource, setEnergySource] = React.useState("");
  const [total, setTotal] = React.useState(0);

  const calculateCarbonFootPrint = () => {
    const footprint = energySources[energySource] * kwH;
    setTotal(footprint / 1000);
  };
  const router = useRouter();

  React.useEffect(() => {
    calculateCarbonFootPrint();
    // eslint-disable-next-line
  }, [energySource, total]);
  return (
    <Container>
      <h2>Annual Electricity Usage Calculator</h2>
      <Values>
        <h3>Enter your energy/electricity consumption (KW/H)</h3>
        <input
          type="number"
          value={kwH}
          onChange={(e) => setKWH(parseFloat(e.target.value))}
        />
        <h3>Enter your energy source</h3>
        <select onChange={(e) => setEnergySource(e.target.value)}>
          <option>Energy Source</option>
          {Object.keys(energySourceNames).map((source, idx) => (
            <option key={idx} value={source}>
              {getSourceName(source)}
            </option>
          ))}
        </select>
        <h3>Total</h3>
        <Total>{Number.isNaN(total) ? "" : total.toFixed(2)}</Total>
        <span>Kgs of carbon</span>
      </Values>
      <p>Offset your carbon footprint now</p>

      <FlexCenter>
        <Button
          onClick={() => router.push("/calculator/plant")}
          title="Plant Trees!"
        />
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
  width: 60vw;
  padding: 10px;
  border-radius: 10px;
  position: relative;
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
