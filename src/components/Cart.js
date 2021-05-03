import React from "react";

const Cart = () => {
  return (
    <div className="cart_card">
      <button className="cart_btn cart_disabled">Valider mon panier</button>
      <div className="cart_empty">Votre panier est vide</div>
    </div>
  );
};

export default Cart;
