// import the Pokemon type from the types file
import { Pokemon } from "@/types";

// import the PokemonTable component from the PokemonTable file
import PokemonTable from "./PokemonTable";

// import the store object from the store/index file
import { store } from "@/store";

// export a function component named SSRPokemonTable
export default function SSRPokemonTable() {
  return (
    // return a JSX element that renders a div element
    <div>
      {/* inside the div element, render a PokemonTable component // pass an
      array of Pokemon objects as a prop named pokemons get the array of
      Pokemon objects from the store state using the expression
      store.getState().search.startUpPokemon */}
      <PokemonTable pokemons={store.getState().search.startUpPokemon} />
    </div>
  );
}
