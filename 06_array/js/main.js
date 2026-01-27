// let number = new Array(1,45,12,15)
// console.log(number)


// let color = ['red','blue','purple','yellow'];
// document.writeln(color[2])
// document.writeln(color)
// console.log(color.toString())
// console.log(color.length)

// let marks = new Array(5)
// for (let i = 0; i < marks.length; i++) {
//    marks[i] = Math.floor(Math.random() * 12 + 1) //+prompt("Enter mark")
// }
// console.log(marks)
// let sum = 0
// for (const element of marks) {
//     sum += element
// }
// console.log(sum)
// console.log('Avg :: ', sum / marks.length)

// let max = marks[0]
// let min = marks[0]
// let maxIndex = 0
// let minIndex = 0

// for (let i = 0; i < marks.length; i++) {
//     if(max < marks[i])
//     {
//         max = marks[i]; 
//         maxIndex = i;
//     }
//     if(min > marks[i])
//     {
//         min = marks[i]
//         minIndex = i
//     }
// }
// console.log('Max ---> ', 'index :: ', maxIndex, 'value :: ', max)
// console.log('Min --->', 'index :: ', minIndex, 'value :: ', min)

// marks[0] = 2

// let test = ['ddd',2,[1,2,3],true]
// console.log(test)

// let color = ['red','blue','purple','yellow'];
// console.log('origin :: ',color)
// color.push('gold')
// console.log('push :: ', color)
// console.log(color.push('lime','pink','green'))
// console.log('push :: ', color)

// color.unshift('violet')
// console.log('unshift :: ', color)

// color.pop()
// console.log('pop :: ', color)

// color.shift()
// console.log('shift :: ', color)

// let new_color = color.slice(0,3)
// console.log('slice :: ', new_color)

// new_color = color.splice(0,3,'Magenta','orange','brown','black','cyan','pink')
// console.log('splice :: ', color)
// console.log('slice :: ', new_color)

// color = color.concat(new_color)
// console.log('concat :: ', color)

// color.sort()
// console.log('sort :: ', color)

// // number = [1,11,12,2,3,5,13,22]
// // number.sort()
// // console.log(number)

// color.reverse()
// console.log('reverse :: ', color)

// console.log(color.indexOf('pink'))
// console.log(color.indexOf('bbb'))
// console.log(color.lastIndexOf('pink'))
// // console.log(color.fill('pink'))
// console.log(color.includes('pink'))

// console.log(color.toString())
// document.writeln(color.join('<br>'))
// console.log('10.11.2002'.split('.'))
// console.log('lorem ipsum dolor'.split(' '))

// console.log(color[-1])
// console.log(color.at(-1))

// let arr = [1,2,3,4]
// let clone = arr.slice();

// if(arr == clone)
// {
//     console.log('unique')
// }
// else{
//     console.error("Error")
// }

// console.log('origin', arr)
// console.log('clone', clone)

// clone[0] = 333

// clone.pop()
// clone.push(7,8,9)

// console.log('origin', arr)
// console.log('clone', clone)

matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
console.log(matrix[2][1])
matrix[2][1] = 333
console.log(matrix[2][1])

console.log('-------------------')
let clone = matrix.slice()

for (let i = 0; i < clone.length; i++) {
    clone[i] = matrix[i].slice()
}


console.log('Origin',matrix)
console.log('Clone ',clone)
clone.push([7,8,9])
clone[2][1] = 'Test'
console.log('-------------------')
console.log('Origin',matrix)
console.log('Clone ',clone)