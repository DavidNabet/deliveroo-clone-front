import React, { useState } from "react";
import Section from "./Section";
import Cart from "./Cart";

const Content = ({ data }) => {
  const [panier, setPanier] = useState([]);

  const receiveDateFromMenu = (tab) => {
    console.log("tab: ", tab);
    const newCart = [...panier];
    //{ name: tab.title, price: tab.price, quantity: 1 }
    newCart.push(tab);
    console.log("avant ", newCart);
    setPanier(newCart);
    console.log("après ", newCart);
  };

  return (
    <div className="content">
      <div className="menu">
        {data.map((category, i) => {
          return (
            <div key={i}>
              {category.meals.length > 0 && (
                <div className="menuItems">
                  <h2>{category.name}</h2>
                  <div className="menuItems--items">
                    <Section
                      data={category.meals}
                      returnData={receiveDateFromMenu}
                    />
                    ;
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="cart">
        <Cart fromMenu={panier} />
      </div>
    </div>
  );
};

export default Content;
