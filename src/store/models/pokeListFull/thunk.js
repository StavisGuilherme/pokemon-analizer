import { setList } from "./actions";

import axios from "axios";

export const pokeListFullThunk = () => (dispatch) => {
	axios.get(`https://pokeapi.co/api/v2/pokedex/national`).then((res) => {
		dispatch(setList(res.data.pokemon_entries));
	});
};
