import {
  SET_NEXT_URL,
  SET_POKEMON_LIST,
  SET_PREVIOUS_URL,
  SET_TYPES_LIST,
} from "./actionType";

const init = {
  pokemonList: [],
  next: null,
  prev: null,
  typeList: [],
  type: "All",
};

export const pokemonReducer = (state = init, { type, payload }) => {
  switch (type) {
    case SET_POKEMON_LIST:
      return {
        ...state,
        pokemonList: payload,
      };
    case SET_NEXT_URL:
      return {
        ...state,
        next: payload,
      };

    case SET_PREVIOUS_URL:
      return {
        ...state,
        prev: payload,
      };

    case SET_TYPES_LIST:
      return {
        ...state,
        typeList: payload,
      };

    default:
      return state;
  }
};
