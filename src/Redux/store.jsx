import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { pokemonReducer } from "./Pokemon/reducer";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

// for development
const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
);
