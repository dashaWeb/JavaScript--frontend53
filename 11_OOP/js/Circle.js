import Square from "./Square.js";
export default class Circle extends Square {
    constructor(radius, bg) {
        super(radius * 2, bg);
        this.brRadius = '50%';
    }
    print() {
        document.body.innerHTML += `<div style = '
            width:${this.getHeight()};
            height:${this.getWidth()};
            background-color:${this.bg};
            border-radius:${this.brRadius};
            margin-bottom:20px;
            '></div>`
    }
}