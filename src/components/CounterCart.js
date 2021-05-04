import React, { useState } from "react";

const CounterCart = ({ cartLine, setCartLine, line }) => {
  //   const [quantity, setQuantity] = useState(1);

  const handleClickPlus = () => {
    line.quantity += 1;
    const newLines = [...cartLine];
    newLines.push(line);
    setCartLine(newLines);
    // setQuantity(quantity - 1);
    //   passingQuantity(quantity);
  };
  const handleClickMinus = () => {
    line.quantity -= 1;
    const newLines = [...cartLine];
    const lineToRemove = newLines.find((item) => item === line);
    newLines.splice(newLines.indexOf(lineToRemove, 1));
    setCartLine(newLines);
    // setQuantity(quantity + 1);
    // passingQuantity(quantity);
  };

  //   const passingQuantity = (q) => {
  //     recupQty(q);
  //   };

  return (
    <>
      <span
        // style={{ display: quantity < 1 ? "none" : "inline" }}
        onClick={handleClickMinus}
      >
        -
      </span>
      <span>{line.quantity}</span>
      <span
        // style={{ display: quantity >= 10 ? "none" : "inline" }}
        onClick={handleClickPlus}
      >
        +
      </span>
    </>
  );
};

export default CounterCart;
