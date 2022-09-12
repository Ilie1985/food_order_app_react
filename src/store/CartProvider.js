import React from "react";
import CartContext from "./cart-context";

function CartProvider(props) {
  const addItemToCardHandler = (item) => {};

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmpount: 0,
    addItem: addItemToCardHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
