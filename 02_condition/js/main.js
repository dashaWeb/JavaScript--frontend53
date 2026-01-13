/*
    Унарний оператор
        -
        +
        !
        a++
        b--

    Бінарний оператор
        a + b
        a - b
        a % b

    Тернарний
        a ? b : c

*/

// ==, !=, <, >, <=, >=, ===
// && - and
// || - or

// let c,d,e;
// let a = 5, b = 5;

// document.write(`<p>${a} == ${b} --> ${a == b} </p>`); // false
// document.write(`<p>${a} != ${b} --> ${a != b} </p>`); // true
// document.write(`<p>${a} > ${b}  --> ${a > b} </p>`); // false
// document.write(`<p>${a} < ${b}  --> ${a < b} </p>`); // true
// document.write(`<p>${a} >= ${b} --> ${a >= b} </p>`); // false
// document.write(`<p>${a} <= ${b} --> ${a <= b} </p>`); // true

// let day = prompt("Enter number day")

// if(day == 1)
// {
//     document.write(`<h2> Monday </h2>`)
// }
// else if(day == 2)
// {
//     document.write(`<h2> Tuesday </h2>`)
// }
// else if(day == 3)
// {
//     document.write(`<h2> Wednesday </h2>`)
// }
// else{
//     document.write(`<h2 style = 'color:red;'> Error. Invalid data </h2>`)
// }

// let login = prompt("Who came")
// if(login.toLowerCase() == "admin".toLowerCase()/*login == 'admin' || login == "Admin" || login == "ADMIN"*/)
// {
//     let password = prompt("Enter password")
//     if(password == "STEP"){
//         document.write(`<h2> Welcome </h2>`)
//     }
//     else if(password == null)
//     {
//         document.write(`<h2> Exit </h2>`)
//     }
//     else{
//         document.write(`<h2> Password incorrect </h2>`)
//     }
// }
// else if(login == null){
//     document.write(`<h2> Exit </h2>`)
// }
// else{
//     document.write(`<h2> I don't know you </h2>`)
// }

// 25.02.2026 --> 26.02.2026
// 31.03.2026 --> 01.04.2026
// 28.02.2004 --> 29.02.2004
// 28.02.2005 --> 01.03.2005
// 31.12.2025 --> 01.01.2026


let day = +prompt("Enter day")
let month = +prompt("Enter month")
let year = +prompt("Enter year")
document.write(`<p>${day < 10 ? 0 : ''}${day}.${month < 10 ? 0 : ''}${month}.${year}</p>`)
let day_of_month;

if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    day_of_month = 31;
}
else if (month == 4 || month == 6 || month == 9 || month == 11) {
    day_of_month = 30;
}
else if (month == 2) {
    // if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    //     day_of_month = 29;
    // }
    // else{
    //     day_of_month = 28;
    // }
    day_of_month = (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) ? 29 : 28;
}
day++;
if (day > day_of_month) {
    day = 1;
    month++;
}
if (month > 12) {
    month = 1;
    year++;
}
document.write(`<p>${day < 10 ? 0 : ''}${day}.${month < 10 ? 0 : ''}${month}.${year}</p>`)



let x = +prompt("Enter x")
let y = +prompt("Enter y") 
if (x == 0 && y == 0) {
    document.write("Точка знаходиться в початку координат (0, 0)");
} else if (x == 0) {
    document.write("Точка знаходиться на осі Y");
} else if (y == 0) {
    document.write("Точка знаходиться на осі X");
} else if (x > 0 && y > 0) {
    document.write("Точка знаходиться у I чверті");
} else if (x < 0 && y > 0) {
    document.write("Точка знаходиться у II чверті");
} else if (x < 0 && y < 0) {
    document.write("Точка знаходиться у III чверті");
} else if (x > 0 && y < 0) {
    document.write("Точка знаходиться у IV чверті");
} else {
    document.write("некоректні дані");
}

sum = 0


// if(){
//     sum = sum + 2; // sum+=2;
// }