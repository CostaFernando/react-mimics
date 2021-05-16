import { useState, useEffect } from "react";

const CountDown = ({ selectedWord }) => {
	const COUNTER_INITIAL_VALUE = 60;
	const [counter, setCounter] = useState(COUNTER_INITIAL_VALUE);

	useEffect(() => {
		let timeout;
		if (counter > 0) {
			timeout = setTimeout(() => setCounter(counter - 1), 1000);
		}

		return () => {
			clearTimeout(timeout);
		};
	}, [counter]);

	useEffect(() => {
		setCounter(COUNTER_INITIAL_VALUE);
	}, [selectedWord]);

	return (
		<div className="mb-2">
			<strong style={counter > 0 ? {} : { color: "red" }}>
				{counter > 0 ? counter : "Tempo esgotado!"}
			</strong>
		</div>
	);
};

export default CountDown;
