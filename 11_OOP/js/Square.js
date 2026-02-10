import RootFigure from "./RootFigure.js";

export default class Square extends RootFigure {
    constructor(side, bg) {
        super(side, side, bg);
    }
    setSide(side) {
        this.setWidth(side)
        this.setHeight(side)
    }
}