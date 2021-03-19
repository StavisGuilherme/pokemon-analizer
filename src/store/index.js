import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import pokeListFullReducer from "./models/pokeListFull/reducer";

const reducers = combineReducers({
	pokeListFull: pokeListFullReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
