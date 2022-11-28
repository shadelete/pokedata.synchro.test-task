export const getData = async (id) => {
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res)=>res.json())
        .catch((error)=>console.error(error))
}