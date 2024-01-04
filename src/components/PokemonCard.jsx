import { useEffect, useState } from "react";

export default function PokemonCard({ name, url }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      });
  }, []);

  return (
    <article className="container max-w-40">
      <img
        className="max-w-40 max-h-40 min-h-30 p-3"
        src={pokemon.sprites?.other?.dream_world?.front_default}
        alt=""
      />
      <h3 className="text-center">{name}</h3>
    </article>
  );
}
