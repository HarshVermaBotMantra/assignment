import axios from "axios";
import {
  SET_NEXT_URL,
  SET_POKEMON_LIST,
  SET_PREVIOUS_URL,
  SET_TYPES_LIST,
} from "./actionType";

const setPokemonList = (payload) => {
  return {
    type: SET_POKEMON_LIST,
    payload,
  };
};

const setNextUrl = (payload) => {
  return {
    type: SET_NEXT_URL,
    payload,
  };
};

const setPreviousUrl = (payload) => {
  return {
    type: SET_PREVIOUS_URL,
    payload,
  };
};

const setTypeList = (payload) => {
  return {
    type: SET_TYPES_LIST,
    payload,
  };
};

export const getPokemonList = (payload) => (dispatch) => {
  const config = {
    method: "get",
    url: payload,
  };

  axios(config)
    .then((res) => {
      dispatch(setPreviousUrl(res.data.previous));
      dispatch(setNextUrl(res.data.next));
      dispatch(setPokemonList(res.data.results));
    })
    .catch((e) => {
      console.log(e);
    });
};

export const getTypeList = () => (dispatch) => {
  const config = {
    method: "get",
    url: "https://pokeapi.co/api/v2/type",
  };

  axios(config).then((res) => {
    console.log(res.data.results);
    dispatch(setTypeList(res.data.results));
  });
};
