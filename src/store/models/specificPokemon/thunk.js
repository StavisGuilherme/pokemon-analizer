import { setPokemon } from "./action";

import axios from "axios";

export const specificPokemonThunk = (url) => (dispatch) => {
	axios.get(url).then((res) => {
		dispatch(setPokemon(res.data));
		window.localStorage.setItem("specificPokemon", JSON.stringify(res.data));
	});
};
