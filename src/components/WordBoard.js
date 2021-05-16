import React from "react";

const WordBoard = ({ word }) => {
	return (
		<div className="row justify-center mb-2">
			<div className="word-board row justify-center align-center">{word}</div>
		</div>
	);
};

export default WordBoard;
