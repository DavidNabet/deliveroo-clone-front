import React from "react";
import Section from "./Section";
import Cart from "./Cart";

const Content = ({ data }) => {
  return (
    <div className="content">
      <div className="menu">
        <Section data={data} />
      </div>
      <div className="cart">
        <Cart />
      </div>
    </div>
  );
};

export default Content;
