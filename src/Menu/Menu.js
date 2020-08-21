import React from "react";
import styled from "styled-components";
import { items, formatPrice } from "../Data/ItemData";
import { ItemGrid } from "./ItemGrid";
import { DarkGreen } from "../Styles/colors";

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 400px 50px 20px;
`;

const MenuSection = styled.div`
  background-color: #ffffff;
`;

const ItemOuterContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex: 1;
  text-decoration: none;
  background-color: #ffffff;
  transition-property: box-shadow margin-top filter;
  transition-duration: 0.1s;
  box-shadow: 0px 0px 2px 0px #e2e2e2;
  margin-top: 5px;
  &:hover {
    margin-top: 0px;
    margin-bottom: 5px;
    box-shadow: 0px 0px 10px 0px ##e2e2e2;
  }
`;

const ItemContainer = styled.div`
  border: 1px solid #e2e2e2;
  width: 100%;
  display: block;
  overflow: hidden;
  position: relative;
  &:hover {
    transition: border-color 250ms ease-in-out 0s;
    border-color: ${DarkGreen};
  }
`;

const ItemInnerContainer = styled.div`
  display: flex;
  flex: 1;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
`;

const ItemDescription = styled.div`
  display: flex;
  flex: 1;
  padding: 16px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
`;

const ItemName = styled.h4`
  display: flex;
  line-height: 24px;
  font-size: 16px;
  margin: auto 0;
`;

const ItemInfoContainer = styled.div`
  overflow: hidden;
  padding-top: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
`;

const ItemInfo = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #545454;
`;

const ItemPriceContainer = styled.div`
  display: flex;
  padding-top: 8px;
  margin-top: auto;
`;

const ItemPrice = styled.div`
  font-size: 16px;
  line-height: 24px;
`;

const ItemImageContainer = styled.div`
  height: 173px;
  flex-shrink: 0;
`;

const ItemImage = styled.img`
  height: 173px;
  width: 173px;
  object-fit: cover;
  flex-shrink: 0;
`;

export default ({ setOpenItem }) => {
  console.log(Object.entries(items));
  return (
    <MenuStyled>
      {Object.entries(items).map(([sectionName, items], i) => (
        <MenuSection key={i}>
          <h1>{sectionName}</h1>
          <ItemGrid>
            {items.map((food) => (
              <ItemOuterContainer
                key={food.name}
                img={food.img}
                onClick={() => {
                  setOpenItem(food);
                }}
              >
                <ItemContainer>
                  <ItemInnerContainer>
                    <ItemDescription>
                      <ItemName>{food.name}</ItemName>
                      <ItemInfoContainer>
                        <ItemInfo>{food.description}</ItemInfo>
                      </ItemInfoContainer>
                      <ItemPriceContainer>
                        <ItemPrice>{formatPrice(food.price)}</ItemPrice>
                      </ItemPriceContainer>
                    </ItemDescription>
                    {food.img && (
                      <ItemImageContainer>
                        <ItemImage src={food.img} />
                      </ItemImageContainer>
                    )}
                  </ItemInnerContainer>
                </ItemContainer>
              </ItemOuterContainer>
            ))}
          </ItemGrid>
        </MenuSection>
      ))}
    </MenuStyled>
  );
};
