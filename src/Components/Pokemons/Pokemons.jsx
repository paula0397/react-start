import React from "react";
import pokemonsJson from "../../../pokemons.json";
import PokemonCard from "../PokemonCard/PokemonCard";

const Pokemons = ({ type }) => {
    let pokemonsByType = pokemonsJson[type];

    return (
        <div>
        {pokemonsByType.map((element) => {/* map, recorre uno por uno los elementos de mi arreglo */
            return <PokemonCard element= {element} key= {element.id} />;
        })}
        </div>
    );
};

export default Pokemons;
