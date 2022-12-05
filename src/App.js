import "./App.css";
import PokemonCard from "./Components/PokemonCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPokemonList, getTypeList } from "./Redux/Pokemon/action";
import { Button } from "@mui/material";

function App() {
  const { pokemonList, next, prev, typeList } = useSelector(
    (state) => state.pokemon
  );
  const [type, setType] = useState("All");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getPokemonList("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTypeList());
  }, []);

  const handleGetPokemon = (payload) => {
    dispatch(getPokemonList(payload));
  };

  return (
    <div className="App">
      <div className="nav-btn">
        <Button
          variant="contained"
          color="secondary"
          disabled={!prev}
          onClick={() => handleGetPokemon(prev)}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          color="secondary"
          disabled={!next}
          onClick={() => handleGetPokemon(next)}
        >
          Next
        </Button>
      </div>
      <div className="pokemon-cards-wapper">
        {pokemonList?.map((item) => (
          <PokemonCard item={item} key={item.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
