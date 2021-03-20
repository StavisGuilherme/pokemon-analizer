import { useSelector } from "react-redux";

import { useState } from "react";

import Pokemon from "../pokemon";
import SearchBar from "../../components/searchBar";

import { RiDeleteBack2Line } from "react-icons/ri";

import "./style.css";

const PokeList = () => {
	const pokeListFull = useSelector((state) => state.pokeListFull);
	const storagePokeList = JSON.parse(
		window.localStorage.getItem("pokeListFull")
	);

	const [currentOffset, setCurrentOffset] = useState(0);
	const [search, setSearch] = useState("");

	const handleClickNext = () => {
		if (currentOffset + 20 < 898) {
			setCurrentOffset(currentOffset + 20);
		}
	};

	const handleClickPrevious = () => {
		if (currentOffset > 0) {
			setCurrentOffset(currentOffset - 20);
		}
	};

	return (
		<>
			<div className="search">
				<SearchBar
					search={search}
					setSearch={setSearch}
					setCurrentOffset={setCurrentOffset}
				/>
				<button
					className="clear"
					onClick={() => {
						setSearch("");
					}}
				>
					<span className="icon">
						<RiDeleteBack2Line />
					</span>
					Limpar
				</button>
			</div>
			<div className="pokeList">
				{pokeListFull.length !== 0
					? pokeListFull
							.filter((pokemon) => {
								if (search.length) {
									return pokemon.pokemon_species.name
										.toLowerCase()
										.includes(search.toLowerCase());
								} else {
									return pokeListFull;
								}
							})
							.map((pokemon, index) => {
								const init = currentOffset;
								const final = currentOffset + 19;

								const getImgUrl = (url) => {
									const brokenUrl = url.split("/");
									const id = brokenUrl[brokenUrl.length - 2];

									return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
								};
								if (index >= init && index <= final) {
									return (
										<div className="pokemon" key={index}>
											<Pokemon
												name={pokemon.pokemon_species.name}
												image={getImgUrl(pokemon.pokemon_species.url)}
											/>
										</div>
									);
								}
							})
					: storagePokeList
							.filter((pokemon) => {
								if (search.length) {
									return pokemon.pokemon_species.name
										.toLowerCase()
										.includes(search.toLowerCase());
								} else {
									return pokeListFull;
								}
							})
							.map((pokemon, index) => {
								const init = currentOffset;
								const final = currentOffset + 19;

								const getImgUrl = (url) => {
									const brokenUrl = url.split("/");
									const id = brokenUrl[brokenUrl.length - 2];

									return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
								};
								if (index >= init && index <= final) {
									return (
										<div className="pokemon" key={index}>
											<Pokemon
												name={pokemon.pokemon_species.name}
												image={getImgUrl(pokemon.pokemon_species.url)}
											/>
										</div>
									);
								}
							})}
			</div>
			<div className="navButtons">
				<button onClick={handleClickPrevious} disabled={search}>
					Página Anterior
				</button>
				<button onClick={handleClickNext} disabled={search}>
					Próxima Página
				</button>
			</div>
		</>
	);
};

export default PokeList;
