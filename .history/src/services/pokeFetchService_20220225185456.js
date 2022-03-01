export const getAllPokemon = async () => {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    console.log('Response:', response);
    return response.json();
}