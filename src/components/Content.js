import React, { useState } from "react";
import Section from "./Section";
import Cart from "./Cart";

const Content = ({ data }) => {
  const [menu, setMenu] = useState(null);

  const receiveDateFromMenu = (index) => {
    console.log("index reçu: ", index);
    setMenu(index);
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
        <Cart fromMenu={menu} />
      </div>
    </div>
  );
};

export default Content;
