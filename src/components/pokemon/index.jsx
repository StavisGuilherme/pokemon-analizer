import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { specificPokemonThunk } from "../../store/models/specificPokemon/thunk";
import { specificSpeciesThunk } from "../../store/models/specificSpecies/thunk";

import "./style.css";

const Pokemon = ({ name, image }) => {
	const pokeListFull = useSelector((state) => state.pokeListFull);
	const dispatch = useDispatch();

	const getSpecificPokemon = (pokeList, name) => {
		const pokeClicked = pokeList.filter(
			(pokemon) => pokemon.pokemon_species.name === name
		);

		console.log(pokeClicked[0].pokemon_species.name);
		return `https://pokeapi.co/api/v2/pokemon/${pokeClicked[0].pokemon_species.name}`;
	};

	const getSpecificSpecies = (pokeList, name) => {
		const pokeClicked = pokeList.filter(
			(pokemon) => pokemon.pokemon_species.name === name
		);

		console.log(pokeClicked[0].pokemon_species.url);
		return pokeClicked[0].pokemon_species.url;
	};

	return (
		<div className="pokemon">
			<img src={image} alt="pokemon avatar" />
			<Link to="/pokemon">
				<p
					onClick={(evt) => {
						dispatch(
							specificPokemonThunk(
								getSpecificPokemon(pokeListFull, evt.target.textContent)
							)
						);
						dispatch(
							specificSpeciesThunk(
								getSpecificSpecies(pokeListFull, evt.target.textContent)
							)
						);
					}}
				>
					{name}
				</p>
			</Link>
		</div>
	);
};

export default Pokemon;
