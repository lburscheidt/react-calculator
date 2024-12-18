import React from "react";
import { useState } from "react";
import "./Calculator.css";
import Button from "./Button";
import Display from "./Display";

export default function Calculator() {
	const [enteredValues, setEnteredValues] = useState([]);
	function operate(num1, num2, operator) {
		if (operator === "+") {
			return num1 + num2;
		}
		if (operator === "-") {
			return num1 - num2;
		}
		if (operator === "*") {
			return num1 * num2;
		}
		if (operator === "/") {
			return num1 / num2;
		}
	}

	function handleEqualsClick() {
		let calcArray = [];
		let newArr = [...enteredValues].join("").split(" ");
		console.log(newArr);
		for (let entry of newArr) {
			let number;
			if (entry.match(/\d+/g)) {
				number = Number.parseFloat(entry);
				calcArray.push(number);
			} else {
				number = entry;
				calcArray.push(number);
			}
		}
		console.log(calcArray);
		for (const element of calcArray) {
			if (
				(element === "+" ||
					element === "-" ||
					element === "/" ||
					element === "*") &&
				calcArray.length > 1
			) {
				const num1 = calcArray[calcArray.indexOf(element) - 1];
				const num2 = calcArray[calcArray.indexOf(element) + 1];
				const result = operate(num1, num2, element);
				calcArray = calcArray.slice(3);
				calcArray.unshift(result);
			}
		}
		console.log(calcArray[0]);
		setEnteredValues([...calcArray]);
		//	setEnteredValues(calcArray[0]);
	}

	function handleClearBtnClick() {
		setEnteredValues([0]);
	}

	function handleOperatorClick(e) {
		const operator = e.target.innerText;

		if (operator === "-") {
			const newArr = [...enteredValues].join("").concat(" ", operator, " ");
			setEnteredValues(newArr);
		} else if (
			enteredValues[enteredValues.length - 2] !== "+" &&
			enteredValues[enteredValues.length - 2] !== "/" &&
			enteredValues[enteredValues.length - 2] !== "-" &&
			enteredValues[enteredValues.length - 2] !== "*"
		) {
			const newArr = [...enteredValues].join("").concat(" ", operator, " ");
			setEnteredValues(newArr);
		} else {
			const newArr = [...enteredValues]
				.slice(0, enteredValues.indexOf(" "))
				.concat(" ", operator, " ");
			console.log(newArr);
			setEnteredValues(newArr);
		}
	}

	const handleNumberClick = (e) => {
		const number = e.target.innerText;
		const display = document.getElementById("display");
		if (display.innerText === "0") {
			setEnteredValues([]);
			setEnteredValues([number]);
		} else {
			setEnteredValues([...enteredValues, number]);
		}
	};

	function handleDecimalClick() {
		console.log(enteredValues);
		let lastNumber;
		if (enteredValues.includes(" ")) {
			lastNumber = enteredValues.slice(enteredValues.lastIndexOf(" "));
		} else {
			lastNumber = enteredValues.slice(0);
		}
		console.log(lastNumber);
		if (
			enteredValues[enteredValues.length - 1].match(/\d/) &&
			!lastNumber.includes(".")
		) {
			setEnteredValues([...enteredValues, "."]);
		}
		if (!enteredValues.includes(".")) {
			setEnteredValues([...enteredValues, "."]);
		}
	}
	return (
		<div className="calculator">
			<Display values={enteredValues} />
			<Button
				text="AC"
				id="clear"
				className="clear"
				onClick={handleClearBtnClick}
			/>
			<Button
				text="/"
				id="divide"
				className="operator"
				onClick={handleOperatorClick}
			/>
			<Button
				text="*"
				id="multiply"
				className="operator"
				onClick={handleOperatorClick}
			/>
			<Button
				text="7"
				id="seven"
				className="number"
				onClick={handleNumberClick}
			/>
			<Button
				text="8"
				id="eight"
				className="number"
				onClick={handleNumberClick}
			/>
			<Button
				text="9"
				id="nine"
				className="number"
				onClick={handleNumberClick}
			/>
			<Button
				text="-"
				id="subtract"
				className="operator"
				onClick={handleOperatorClick}
			/>
			<Button
				text="4"
				id="four"
				className="number"
				onClick={handleNumberClick}
			/>
			<Button
				text="5"
				id="five"
				className="number"
				onClick={handleNumberClick}
			/>
			<Button
				text="6"
				id="six"
				className="number"
				onClick={handleNumberClick}
			/>
			<Button
				text="+"
				id="add"
				className="operator"
				onClick={handleOperatorClick}
			/>
			<Button
				text="1"
				id="one"
				className="number"
				onClick={handleNumberClick}
			/>
			<Button
				text="2"
				id="two"
				className="number"
				onClick={handleNumberClick}
			/>
			<Button
				text="3"
				id="three"
				className="number"
				onClick={handleNumberClick}
			/>
			<Button
				text="0"
				id="zero"
				className="number"
				onClick={handleNumberClick}
			/>
			<Button
				text="."
				id="decimal"
				className="number"
				onClick={handleDecimalClick}
			/>
			<Button
				text="="
				id="equals"
				className="equals"
				onClick={handleEqualsClick}
			/>
		</div>
	);
}
