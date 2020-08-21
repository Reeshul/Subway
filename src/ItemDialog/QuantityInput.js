import React from "react";
import styled from "styled-components";
import { Title } from "../Styles/title";
import { LightGreen } from "../Styles/colors";

const QuantityInputStyled = styled.input`
  font-size: 18px;
  width: 24px;
  text-align: center;
  border: none;
  outline: none;
`;

const IncrementContainer = styled(Title)`
  display: flex;
  align-items: center;
`;

const IncrementButton = styled.div`
  width: 30px;
  line-height: 30px;
  color: black;
  font-size: 25px;
  text-align: center;
  cursor: pointer;
  margin: 0px 10px;
  border-color: rgb(118, 118, 118);
  opacity: 1;
  background-color: rgb(246, 246, 246);
  border-radius: 50px;
  ${({ disabled }) =>
    disabled &&
    `opacity: 0.5;
pointer-events: none;`}
  &:hover {
    background-color: ${LightGreen};
  }
`;

const QuantityInput = ({ quantity }) => {
  return (
    <IncrementContainer>
      <IncrementButton
        onClick={() => {
          quantity.setValue(quantity.value - 1);
        }}
        disabled={quantity.value === 1}
      >
        -
      </IncrementButton>
      <QuantityInputStyled {...quantity} />
      <IncrementButton
        onClick={() => {
          quantity.setValue(quantity.value + 1);
        }}
      >
        +
      </IncrementButton>
    </IncrementContainer>
  );
};

export default QuantityInput;
