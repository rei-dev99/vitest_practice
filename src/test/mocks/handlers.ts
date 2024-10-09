// src/mocks/handlers.js
import { http, HttpResponse } from "msw";

const pokemon: any = {
  "25": {
    name: "pikachu",
    sprites: { front_default: "http://example.com/pikachu.png" },
  },
};

export const handlers = [
  http.get(
    "https://pokeapi.co/api/v2/pokemon/:id",
    ({ params }: {params:{ id: string }}) => {
      const id = params.id;

      const pokemonData = pokemon[id];
      if (pokemon) {
        return HttpResponse.json({...pokemonData}, { status: 200 });
      } else {
        return HttpResponse.json({ message: "Not Found" }, { status: 404 });
      }
    }
  ),
];
