import React, { useState } from "react";
import Section from "./Section";
import Cart from "./Cart";

const Content = ({ data }) => {
	const [cart, setCart] = useState([]);

	// const receiveDateFromMenu = (tab) => {
	//   console.log("tab: ", tab);
	//   const newCart = [...panier];
	//   //{ name: tab.title, price: tab.price, quantity: 1 }
	//   newCart.push({
	//     title: tab.title,
	//     price: tab.price,
	//     quantity: 1,
	//     id: tab.id,
	//   });
	//   console.log("avant ", newCart);
	//   setPanier(newCart);
	//   console.log("après ", newCart);
	// };

	const addCart = (item) => {
		const newCart = [...cart];
		const exist = newCart.find((elem) => elem.id === item.id);
		if (exist) {
			exist.quantity += 1;
		} else {
			newCart.push({ ...item, quantity: 1 });
		}
		setCart(newCart);
	};
	const subStractCart = (item) => {
		const newCart = [...cart];
		const exist = newCart.find((elem) => elem.id === item.id);
		if (item.quantity === 1) {
			const index = newCart.indexOf(exist);
			newCart.splice(index, 1);
		} else {
			exist.quantity -= 1;
		}
		setCart(newCart);
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
										<Section data={category.meals} addCart={addCart} />
									</div>
								</div>
							)}
						</div>
					);
				})}
			</div>
			<div className="cart">
				<Cart
					cart={cart}
					addCart={addCart}
					subStractCart={subStractCart}
					setCart={setCart}
				/>
			</div>
		</div>
	);
};

export default Content;
