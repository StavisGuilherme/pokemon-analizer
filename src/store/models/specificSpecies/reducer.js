const specificSpeciesReducer = (state = {}, action) => {
	switch (action.type) {
		case "@specificSpecies/SET_SPECIES":
			return action.pokemon;

		default:
			return state;
	}
};

export default specificSpeciesReducer;
