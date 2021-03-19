import PokeList from "../../components/pokeList";
import { useSelector } from "react-redux";
import { useState } from "react";

const Main = () => {
	const region = useSelector((state) => state.region);

	let startOffset = 0;
	console.log(region);

	if (region === "Kanto") {
		startOffset = 0;
	} else if (region === "Jhoto") {
		startOffset = 151;
	} else if (region === "Hoen") {
		startOffset = 251;
	}
	return (
		<>
			<h1>Pokémons da região de {region}</h1>

			<PokeList startOffset={startOffset} />
		</>
	);
};

export default Main;
