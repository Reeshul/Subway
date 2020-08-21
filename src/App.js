import React from "react";
import Navbar from "./Navbar";
import { Banner } from "./Banner/Banner";
import Menu from "./Menu/Menu";
import { GlobalStyle } from "./Styles/GlobalStyle";
import ItemDialog from "./ItemDialog/ItemDialog";
import Order from "./Order/Order";
import useOpenItem from "./Hooks/useOpenItem";
import useOrders from "./Hooks/useOrders";
import useTitle from "./Hooks/useTitle";

const App = () => {
  const openItem = useOpenItem();
  const orders = useOrders();
  useTitle({ ...openItem, ...orders });

  return (
    <>
      <GlobalStyle />
      <ItemDialog {...openItem} {...orders} />
      <Navbar />
      <Order {...orders} {...openItem} />
      <Banner />
      <Menu {...openItem} />
    </>
  );
};

export default App;
