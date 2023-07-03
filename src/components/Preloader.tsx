"use client";

import { store } from "@/store";
import { setStartUpPokemon } from "@/store/searchSlice";
import { Pokemon } from "@/types";

import { useRef } from "react";

export default function PreLoader({ pokemons }: { pokemons: Pokemon[] }) {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setStartUpPokemon(pokemons));
    loaded.current = true;
  }

  return null;
}

// ! Why is useRef used instead of useState or any other hook
// useRef is used instead of useState because useRef does not trigger a re-render
// when its value changes. Instead, it only triggers a re-render when the component
// when its value changes, while useState does. In this case, the loaded reference
// is only used to check if the component has dispatched its initial action, and it
// does not affect the UI rendering. Therefore, useRef is more suitable than
// useState for this purpose.

// According to the React documentation 1, useRef is useful for keeping any mutable
// value around similar to how you’d use instance fields in classes. useState is useful
// for storing state variables that affect the output of the component.
