import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { specificPokemonThunk } from "../../store/models/specificPokemon/thunk";

import styled from "styled-components";

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
		<PokemonContainer>
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
		</PokemonContainer>
	);
};

export default Pokemon;

const PokemonContainer = styled.div`
	width: 10vw;
	box-sizing: border-box;
	color: #ffcb05;

	img {
		width: 8vw;
	}

	a {
		text-decoration: none;
		color: #ffcb05;
		text-shadow: 1px 1px #2b72b9;
	}

	a:hover {
		color: #2b72b9;
		text-shadow: 1px 1px #ffcb05;
	}

	p {
		margin-top: 0;
	}
`;
