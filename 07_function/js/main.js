

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

// let isLeap = year => year % 4 == 0 && year % 100 != 0 || year % 400 == 0;

// let numberOfMonth = (month, year) => {
//     switch (month) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             return 31;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             return 30;
//         case 2: 
//             return isLeap(year) ? 29 : 28;
//     }
// }
// let getNextDate = (day, month, year) =>
// {
//     day++;
//     if(numberOfMonth(month, year) < day){
//         day = 1;
//         month++;
//     }
//     if(month > 12){
//         month = 1
//         year++;
//     }
//     return `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0':''}${month}.${year}`
// }

// console.log('28.02.2004', getNextDate(28,2,2004))
// console.log('28.02.2005', getNextDate(28,2,2005))
// console.log('31.03.2005', getNextDate(31,3,2005))
// console.log('30.04.2005', getNextDate(30,4,2005))
// console.log('31.12.2005', getNextDate(31,12,2005))












//EXERCISE 1
//Напишіть функцію, яка приймає 2 числа та повертає менше з них.
// let por = (a,b) =>{
//     if(a > b){
//         return b
//     }
//     else{
//         return a
//     }
// }
// let por = (a,b) => a > b ? a : b;
// console.log(por(10,11))


//EXERCISE 2
//Напишіть функцію, яка зводить передане число у вказаний ступінь.
// let power = (a,pow) => a ** pow 
// console.log(power(2,4))
// console.log(power(5,2))



//Exercise 3
//Напишіть функцію, яка приймає 2 числа та знак (+, –, *, /), підраховує приклад і повертає результат.
// let calc = (first,second,oper) => {
//     let res 
//     switch(oper){
//         case "+":
//             res = first + second;
//             break;
//         case "-":
//             res = first - second;
//             break;
//         case "*":
//             res = first * second;
//             break;
//         case "/":
//             if(second != 0){
//                 res = first / second
//             }   
//             else{
//                 console.log("На 0 діити неможлтво")
//             }
//         default:
//             return `Невідомий оператор`
//     }
//     return res
// }
// console.log(calc(2,4,"+"))
// console.log(calc(5,2,"-"))
// console.log(calc(2,4,"*"))
// console.log(calc(5,2,"/"))






//EXERCISE 4
//Напишіть функцію, яка перевіряє, чи є передане їй число простим.
// let number = num =>{
//     for(let i = 2; i < num / 2; i++)
//      {
            // if(num % i == 0)
            //     return false;
//      }
    // return true;
// }





//EXERCISE 5
//Напишіть функцію, яка приймає число і виводить таблицю множення для цього числа. Викличте функцію для всіх чисел від 2 до 9.
// let table = (number) =>{
//     let res
//     for(let i = 1;i < 10;i++){
//         res = number * i
//         document.writeln(number  + " * " + i + " = " + res + `<br>`)
//     }
// }
// for(let j= 2;j <= 9;j++){
//     table(j);
// }





//Exercise 6
//Напишіть функцію, яка реалізує роботу оператора %. Функція приймає 2 параметри та повертає залишок від ділення першого параметра на другий. У функції використовуйте тільки +, –, *, /, а оператор % не використовувати.
// let remainder = (one, two) => {
//     let int = parseInt(one / two);
//     let res = one - int * two;
//     return res;
// }

// console.log(remainder(5, 2));
// console.log(remainder(5, 2));






//EXERCISE 7
//Напишіть функцію, яка приймає від 1 до 5 чисел і повертає їх суму.
// function sum(...args) {
//     let res = 0
//     for (const element of args) {
//         res += element
//     }
//     return res;
// }
// console.log(sum(1,32))
// console.log(sum(1,22,3))
// console.log(sum(1,2,43,14))
// console.log(sum(1,2,3,4,55))




//EXERCISE 8
//Напишіть функцію, яка приймає від 1 до 5 чисел і повертає більше з них.
// function maxNumber(...args) {
//     let max = args[0]
//     for(const el of args) {
//         if (el > max) {
//             max = el;
//         }
//     }
//     return max;
// }
// console.log(maxNumber(1,32))
// console.log(maxNumber(1,22,3))
// console.log(maxNumber(1,2,43,14))
// console.log(maxNumber(1,2,3,4,55))





//EXERCISE 9
//Напишіть функцію, яка виводить усі парні або непарні числа у вказаному користувачем діапазоні. Які числа виводити, визначається третім параметром типу bool (true — парні, false — непарні).
// let num = (n1,n2,isEven) =>{
//     for(let i = n1;i <= n2;i++){
//         if(isEven && i % 2 == 0){
//             console.log(i);
//         }
//         if(!isEven && i % 2 != 0){
//             console.log(i);
//         }
//     }
// }
// num(1,20, true);
// num(1,20,false);




//Exercise 10
//Напишіть функцію, яка приймає дату (день, місяць, рік) і повертає дату наступного дня у вигляді рядка «день.місяць.рік». Перевірку на високосний рік бажано написати окремою функцією.
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



