import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { specificPokemonThunk } from "../../store/models/specificPokemon/thunk";

import "./style.css";

const Pokemon = ({ name, image }) => {
	const pokeListFull = useSelector((state) => state.pokeListFull);
	const dispatch = useDispatch();

	const getSpecificPokemon = (pokeList, name) => {
		const pokeClicked = pokeList.filter(
			(pokemon) => pokemon.pokemon_species.name === name.toLowerCase()
		);

		return `https://pokeapi.co/api/v2/pokemon/${pokeClicked[0].pokemon_species.name}`;
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
					}}
				>
					{name.charAt(0).toUpperCase() + name.slice(1)}
				</p>
			</Link>
		</div>
	);
};

export default Pokemon;
