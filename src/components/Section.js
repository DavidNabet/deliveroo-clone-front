import React, { useState } from "react";

const Section = ({ data, addCart }) => {
	return (
		<>
			{data.map((menu) => {
				return (
					<div className="menuItem" key={menu.id} onClick={() => addCart(menu)}>
						<div className="card">
							<div className="text">
								<h3>{menu.title}</h3>
								<p>{menu.description}</p>
								<div className="infos">
									<span className="price">{menu.price} €</span>
									{menu.popular && (
										<span className="popular">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="#ff8000"
												className="feather feather-star"
												style={{
													width: 20,
													height: 20,
													marginRight: 5,
												}}
											>
												<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
											</svg>
											Populaire
										</span>
									)}
								</div>
							</div>
							{menu.picture && (
								<div className="picture">
									<img src={menu.picture} alt="" />
								</div>
							)}
						</div>
					</div>
				);
			})}
		</>
	);
};

export default Section;
