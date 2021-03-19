const pokeListFullReducer = (state = [], action) => {
	switch (action.type) {
		case "@pokeListFull/SET_LIST":
			return action.pokeList;

		default:
			return state;
	}
};

export default pokeListFullReducer;
