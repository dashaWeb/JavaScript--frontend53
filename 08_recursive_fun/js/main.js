
/*
    5! = 5 * 4!
    4! = 4 * 3!
    3! = 3 * 2!
    2! = 2 * 1!
    1! = 1
    0! = 1
*/

let factor = (number) => {
    if (number == 1 || number == 0)
        return 1
    return number * factor(number - 1)
}

// console.log(factor(5))

// 2^4 --> 2 * 2^3
// 2^3 --> 2 * 2^2
// 2^2 --> 2 * 2^1
// 2^1 --> 2

// let pow = (n, step) => {
//     if(step == 1)
//         return n
//     return n * pow(n, step - 1)
// }

// let pow = (n, step) => {
//     if(step > 1)
//         return n * pow(n, step - 1)
//     return n
// }
// console.log(pow(11,2))


let printStar = (count, starts = '') =>{
    if(count < 1)
        return '*'
    return starts + printStar(count-1, '*')
}
console.log(printStar(10))