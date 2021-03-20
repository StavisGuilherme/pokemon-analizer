import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import pokeListFullReducer from "./models/pokeListFull/reducer";
import specificPokemonReducer from "./models/specificPokemon/reducer";
import specificSpeciesReducer from "./models/specificSpecies/reducer";

const reducers = combineReducers({
	pokeListFull: pokeListFullReducer,
	specificPokemon: specificPokemonReducer,
	specificSpecies: specificSpeciesReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
