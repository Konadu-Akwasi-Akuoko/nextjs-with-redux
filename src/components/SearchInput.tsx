"use client";
import { AppDispatch, RootState, store } from "@/store";
import { setSearch } from "@/store/searchSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import PokemonTable from "./PokemonTable";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function SearchInput() {
  const dispatch = useAppDispatch();
  const searchState = useAppSelector((state) => state.search.search);
  const startUpPokemon = useAppSelector((state) => state.search.startUpPokemon);
  return (
    <div>
      <input
        type="text"
        value={searchState}
        placeholder="Search"
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
      <h1>{searchState}</h1>
      <PokemonTable pokemons={startUpPokemon} />
    </div>
  );
}
