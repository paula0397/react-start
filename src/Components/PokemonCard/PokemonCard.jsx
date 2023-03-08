import React from "react";

const PokemonCard = ({element}) => {
    return (
        <div /* key={element.id} */> {/* colocar una llave unica para que no salga error */}
            <h1>{element.name}</h1>
            <h2> {element.powerLevel} </h2>
            <h2> {element.agressive ? "es agresivo" : "no es agresivo"} </h2>
            <img src={element.avatar} alt="" />
        </div>
    );
};

export default PokemonCard;
