import { useState } from "react";
import { first151Pokemon, getFullPokedexNumber } from "../utils";
export function SideNav(props) {
  const { selectedPokemon, setSelectedPokemon, handleShowSideMenu, showSideMenu } = props;
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
    <nav className={" " + (!showSideMenu ? " open" : "")}>
      <div className={"header " + (!showSideMenu ? " open" : "")}>
        <button onClick={handleShowSideMenu} className='open-nav-button'>
          <i className='fa-solid fa-arrow-left-long'></i>
        </button>
        <h1 className='text-gradient'>Pokédex</h1>
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
              handleShowSideMenu();
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
