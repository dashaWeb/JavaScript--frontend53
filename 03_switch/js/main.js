

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

// let day = +prompt("Enter number day")
// switch (day) { //day === 1
//     default:
//         document.write(`<h2 style = 'color:red;'> Error. Invalid data </h2>`)
//         break;
//     case 1:
//         document.write(`<h2> Monday </h2>`);
//         break;
//     case 2:
//         document.write(`<h2> Tuesday </h2>`)
//         break;
//     case 3:
//         document.write(`<h2> Wednesday </h2>`)
//         break;
//     case 4:
//         document.write(`<h2> Thursday </h2>`)
//         break;
// }

// let month = +prompt("Enter month")
// switch (month){
//     case 1: 
//     case 3: 
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("31 days")
//         break
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("30 days")
//         break
//     case 2:
//         let year = +prompt("Enter year")
//         console.log(`${year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ? 29 : 28} days`)
//         break
//     default:
//         console.error("Invalid data")
// }

// 12.04.2026 --> 31 + 28 + 31 + 12 --> 102

// let day = +prompt("Enter day") // 12
// let month = +prompt("Enter month") // 04
// let year = +prompt("Enter year") // 2026

// month--; // 3
// let all_days = 0

// switch(month){
//     case 11:
//         all_days += 30;
//     case 10:
//         all_days += 31;
//     case 9:
//         all_days += 30;
//     case 8:
//         all_days += 31
//     case 7:
//         all_days += 31
//     case 6:
//         all_days += 30;
//     case 5:
//         all_days += 31
//     case 4:
//         all_days += 30
//     case 3:
//         all_days += 31 // all_days{0} = all_days{0} + 31
//     case 2:
//         all_days += (year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ? 29 : 28)
//     case 1:
//         all_days += 31
// }

// console.log(all_days + day)

// Запитати у користувача рік народження, відобразити на сторінці картинку знаку зодіаку під яким він народився. (https://rozdil.lviv.ua/Kalendar/Zodiakporokah/). Умова: користувач може ввести від 0 до безкінечності


// document.write('<img src = "https://rozdil.lviv.ua/Kalendar/Zodiakporokah/11.jpg">')

// console.log(1948 % 12);
// console.log(1960 % 12);
// console.log(1972 % 12);

// let year = +prompt("Enter year")

// switch ((year - 4) % 12)
// {
//     case 0:
//         document.write('<img src = "https://rozdil.lviv.ua/Kalendar/Zodiakporokah/2.jpg">')
//         break
//     case 1:
//         document.write('<img src = "https://rozdil.lviv.ua/Kalendar/Zodiakporokah/3.jpg">')
//         break
    
// }