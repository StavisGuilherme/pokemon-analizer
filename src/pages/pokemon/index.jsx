import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./style.css";

const Pokemon = () => {
	const specificPokemon = useSelector((state) => state.specificPokemon);
	const storage = JSON.parse(window.localStorage.getItem("specificPokemon"));
	const history = useHistory();

	// console.log(specificPokemon);
	// console.log(storage);

	// console.log(specificSpecies.evolution_chain);
	// console.log(speciesStorage);

	return (
		<div className="pokeDetails">
			<h1>{specificPokemon.name ? specificPokemon.name : storage.name}</h1>

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
		</div>
	);
};

export default Pokemon;
