import React, { useState, useEffect } from "react";
import PlusIcon from "./PlusIcon";
import MinusIcon from "./MinusIcon";

const Cart = ({ cart, addCart, subStractCart }) => {
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalItems, setTotalItems] = useState(0);
	useEffect(() => {
		let items = 0;
		let price = 0;
		cart.forEach((item) => {
			items += item.quantity;
			price += item.quantity * item.price;
		});
		setTotalPrice(price);
		setTotalItems(items);
	}, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
	const FRAIS_L = Number(2.5);
	let totalTTC = 0;

	const total = (frais) => {
		return parseInt(totalPrice) + frais;
	};

	return (
		<div className="cart_card">
			<button
				className={
					cart.length > 0 ? "cart_btn cart_validate" : "cart_btn cart_disabled"
				}
			>
				Valider mon panier
			</button>
			<div
				id="cart_bottom"
				className={cart.length > 0 ? "cart_added" : "cart_empty"}
			>
				{cart.length < 1 ? (
					<span className="empty">Votre panier est vide</span>
				) : (
					<div>
						{cart.map((item, index) => {
							totalTTC = item.quantity * item.price;
							return (
								<div key={index}>
									<div className="cart_items">
										<div className="cart_line">
											<div className="cart_counter">
												<span onClick={() => subStractCart(item)}>
													<MinusIcon
														size={20}
														style={{ cursor: "pointer", color: "#00CEBD" }}
													/>
												</span>
												<span>{item.quantity}</span>
												<span onClick={() => addCart(item)}>
													<PlusIcon
														size={20}
														style={{ cursor: "pointer", color: "#00CEBD" }}
													/>
												</span>
											</div>
											<span className="cart_item-name">{item.title}</span>
											<span className="cart_amount">
												{item.quantity < 2
													? item.price
													: totalTTC.toFixed(2).replace(".", ",")}{" "}
												€
											</span>
										</div>
									</div>
								</div>
							);
						})}
						<div className="cart_results">
							<div className="cart_result-line">
								<span className="cart_result-name">Sous-total</span>
								<span className="cart_amount">
									{totalPrice.toFixed(2).replace(".", ",")} €
								</span>
							</div>
							<div className="cart_result-line">
								<span className="cart_result-name">Frais de livraison</span>
								<span className="cart_amount">
									{FRAIS_L.toFixed(2).replace(".", ",")} €
								</span>
							</div>
						</div>
						<div className="cart_total">
							<span className="cart_result-name">Total</span>
							<span className="cart_amount">
								{total(FRAIS_L).toFixed(2).replace(".", ",")} €
							</span>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
