export const getAllPokemon = async () => {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const parsedResponse = await response.json();
    console.log('Response:', parsedResponse);
    return parsedResponse;
}

Promise.all(getAllPokemon)
.then(data => console.log(data));

export const getOnePokemon = async (url) => {
    let response = await fetch(url);
    return response.json();
}