import { setPage } from "./actions";

import axios from "axios";

export const pokeListPageThunk = (offset) => (dispatch) => {
	axios
		.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
		.then((res) => {
			dispatch(setPage(res.data.results));
		});
};
