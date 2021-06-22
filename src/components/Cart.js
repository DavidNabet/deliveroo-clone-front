import React, { useState } from "react";

const Cart = ({ cart, addCart, subStractCart }) => {
	let totalTTC = 0;
	const FRAIS_L = Number(2.5);
	let datas = {
		headers: cart.map((i) => Number(i.quantity)),
		prices: cart.map((i) => Number(i.price)),
	};
	const subTotal = () => {
		let newNumber;
		let nums = cart.map((i) => Number(i.price));
		if (nums.length <= 0) {
			return nums;
		}
		// else if(datas.headers.some((elem) => elem > 1)) {

		// }
		else {
			newNumber = nums.reduce((a, b) => (a += b));
			return Number(newNumber);
		}
	};
	// const multiplyPrice = () => {
	// 	let price = 0;
	// 	for (let i = 0; i < cart.length; i++) {
	// 		price += Number(cart[i].price) * cart[i].quantity;
	// 	}
	// 	return price;
	// };
	// console.log(multiplyPrice());

	const total = (frais) => {
		return parseInt(subTotal()) + frais;
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
					<span>Votre panier est vide</span>
				) : (
					<div>
						{cart.map((item, index) => {
							totalTTC = item.quantity * item.price;
							return (
								<div key={index}>
									<div className="cart_items">
										<div className="cart_line">
											<div className="cart_counter">
												<span onClick={() => subStractCart(item)}>-</span>
												<span>{item.quantity}</span>
												<span onClick={() => addCart(item)}>+</span>
											</div>
											<span className="cart_item-name">{item.title}</span>
											<span className="cart_amount">
												{item.quantity < 2 ? item.price : totalTTC} €
											</span>
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
