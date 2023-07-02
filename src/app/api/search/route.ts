import { NextResponse } from "next/server";
import pokemon from "@/pokemon.json";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");
  // Filter down the pokemon to get that name and use that as a response to the client
  const pokemonData = pokemon.filter((p) =>
    // Convert all to lowercase and filter it
    p.name.toLowerCase().includes(name?.toLowerCase() ?? "")
  );
  return NextResponse.json(pokemonData.slice(0, 10));
}
