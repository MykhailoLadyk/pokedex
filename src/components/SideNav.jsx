import { useState } from "react";
import { first151Pokemon, getFullPokedexNumber } from "../utils"; /// index is the default export from any folder, so it's not added in the path
export function SideNav(props) {
  const { selectedPokemon, setSelectedPokemon } = props;
  const [input, setInput] = useState("");
  const filteredPokemon = first151Pokemon.filter((val, index) => {
    if (getFullPokedexNumber(index).includes(input)) {
      return true;
    }
    if (val.toLowerCase().includes(input.toLowerCase())) {
      return true;
    }
    return false;
  });
  return (
    <nav>
      <div className={"header"}>
        <h1 className='text-gradient'>Pokedex</h1>
      </div>
      <input
        placeholder='E.g. 001 or Bulb'
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      {filteredPokemon.map((pokemon, pokemonIndex) => {
        const truePokeDexNumber = first151Pokemon.indexOf(pokemon);
        return (
          <button
            className={"nav-card" + (truePokeDexNumber === selectedPokemon ? "nav-card-selected" : "")}
            key={pokemonIndex}
            onClick={() => {
              setSelectedPokemon(truePokeDexNumber);
            }}
          >
            <p>{getFullPokedexNumber(truePokeDexNumber)}</p>
            <p>{pokemon}</p>
          </button>
        );
      })}
    </nav>
  );
}
