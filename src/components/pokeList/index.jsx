import { useSelector } from "react-redux";

import { useState } from "react";

import Pokemon from "../pokemon";
import SearchBar from "../../components/searchBar";

import { RiDeleteBack2Line } from "react-icons/ri";

import styled from "styled-components";

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
		<PokeListContainer>
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
		</PokeListContainer>
	);
};

export default PokeList;

const PokeListContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	.search {
		display: flex;
		flex-flow: row nowrap;
		width: 35vw;
		justify-content: space-around;
		margin-bottom: 3vh;
		margin-top: 5vh;
	}

	.search input {
		font-size: 1rem;
		line-height: 1.5rem;
		border: none;
		border-radius: 0.5vw;
		text-align: center;
		color: #ffcb05;
		/* text-shadow: 1px 1px #2b72b9; */
		background-color: #eb2f28;
		box-shadow: 0px 1px 10px #ffcb05;
		font-weight: bold;
		outline: none;
	}

	.search input::placeholder {
		color: #ffcb05;
	}

	.search button {
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
		padding: 1vh;
	}

	.search button:active {
		background-color: #dd2922;
		box-shadow: 0px 2px 5px #666;
		transform: translateY(4px);
	}

	.search button .icon {
		color: #ffcb05;
		align-self: flex-end;
		font-size: 1.3rem;
	}

	.pokeList {
		display: flex;
		flex-flow: row wrap;
		width: 85vw;
		justify-content: space-around;
	}

	.navButtons {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-around;
		margin-top: 2vh;
		width: 30vw;
	}

	.navButtons button {
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
		box-shadow: 0px 1px 10px #ffcb05;
		font-weight: bold;
		outline: none;
		cursor: pointer;
		padding: 1vh;
	}

	.navButtons button:active {
		background-color: #dd2922;
		box-shadow: 0px 2px 5px #666;
		transform: translateY(4px);
	}

	.navButtons button:disabled {
		background-color: #dd2922;
		box-shadow: 0px 2px 5px #666;
		color: #777;
	}
`;
