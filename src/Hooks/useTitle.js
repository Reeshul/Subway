import { useEffect } from "react";

export default ({ openItem, orders }) => {
  useEffect(() => {
    if (openItem) {
      document.title = openItem.name;
    } else {
      document.title =
        orders.length === 0
          ? "What's for dinner?"
          : `[${orders.length}] items in your order!`;
    }
  });
};
