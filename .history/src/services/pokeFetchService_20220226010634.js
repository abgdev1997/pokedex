export const getAllPokemon = async () => {
    return await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    ?.then(response => response.json())
}

export const getOnePokemon = async (url) => {
    return await fetch(url)
    ?.then(response => response.json())
}