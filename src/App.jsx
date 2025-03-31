import { useState } from "react";
import { Header } from "./components/Header";
import { SideNav } from "./components/SideNav";
import { PokeCard } from "./components/PokeCard";
function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0);
  const [showSideMenu, setShowSideMenu] = useState(false);
  function handleShowSideMenu() {
    setShowSideMenu(!showSideMenu);
  }

  return (
    <>
      <Header handleShowSideMenu={handleShowSideMenu} />
      <SideNav
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
        handleShowSideMenu={handleShowSideMenu}
        showSideMenu={showSideMenu}
      />
      <PokeCard selectedPokemon={selectedPokemon} />
    </>
  );
}

export default App;
