import { useEffect, useState } from "react";

function TestFetchAPI() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(resp => resp.json())
            .then((data) => {
                console.log(data.results);
                setPokemons(pokemons => data.results)
                console.log(pokemons);
            })
    }, [])

    return (
        pokemons.map(pokemon => {
            return (
                <p key={pokemon.name}>{pokemon.name}</p>
            );
        })
    );
}

export default TestFetchAPI;