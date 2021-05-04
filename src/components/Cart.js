import React, { useState } from "react";

const Cart = ({ fromMenu }) => {
  const [quantity, setQuantity] = useState(0);

  console.log(fromMenu);

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
            {fromMenu.map((item, i) => {
              return (
                <div key={i}>
                  <div className="cart_items">
                    <div className="cart_line">
                      <div className="cart_counter">
                        <span>-</span>
                        <span>1</span>
                        <span>+</span>
                      </div>
                      <span className="cart_item-name">{item.title}</span>
                      <span className="cart_amount">{item.price}</span>
                    </div>
                  </div>
                  <div className="cart_results">
                    <div className="cart_result-line">
                      <span className="cart_result-name">Sous-total</span>
                      <span className="cart_amount">{item.price}</span>
                    </div>
                    <div className="cart_result-line">
                      <span className="cart_result-name">
                        Frais de livraison
                      </span>
                      <span className="cart_amount">{item.price}</span>
                    </div>
                  </div>
                  <div className="cart_total">
                    <span className="cart_result-name">Total</span>
                    <span className="cart_amount">{item.price}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
