import React, { useState } from "react";
import CounterCart from "./CounterCart";

const Cart = ({ fromMenu }) => {
  const FRAIS_L = Number(2.5);
  const subTotal = () => {
    let newNumber;
    let nums = fromMenu.map((i) => Number(i.price));
    if (nums.length <= 0) {
      return nums;
    } else {
      newNumber = nums.reduce((a, b) => (a += b));
      return Number(newNumber);
    }
  };

  const multiplyPrice = () => {
    let price = 0;
    for (let i = 0; i < fromMenu.length; i++) {
      price += Number(fromMenu[i].price) * fromMenu[i].quantity;
    }
    return price;
  };
  console.log(multiplyPrice());

  const total = (frais) => {
    return parseInt(subTotal()) + frais;
  };

  // const handleClickMinus = (index) => {
  //   const newQty = [...fromMenu];
  //   newQty[index].quantity -= 1;
  //   setQuantity(newQty);
  // };
  // const handleClickPlus = (index) => {
  //   const newQty = [...fromMenu];
  //   newQty[index].quantity += 1;
  //   setQuantity(newQty);
  // };

  return (
    <div className="cart_card">
      <button
        className={
          fromMenu.length > 0
            ? "cart_btn cart_validate"
            : "cart_btn cart_disabled"
        }
      >
        Valider mon panier
      </button>
      <div
        id="cart_bottom"
        className={fromMenu.length > 0 ? "cart_added" : "cart_empty"}
      >
        {fromMenu.length < 1 ? (
          <span>Votre panier est vide</span>
        ) : (
          <div>
            {fromMenu.map((item, index) => {
              return (
                <div key={index}>
                  <div className="cart_items">
                    <div className="cart_line">
                      <div className="cart_counter">
                        <CounterCart
                        // recupQty={multiplyPrice(quantity, item.price)}
                        />
                      </div>
                      <span className="cart_item-name">{item.title}</span>
                      <span className="cart_amount">{item.price} €</span>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="cart_results">
              <div className="cart_result-line">
                <span className="cart_result-name">Sous-total</span>
                <span className="cart_amount">{subTotal().toFixed(2)} €</span>
              </div>
              <div className="cart_result-line">
                <span className="cart_result-name">Frais de livraison</span>
                <span className="cart_amount">{FRAIS_L} €</span>
              </div>
            </div>
            <div className="cart_total">
              <span className="cart_result-name">Total</span>
              <span className="cart_amount">{total(FRAIS_L).toFixed(2)} €</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
