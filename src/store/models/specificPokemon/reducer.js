const specificPokemonReducer = (state = {}, action) => {
	switch (action.type) {
		case "@specificPokemon/SET_POKEMON":
			return action.pokemon;

		default:
			return state;
	}
};

export default specificPokemonReducer;
