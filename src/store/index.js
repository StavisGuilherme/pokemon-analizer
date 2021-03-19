import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import RegionReducer from "./models/region/reducer";
import pokeListPageReducer from "./models/pokeListPage/reducer";

const reducers = combineReducers({
	region: RegionReducer,
	pokeListPage: pokeListPageReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
