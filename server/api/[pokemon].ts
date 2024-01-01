import { IPokemon } from "~/types/pokemon.types";

export default defineEventHandler(async (event) => {
  try {
    const { pokemon }: any = event.context.params;
    const response: IPokemon = await $fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );

    const pokemonResponse: IPokemon = {
      id: response.id,
      name: response.name,
      sprites: {
        front_default: response.sprites.front_default,
        back_default: response.sprites.back_default,
        back_female: response.sprites.back_female,
        back_shiny: response.sprites.back_shiny,
        back_shiny_female: response.sprites.back_shiny_female,
        front_female: response.sprites.front_female,
        front_shiny: response.sprites.front_shiny,
        front_shiny_female: response.sprites.front_shiny_female,
        other: response.sprites.other,
        versions: response.sprites.versions,
      },
    };
    return pokemonResponse;
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found",
    });
  }
});
