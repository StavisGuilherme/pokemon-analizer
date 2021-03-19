import { useSelector, useDispatch } from "react-redux";

import { pokeListPageThunk } from "../../store/models/pokeListPage/thunk";
import { useState } from "react";

import Pokemon from "../pokemon";

import "./style.css";

const PokeList = ({ startOffset }) => {
	const pokeListPage = useSelector((state) => state.pokeListPage);
	const dispatch = useDispatch();

	const [currentOffset, setCurrentOffset] = useState(startOffset);

	return (
		<div className="pokeList">
			{pokeListPage.map((pokemon, index) => {
				const getImgUrl = (url) => {
					const brokenUrl = url.split("/");
					const id = brokenUrl[brokenUrl.length - 2];

					return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
				};
				return (
					<Pokemon
						key={index}
						name={pokemon.name}
						image={getImgUrl(pokemon.url)}
					/>
				);
			})}
			<button
				onClick={() => {
					currentOffset > startOffset && setCurrentOffset(currentOffset - 20);
					dispatch(pokeListPageThunk(currentOffset));
					console.log(pokeListPage);
				}}
			>
				Página Anterior
			</button>
			<button
				onClick={() => {
					setCurrentOffset(currentOffset + 20);
					dispatch(pokeListPageThunk(currentOffset));
					console.log(pokeListPage);
				}}
			>
				Próxima Página
			</button>
		</div>
	);
};

export default PokeList;
