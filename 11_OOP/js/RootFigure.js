export default class RootFigure {
    #width;
    #height;
    constructor(width, height, bg = 'black') {
        this.#width = width
        this.#height = height
        this.bg = bg
    }
    print() {
       document.body.innerHTML +=  `<div style = '
            width:${this.#width}px;
            height:${this.#height}px;
            background-color:${this.bg};
            margin-bottom:20px;
            '></div>`
    }
    setWidth(width) {
        this.#width = width
    }
    setHeight(height) {
        this.#height = height
    }
    getWidth() {
        return `${this.#width}px`;
    }
    getHeight() {
        return `${this.#height}px`;
    }
}

// export default RootFigure