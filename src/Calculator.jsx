import React from "react";
import "./Calculator.css";

function Calculator({ children }) {
	return <div className="calculator">{children}</div>;
}

export function Display({ value }) {
	return (
		<div className="display" id="display">
			{value}
		</div>
	);
}

export function Button({ text, id, className }) {
	return (
		<button type="button" className={className} id={id}>
			{text}
		</button>
	);
}

export default Calculator;
