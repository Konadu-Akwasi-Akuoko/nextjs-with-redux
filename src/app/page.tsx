// import the store object from the store file
// The store is where the Redux state is stored and updated by reducers
import PreLoader from "@/components/Preloader";
import SearchInput from "@/components/SearchInput";
import Providers from "@/components/StoreProvider";
import { store } from "@/store";

import { setStartUpPokemon } from "@/store/searchSlice";
// export a default async function named Home
// This function is a React component that renders the home page
export default async function Home() {
  // fetch some data from an API endpoint using the fetch method
  const req = await fetch("http://localhost:3000/api/search");

  // convert the response to JSON format using the json method
  const data = await req.json();

  // dispatch an action to the store using the store.dispatch method
  // The action is created by the setStartUpPokemon function imported from the searchSlice file
  // The action has a type and a payload, which is the data fetched from the API
  // The action will be handled by a reducer in the searchSlice file, which will update the state accordingly
  store.dispatch(setStartUpPokemon(data));

  // return a JSX element that renders a main element
  // JSX is a syntax extension that allows writing HTML-like code in JavaScript
  // The main element contains two child components: PreLoader and Providers
  return (
    <main>
      {/* // PreLoader is a component that takes pokemons as a prop // pokemons is
      an array of objects that represent different pokemons // PreLoader will
      dispatch another action to the store with the same pokemons data // This
      is done to ensure that the store has the initial data when the app loads */}
      <PreLoader pokemons={data} />
      {/* // Providers is a component that wraps its children with a React Redux
      Provider component // Provider is a component that makes the Redux store
      available to all components in the app // Provider takes store as a prop,
      which is the same store object imported from the store file */}
      <Providers>
        {/* // SearchInput is a component that renders an input element and a
        PokemonTable component // SearchInput uses React Redux hooks to access
        and update the Redux state */}
        <SearchInput />
      </Providers>
    </main>
  );
}
