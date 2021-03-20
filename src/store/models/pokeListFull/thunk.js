import { setList } from "./actions";

import axios from "axios";

export const pokeListFullThunk = () => (dispatch) => {
	axios.get(`https://pokeapi.co/api/v2/pokedex/national`).then((res) => {
		dispatch(setList(res.data.pokemon_entries));
		window.localStorage.setItem(
			"pokeListFull",
			JSON.stringify(res.data.pokemon_entries)
		);
	});
};
