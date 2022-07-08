import React from "react";
import styled from "styled-components";

const Option = ({ linkTitle, src }) => {
  return (
    <Container>
      <OptionImage src={src} />
      <OptionLink>
        {linkTitle}
        <svg
          width="24"
          height="40"
          viewBox="0 0 24 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="24" height="40" fill="url(#pattern0)" />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_299_49"
                transform="translate(-0.321078) scale(0.00612745 0.00367647)"
              />
            </pattern>
            <image
              id="image0_299_49"
              width="268"
              height="272"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      </OptionLink>
    </Container>
  );
};

export default Option;

const Container = styled.div`
  width: 25vw;
  min-width: 280px;
  padding: 20px;
`;
const OptionImage = styled.img`
  width: 100%;
`;
const OptionLink = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -5px;
  padding: 5px 10px;
  cursor: pointer;
  width: 100%;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;