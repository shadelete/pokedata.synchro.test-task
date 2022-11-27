import {randomInt} from "../services/random.js";

export const getData = async () => {
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${randomInt(1,905)}`)
        .then((res)=>res.json())
        .catch((error)=>console.error(error))
}