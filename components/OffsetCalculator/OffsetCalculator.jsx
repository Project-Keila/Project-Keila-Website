import React from "react";
import Banner from "../Banner/Banner";
import styled from "styled-components";
import ElectricityCalculator from "./ElectricityCalculator";
import FuelCalculator from "./FuelCalculator";

const OffsetCalculator = () => {
  const [type, setType] = React.useState();
  return (
    <div>
      <Banner src="./calculator/calculator-banner.png" />
      <Options>
        <h2>Annual Carbon Emission Calculator</h2>
        <Flex>
          <Option onClick={() => setType("energy")}>
            <div>Energy Consumption Calculator</div>
          </Option>
          <Option onClick={() => setType("fuel")}>
            <div>Fuel Consumption Calculator</div>
          </Option>
        </Flex>
      </Options>
      {type === "energy" && <ElectricityCalculator />}
      {type === "fuel" && <FuelCalculator />}
    </div>
  );
};

export default OffsetCalculator;

const Options = styled.div`
  background: #eaeaea;
  h2 {
    text-align: center;
  }
  padding: 50px 20px;
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  margin-top: 100px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 90px;
`;

const Option = styled.div`
  background: #89bb7d;
  border-radius: 8px;
  width: 23vw;
  display: flex;
  align-items: center;
  height: 150px;
  font-style: normal;
  font-weight: 500;
  font-size: 2vw;
  @media (max-width: 768px) {
    font-size: 3vw;
  }
  text-align: center;
  color: white;
  cursor: pointer;
  div {
    width: 100%;
  }
`;
