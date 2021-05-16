import { Link } from "react-router-dom";

const Instructions = () => {
	return (
		<div>
			<h2>Instruções</h2>
			<p>
				O jogo possui uma lista de palavras, uma palavra é sorteada a cada
				rodada, onde uma pessoa do time deve tentar fazer seu time advinhar a
				palavra fazendo mímica (não vale falar!).
			</p>
			<p>
				Cada rodada tem um tempo limite, se o time não conseguir acertar a
				palavra antes do tempo acabar, perde sua vez e é a vez do outro time,
				onde será sorteada nova palavra.
			</p>
			<Link to="/">
				<button>Jogar!</button>
			</Link>
		</div>
	);
};

export default Instructions;
