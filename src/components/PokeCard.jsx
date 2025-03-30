import { useEffect, useState } from "react";
import { getFullPokedexNumber, getPokedexNumber } from "../utils";
import { TypeCard } from "./TypeCard";
export function PokeCard(props) {
  const { selectedPokemon } = props;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { name, height, abilties, stats, types, moves, sprites } = data || {};

  useEffect(() => {
    if (loading || !localStorage) {
      return;
    }
    let cache = {};
    if (localStorage.getItem("pokedex")) {
      cache = JSON.parse(localStorage.getItem("pokedex"));
    }
    if (selectedPokemon in cache) {
      setData(cache[selectedPokemon]);
      return;
    }
    async function fetchData() {
      setLoading(true);
      try {
        const baseUrl = "https://pokeapi.co/api/v2";
        const suffix = `/pokemon/${getPokedexNumber(selectedPokemon)}`;
        const finalUrl = baseUrl + suffix;
        const res = await fetch(finalUrl);
        const pokemonData = await res.json();
        setData(pokemonData);
        cache[selectedPokemon] = pokemonData;
        localStorage.setItem("pokedex", JSON.stringify(cache));
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
        console.log(data);
      }
    }
    fetchData();
  }, [selectedPokemon]);

  if (loading || !data) {
    return <h3>Loading...</h3>;
  }
  return (
    <div className='poke-card'>
      <div>
        <h4>#{getFullPokedexNumber(selectedPokemon)}</h4>
        <h2>{name}</h2>
      </div>
      <div className='type-container'>
        {types.map((types, typeIndex) => {
          return <TypeCard key={typeIndex} type={types.type.name} />;
        })}
      </div>
    </div>
  );
}
