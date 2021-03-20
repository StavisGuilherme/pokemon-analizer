import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

const Pokemon = () => {
	const specificPokemon = useSelector((state) => state.specificPokemon);
	const storage = JSON.parse(window.localStorage.getItem("specificPokemon"));
	const history = useHistory();

	const captalize = (word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	};

	return (
		<PokeDetials>
			<h1>
				{specificPokemon.name
					? captalize(specificPokemon.name)
					: captalize(storage.name)}
			</h1>

			<img
				src={
					specificPokemon.name
						? specificPokemon.sprites.front_default
						: storage.sprites.front_default
				}
				alt=""
			/>

			<h2>Tipos</h2>
			<ul className="tipos">
				{specificPokemon.types
					? specificPokemon.types.map((type, index) => {
							return <li key={index}>{type.type.name}</li>;
					  })
					: storage.types.map((type, index) => {
							return <li key={index}>{type.type.name}</li>;
					  })}
			</ul>

			<h2>Golpes:</h2>
			<ul className="golpes">
				{specificPokemon.moves
					? specificPokemon.moves.map((move, index) => {
							return <li key={index}>{move.move.name}</li>;
					  })
					: storage.moves.map((move, index) => {
							return <li key={index}>{move.move.name}</li>;
					  })}
			</ul>

			<div className="buttons">
				<button onClick={() => history.push("/home")}>Voltar</button>
			</div>
		</PokeDetials>
	);
};

export default Pokemon;

const PokeDetials = styled.div`
	margin: 0;
	background-image: linear-gradient(#eb2f28 35%, #2b73b9 100%);
	height: 150vh;

	img {
		width: 15vw;
	}

	h1,
	h2 {
		color: #ffcb05;
		text-shadow: 2px 2px #2b72b9;
		margin-bottom: 1vh;
	}

	.tipos {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-around;
		width: 40vw;
		margin: 0 auto;
		color: #ffcb05;
		list-style: none;
		text-shadow: 1px 1px #2b72b9;
	}

	.golpes {
		display: flex;
		flex-flow: column wrap;
		height: 80vh;
		width: 70vw;
		list-style: none;
		margin: 0 auto;
	}

	.golpes li {
		padding: 0.5vw;
		width: 9vw;
		color: #ffcb05;
		text-shadow: 1px 1px #2b72b9;
	}

	.buttons {
		margin-top: 5vh;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-around;
	}

	.buttons button {
		font-size: 1rem;
		width: 8vw;
		border: 1px solid #ffcb05;
		border-radius: 0.5vw;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		color: #ffcb05;
		/* text-shadow: 1px 1px #2b72b9; */
		background-color: #eb2f28;
		box-shadow: 0px 2px 5px #ffcb05;
		font-weight: bold;
		outline: none;
		cursor: pointer;
		padding: 2vh;
	}

	.buttons button:active {
		background-color: #dd2922;
		box-shadow: 0px 2px 5px #666;
		transform: translateY(4px);
	}
`;
