// document.body.style.background = "yellow";

/*
    - number (int)(float) // (BigInt)
    - string ("test javascript")
    - boolean (true, false)
    - null
    - undefined

    - object 
    - Symbol
*/

// let, var,  const


// var number = 45
// let number = 45
// console.log(number)
// number = 32
// console.log(number)

// const PI = 3.14;
// console.log(PI)

// PI = 15;
// console.log(PI)

// let firstName = "Olia"
// console.log(firstName)

// let firstName = "Petro" error

// alert("Hello World")
// let res = confirm("Exit");
// console.log(res)
// document.body.style.background = (res ? "green" : "red");

// let res = prompt("enter name", "none")
// console.log(res)

// +, -, /, *, %
// a++, b--, ++a, --b;

/*
-,
+,
!
    Priority
        ();
        ++a, --b;
        %;
        *, /;
        +,-;
        a++, b--
*/

// let number = +prompt("Enter number"); + cast number
// let number2 = +prompt("Enter number");

// let number = prompt("Enter number");
// let number2 = prompt("Enter number");

// number = parseInt(number); // 7
// number2 = parseFloat(number2) // 2.5
// let res = number + number2;
// console.log(number, '+', number2, '=',res);
// console.log(typeof(res));

// 1. Запросіть у користувача число, зведіть це число в 2 ступінь та виведіть на екран.
// let number = prompt("Enter number");
// console.log(number * number)

// 2. Запросіть у користувача 2 числа та виведіть середнє арифметичне цих чисел.
// let numb_1 = +prompt("Enter number")
// let numb_2 = +prompt("Enter number")
// console.log((numb_1 + numb_2) / 2)

// 3. Запросіть у користувача п'ятизначне число та перемістіть останню цифру на початок (із числа 12345 має вийти число 51234).
// let numb_1 = +prompt("Enter number")
// console.log(numb_1)
// let last = numb_1 % 10; // 12345 % 10 {5}
// console.log(last)
// numb_1 = parseInt(numb_1 / 10); // 12345 / 10 --> 1234.5
// console.log(numb_1)
// let res = (last * 10000) + numb_1
// console.log(res)

let name = "Olia"
let res = "Hello " + name + "!"
console.log(res)
