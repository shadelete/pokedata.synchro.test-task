export function appendMultiplyChild(elements){
    const wrapper = this.element = document.createElement('div');

    for(let item of elements){
        wrapper.appendChild(item)
    }

    return wrapper;
}