import { first151Pokemon, getFullPokedexNumber } from "../utils"; /// index is the default export from any folder, so it's not added in the path
export function SideNav(props) {
  const { setSelectedPokemon } = props;
  return (
    <nav>
      <div className={"header"}>
        <h1 className='text-gradient'>Pokedex</h1>
      </div>
      <input />
      {first151Pokemon.map((pokemon, pokemonIndex) => {
        return (
          <button
            className={"nav-card"}
            key={pokemonIndex}
            onClick={() => {
              setSelectedPokemon(pokemonIndex);
            }}
          >
            <p>{getFullPokedexNumber(pokemonIndex)}</p>
            <p>{pokemon}</p>
          </button>
        );
      })}
    </nav>
  );
}
