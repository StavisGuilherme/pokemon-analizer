const regionReducer = (state = "", action) => {
	switch (action.type) {
		case "@region/SET_REGION":
			return action.region;

		default:
			return state;
	}
};

export default regionReducer;
