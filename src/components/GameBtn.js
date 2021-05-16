const GameBtn = ({ selectedWord, onClick }) => {
	const btnText = selectedWord ? "Sortear nova palavra" : "Começar o jogo";

	return <button onClick={onClick}>{btnText}</button>;
};

export default GameBtn;
