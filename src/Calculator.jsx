import React from "react";
import { useState } from "react";
import "./Calculator.css";

export default class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			enteredValues: 0,
		};
	}
	render() {
		return (
			<div className="calculator">
				<Display values={this.state.enteredValues} />
				<Button text="AC" id="clear" className="clear" />
				<Button text="/" id="divide" className="operator" />
				<Button text="*" id="multiply" className="operator" />
				<Button text="7" id="seven" className="number" />
				<Button text="8" id="eight" className="number" />
				<Button text="9" id="nine" className="number" />
				<Button text="-" id="subtract" className="operator" />
				<Button text="4" id="four" className="number" />
				<Button text="5" id="five" className="number" />
				<Button text="6" id="six" className="number" />
				<Button text="+" id="add" className="operator" />
				<Button text="1" id="one" className="number" />
				<Button text="2" id="two" className="number" />
				<Button text="3" id="three" className="number" />
				<Button text="0" id="zero" className="number" />
				<Button text="." id="decimal" className="number" />
				<Button text="=" id="equals" className="equals" />
			</div>
		);
	}
}

export class Display extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="display" id="display">
				{this.props.values}
			</div>
		);
	}
}

export function Button({ text, id, className }) {
	return (
		<button type="button" className={className} id={id}>
			{text}
		</button>
	);
}
