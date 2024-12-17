import React from "react";
import Calculator, { Display, Button } from "./Calculator";
//import "./App.css";
import "./Calculator.css";

function App() {
	return (
		<Calculator>
			<Display value="0" />
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
		</Calculator>
	);
}

export default App;
