function pokeImage(url) {
    const el = this.element = document.createElement('img');
    el.src = url;
    return el;
}

function pokeName(name) {
    const el = this.element = document.createElement('h1');
    el.innerHTML = name;
    return el;
}

function pokeStats(statsArray) {
    const el = this.element = document.createElement('h1');
    el.innerHTML = name;
    return el;
}
