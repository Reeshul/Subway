import React from "react";
import styled from "styled-components";
import { DarkGreen } from "../Styles/colors";
import { Title } from "../Styles/title";
import { formatPrice } from "../Data/ItemData";
import QuantityInput from "./QuantityInput";
import useQuantity from "../Hooks/useQuantity";
import Salads from "./Salads";
import useSalads from "../Hooks/useSalads";
import useChoice from "../Hooks/useChoice";

const Dialog = styled.div`
  width: 676px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 508px);
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const DialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled(Title)`
  margin: 10px;
  color: white;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${DarkGreen};
  ${({ disabled }) =>
    disabled &&
    `
      opacity: 0.5;
      background-color: grey;
      pointer-events: none;
  `}
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0x;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

const HeaderImage = styled.img`
  height: 400px;
  object-fit: cover;
`;

const HeaderContent = styled.div`
  padding: 24px 24px 32px;
`;

const HeaderTitle = styled.h1`
  line-height: 44px;
  font-size: 36px;
  display: flex;
`;

const HeaderDetails = styled.div`
  padding-top: 16px;
  color: rgb(84, 84, 84);
  line-height: 20px;
  font-size: 14px;
`;

export const getPrice = (order) => {
  return order.quantity * order.price;
};

function hasSalads(food) {
  if (food.section === "Salad Bowls") return true;
  if (food.section === "6-Inch Classic Subs") return true;
  if (food.section === "Footlong Classic Subs") return true;
}

const ItemDialogContainer = ({ openItem, setOpenItem, setOrders, orders }) => {
  const quantity = useQuantity(openItem && openItem.quantity);
  const salads = useSalads(openItem.salads);
  const choiceRadio = useChoice(openItem.choice);
  const isEditing = openItem.index >= -1;

  const closeDialog = () => {
    setOpenItem();
  };

  const order = {
    ...openItem,
    quantity: quantity.value,
    salads: salads.salads,
    choice: choiceRadio.value,
  };

  const editOrder = () => {
    const newOrders = [...orders];
    newOrders[openItem.index] = order;
    setOrders(newOrders);
    closeDialog();
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    closeDialog();
  };

  return (
    <>
      <DialogShadow onClick={closeDialog} />
      <Dialog>
        {openItem.img && <HeaderImage src={openItem.img} />}
        <HeaderContent>
          <HeaderTitle>{openItem.name}</HeaderTitle>
          <HeaderDetails>{openItem.description}</HeaderDetails>
        </HeaderContent>
        {hasSalads(openItem) && <Salads {...salads} />}
        <DialogFooter>
          <QuantityInput quantity={quantity} />
          <ConfirmButton
            onClick={isEditing ? editOrder : addToOrder}
            disabled={openItem.choices && !choiceRadio.value}
          >
            {isEditing ? "Update order: " : `Add ${order.quantity} to order `}
            {formatPrice(getPrice(order))}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  );
};

const ItemDialog = (props) => {
  if (!props.openItem) return null;
  return <ItemDialogContainer {...props} />;
};

export default ItemDialog;
