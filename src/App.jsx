import clsx from "clsx";
import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemonList(data.results);
      });
  }, []);

  return (
    <main className={clsx("bg-black min-h-svh", "p-5", "text-white")}>
      <img
        src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Pokemon.png"
        alt=""
        className="w-52 mx-auto"
      />
      <section
        className={clsx("border border-red-500 inline-grid gap-4 grid-cols-9")}
      >
        {pokemonList.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.url}
              name={pokemon.name}
              url={pokemon.url}
            />
          );
        })}
      </section>
    </main>
  );
}
