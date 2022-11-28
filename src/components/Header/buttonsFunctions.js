import {createNewCard} from "../Card/index.js";
import preloader from "../../assets/img/preloader.svg";
import {getData} from "../../api/api.js";
import {randomInt} from "../../services/random.js";
import {pokeData} from "../../data/pokeData.js";
import {concatArrays} from "../../services/concatArrays.js";

export const addCard = async () => {
    const container = document.getElementById('main-wrapper');

    container.appendChild(createNewCard({picture:preloader}))

    const res = await getData(randomInt(1,905));

    pokeData.push({
        id: res.id,
        name: res.name,
        picture: res.sprites.front_default
    })

    container.removeChild(container.lastChild)
    container.appendChild(createNewCard({id:res.id,name:res.name,picture: res.sprites.front_default}))

    localStorage.setItem("data",
        localStorage.data === undefined
        ||
        localStorage.length === 0
            ? JSON.stringify(pokeData)
            : JSON.stringify(concatArrays(JSON.parse(localStorage.data),[{id: res.id,name:res.name,picture: res.sprites.front_default}]))
    );
}

export const deleteCard = () => {
    const container = document.getElementById('main-wrapper');
    localStorage.setItem("data",JSON.stringify(JSON.parse(localStorage.data).slice(0, -1)));
    container.removeChild(container.lastChild)
}

export const clearCards = () => {
    const container = document.getElementById('main-wrapper');
    pokeData.length = 0
    localStorage.clear();
    container.innerHTML = ''
}