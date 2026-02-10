
import RootFigure from "./RootFigure.js"
import Square from "./Square.js"
import Circle from "./Circle.js"






let figure = new RootFigure(200, 300, 'red')
console.log(figure)
figure.print();

let square = new Square(200, 'green')
square.print()
// square.#width = 500 Error
square.setSide(300)
square.print()

let circle = new Circle(100, 'pink')
circle.print()

let arr = [4,1,2,11,8,22]
console.log(arr)
arr = arr.sort((a,b) => a - b)
console.log(arr)
let text = ['red','aquahhhhhhhh','pinkjjj']
console.log(text.sort((a,b) => {
    if(a < b)
        return -1
    if(a > b)
        return 1
    return 0
}))