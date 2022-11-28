import "./style.scss"
import {getData} from "../../api/api.js";
import {createModalWindow} from "../../elements/modal/index.js";

export const DetailedCard = async (data) => {

    const response = await getData(data);
    const wrapper = document.createElement('div');

    wrapper.innerHTML =
        `
            <h1>${response.name}</h1>
            <img src=${response.sprites.front_default} alt="pokemon">
        `

    createModalWindow(wrapper);
}