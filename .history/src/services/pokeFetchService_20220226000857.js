export const getAllPokemon = async () => {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const parsedResponse = await response.json();
    console.log('Response:', parsedResponse);
    return parsedResponse;
}

export const getOnePokemon = async (url) => {
    let response = await fetch(url);
    const parsedResponse = await response.json();
    console.log([parsedResponse]);
    return parsedResponse;
}