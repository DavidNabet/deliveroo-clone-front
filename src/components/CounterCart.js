import React, { useState } from "react";

const CounterCart = ({ fromMenu, setFromMenu, line }) => {
	//   const [quantity, setQuantity] = useState(1);

	const handleClickPlus = () => {
		line.quantity += 1;
		const newLines = [...fromMenu];
		newLines.push(line);
		setFromMenu(newLines);
	};
	const handleClickMinus = () => {
		line.quantity -= 1;
		const newLines = [...fromMenu];
		const lineToRemove = newLines.find((item) => item === line);
		newLines.splice(newLines.indexOf(lineToRemove, 1));
		setFromMenu(newLines);
	};

	return (
		<>
			<span onClick={handleClickMinus}>-</span>
			<span>{line.quantity}</span>
			<span onClick={handleClickPlus}>+</span>
		</>
	);
};

export default CounterCart;
