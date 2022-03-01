export const getAllPokemon = async () => {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    console.log('Response:', response);
    return response.json();
}

export const getOnePokemon = async (url) => {
    let response = await fetch(url);
    return response.json();
}