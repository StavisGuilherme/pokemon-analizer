import { setSpecies } from "./action";

import axios from "axios";

export const specificSpeciesThunk = (url) => (dispatch) => {
	axios.get(url).then((res) => {
		dispatch(setSpecies(res.data));
		window.localStorage.setItem("specificSpecies", JSON.stringify(res.data));
	});
};
