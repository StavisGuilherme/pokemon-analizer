const pokeListPageReducer = (state = [], action) => {
	switch (action.type) {
		case "@pokeListPage/SET_PAGE":
			return action.pageList;

		default:
			return state;
	}
};

export default pokeListPageReducer;
