import React, { useState } from "react";

const CounterCart = ({ passingQty }) => {
  const [quantity, setQuantity] = useState(0);

  const handleClickMinus = () => {
    setQuantity(quantity - 1);
    passingQuantity(quantity);
  };
  const handleClickPlus = () => {
    setQuantity(quantity + 1);
    passingQuantity(quantity);
  };

  const passingQuantity = (q) => {
    passingQty(q);
  };

  return (
    <>
      <span onClick={handleClickMinus}>-</span>
      <span>{quantity}</span>
      <span onClick={handleClickPlus}>+</span>
    </>
  );
};

export default CounterCart;
