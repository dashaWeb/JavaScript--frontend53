
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


// let printStar = (count, starts = '') =>{
//     if(count < 1)
//         return '*'
//     return starts + printStar(count-1, '*')
// }
// console.log(printStar(10))

// 1234  --> 4321
// res = 0
//1. n = 1234 % 10 {4}
//2. res = res * 10 + 4 {4}
//3. parseInt(1234 / 10) {123} 

//1. n = 123 % 10 {3}
//2. res{4} = res * 10 + 3 {4 * 10 + 3 --> 43}
//3. parseInt(123 / 10) {12} 

//1. n = 12 % 10 {2}
//2. res{43} = res * 10 + 2 {43 * 10 + 2 --> 432}
//3. parseInt(12 / 10) {1} 

//1. n = 1 % 10 {1}
//2. res{432} = res * 10 + 1 {432 * 10 + 1 --> 4321}
//3. parseInt(1 / 10) {0} 

// let reverse = (n, res = 0) =>{
//     if(n == 0)
//         return res

//     let numb = parseInt(n / 10);
//     let rever = res * 10 + (n%10)
//     return reverse(numb, rever);
// }

// console.log(reverse(1234))


let fib = (n) => {
    if(n == 1 || n == 2)
        return 1
    return fib(n - 1) + fib(n - 2);
}
console.log(fib(6))

for(let i = 1; i < 10; i++)
{
    console.log(fib(i))
}