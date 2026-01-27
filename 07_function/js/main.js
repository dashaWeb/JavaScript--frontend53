

// function showMessage(name)
// {
//     document.writeln(`Hello ${name} <br>`)
// }

// let showMessage = function(name)
// {
//     document.writeln(`Hello ${name} <br>`)
// }

// let showMessage = name => document.writeln(`Hello ${name} <br>`)
// showMessage('Olia')
// showMessage('Taras')
// showMessage('Alina')

// let sum = (first, second) => {
//     return first + second
// }

// let sum = (first, second, third) => {
//     return first + second
// }

// let res = sum(2, 5) / 2
// console.log(res)
// console.log(sum(2, 5))

// let div = (first, second) => {
//     if (second == 0)
//         return null
//     return first / second
// }

// console.log(div(10, 2))
// console.log(div(10, 0))


// function sum(text, ...args) {
//     let res = 0
//     for (const element of args) {
//         res += element
//     }
//     return `${text}  ${res}`;
// }

// console.log(sum("Result 1 :: ",1,2))
// console.log(sum("Result 2 :: ",1,2,3))
// console.log(sum("Result 3 :: ",1,2,3,4))
// console.log(sum("Result 4 :: ",1,2,3,4,55,47,54,8,4))

// sum(1,2)
// sum(1,2,3)
// sum(1,2,3,4,44,58,65,44)
// spreat  ...arr
// rest    ...arr   

// let getMessage = (name, lastname = '') => `${lastname} ${name}`
// console.log(getMessage('Olia'))

// let arr = [1,2,3,4,5]
// let arr2 = [10,48,54,65]

// let res = [
//     ...arr,
//     ...arr2
// ]
// console.log(res)

// Task 6
// Напишіть функцію, яка реалізує роботу оператора %. Функція приймає 2 параметри та повертає залишок від ділення першого параметра на другий. У функції використовуйте тільки +, –, *, /, а оператор % не використовувати.
// let ramainder = (one, two) =>
// {
//     let int = parseInt(one / two)
//     let res = one - int * two
//     return res;
// }
// console.log(ramainder(5,2)) // 1
// console.log(ramainder(11,3)) // 2
// console.log(ramainder(9,13)) // 9

// Task 10
// Напишіть функцію, яка приймає дату (день, місяць, рік) і повертає дату наступного дня у вигляді рядка «день.місяць.рік». Перевірку на високосний рік бажано написати окремою функцією.

// let isLeap = (year) => 
// {
//     // if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
//     //     return true
//     // return false
//     return year % 4 == 0 && year % 100 != 0 || year % 400 == 0
// }

let isLeap = year => year % 4 == 0 && year % 100 != 0 || year % 400 == 0;

let numberOfMonth = (month, year) => {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2: 
            return isLeap(year) ? 29 : 28;
    }
}
let getNextDate = (day, month, year) =>
{
    day++;
    if(numberOfMonth(month, year) < day){
        day = 1;
        month++;
    }
    if(month > 12){
        month = 1
        year++;
    }
    return `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0':''}${month}.${year}`
}

console.log('28.02.2004', getNextDate(28,2,2004))
console.log('28.02.2005', getNextDate(28,2,2005))
console.log('31.03.2005', getNextDate(31,3,2005))
console.log('30.04.2005', getNextDate(30,4,2005))
console.log('31.12.2005', getNextDate(31,12,2005))