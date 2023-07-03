// import the SSRPokemonTable component from the components folder
import SSRPokemonTable from "@/components/SSRPokemonTable";

// import the store object from the store file
import { store } from "@/store";

// import the setStartUpPokemon action creator function from the searchSlice file
import { setStartUpPokemon } from "@/store/searchSlice";

// export a default async function named Home
export default async function Home() {
  // make a fetch request to the /api/search endpoint and await the response
  const req = await fetch("http://localhost:3000/api/search");

  // parse the response as JSON and await the data
  const data = await req.json();

  // We can call store.dispatch to set the data
  // for a slice in the store, as long as we have an action creator
  // that returns an action function that returns an action object with
  // the appropriate type and payload.
  // call the store.dispatch method with the setStartUpPokemon action creator function
  // pass the data as an argument to the action creator function
  // this will dispatch an action object to the store with the type setStartUpPokemon and the payload data
  // this will trigger the searchReducer function to update the startUpPokemon state with the data
  store.dispatch(setStartUpPokemon(data));

  // return a JSX element that renders a main element
  return (
    <main>
      {/* inside the main element, render a SSRPokemonTable component */}
      <SSRPokemonTable />
    </main>
  );
}
