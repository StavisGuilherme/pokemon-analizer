import { setRegion } from "./actions";

export const regionThunk = (region) => (dispatch, getState) => {
	dispatch(setRegion(region));
};
