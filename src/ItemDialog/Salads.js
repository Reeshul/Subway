import React from "react";
import styled from "styled-components";

const SaladsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
  grid-gap: 25px 10px;
`;

const SaladCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  margin-right: 10px;
  cursor: pointer;
`;

const SectionHeader = styled.div`
  padding: 16px 24px;
  background: rgb(246, 246, 246);
`;

const SectionTitle = styled.div`
  line-height: 24px;
  font-size: 18px;
`;

const SectionSubtitle = styled.div`
  line-height: 20px;
  font-size: 14px;
  color: rgb(84, 84, 84);
`;

const Salads = ({ salads, checkSalads }) => {
  return (
    <>
      <SectionHeader>
        <SectionTitle>Choose Salad</SectionTitle>
        <SectionSubtitle>Choose up to 13</SectionSubtitle>
      </SectionHeader>
      <SaladsGrid>
        {salads.map((salad, i) => (
          <CheckboxLabel key={i}>
            <SaladCheckbox
              type="checkbox"
              checked={salad.checked}
              onClick={() => {
                checkSalads(i);
              }}
              readOnly
            />
            {salad.name}
          </CheckboxLabel>
        ))}
      </SaladsGrid>
    </>
  );
};

export default Salads;
