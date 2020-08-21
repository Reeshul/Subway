import { useState } from "react";

export default () => {
  const [orders, setOrders] = useState([]);
  return {
    orders,
    setOrders,
  };
};
