import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import CountDown from "../components/Countdown";
import WordBoard from "../components/WordBoard";
import GameBtn from "../components/GameBtn";

import { getWordsFromMockAPI } from "../api/words";

const Home = () => {
	const [words, setWords] = useState([]);
	const [selectedWord, setSelectedWord] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getWordsFromMockAPI()
			.then((response) => {
				setWords(response.data);
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => setIsLoading(false));
	}, []);

	const handleGameBtnClick = () => {
		raffleSelectedWord();
	};

	const raffleSelectedWord = () => {
		const selectedWord = words[Math.floor(Math.random() * words.length)];
		setSelectedWord(selectedWord);
	};

	return (
		<div>
			<h1>
				Hora da Mímica! <Link to="/instrucoes">?</Link>
			</h1>
			<div>{isLoading}</div>
			{isLoading ? <h3>Gerando palavras fantásticas...</h3> : ""}
			{selectedWord && <CountDown selectedWord={selectedWord} />}
			{selectedWord && <WordBoard word={selectedWord} />}
			{!isLoading ? (
				<GameBtn
					selectedWord={selectedWord}
					onClick={() => handleGameBtnClick()}
				/>
			) : (
				""
			)}
		</div>
	);
};

export default Home;
