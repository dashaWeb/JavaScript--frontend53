

// function rnd(min, max)
// {
//     return Math.floor(Math.random() * (max -min +1)+min);
// }

// document.body.style.transition = "1s";

// let interval = setInterval(()=>{
//     console.log("test set interval");
//     document.querySelector('body').style.background = `rgb(${rnd(0,255)},${rnd(0,255)},${rnd(0,255)})`;

// },1000);

// setTimeout(function(){
//     clearInterval(interval);
// }, 5000)

// Client --> Server --> DataBase --> Server --> Client

// console.log('Клієнт: виконує запит, отримати сисок студентів')

// setTimeout(function(){
//     console.log('Сервер: отримує запит і виконує запит до бд, отримати список студентів');

//     setTimeout(function(){
//         console.log('БД: отримала запит, формує список студентів');

//         setTimeout(function(){
//             console.log('Сервер: отримав список, трансформує дані для клієнта');

//             setTimeout(function(){
//                 console.log('Клієнт: Отримав список і відображає його')
//             },2000)
//         },500)
//     },500)
// },1000)

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('Клієнт: виконує запит, отримати список студентів');
//         console.log('...');
//         resolve();
//     }, 1000)
// })

// promise.then(function () {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log('Сервер: отримує запит і виконує запит до бд, отримати список студентів');
//             console.log('...');
//             resolve();
//         }, 500);
//     })
// })
//     .then(function () {
//         return new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 let users = [
//                     { id: 1, name: "Max" },
//                     { id: 2, name: "Dima" }
//                 ]
//                 console.log('БД: отримала запит, формує список студентів');
//                 console.log('...');
//                 resolve(users)
//             }, 1000);
//         })
//     })
//     .then(function (dbData) {
//         return new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 console.log('Сервер: отримав список, трансформує дані для клієнта');
//                 console.log('...');
//                 let users = dbData.map((user) => {
//                     return {
//                         id: user.id,
//                         name: user.name,
//                         timeStapm: Date.now()
//                     }
//                 });
//                 resolve(users);
//             }, 500);
//         })
//     })
//     .then(function (resServer) {
//         return new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 console.log('Клієнт: Отримав список і відображає його', resServer);
//                 console.log('...');
//                 resolve('Error data')
//             }, 1000)
//         })
//     })
//     .catch(function (error) {
//         console.log('error', error)
//     })
//     .finally(function () {
//         console.log('finally')
//     })

let url = 'https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5';

let promise = new Promise(function(resolve,reject){
    let xml = new XMLHttpRequest();
    // xml.withCredentials = true;
    xml.open('GET',url);
    // xml.setRequestHeader('Access-Control-Allow-Origin','http://127.0.0.1:5501')
    xml.responseType = 'json';
    xml.send();

    xml.onload = function(){
        if(xml.status == 200)
            resolve(xml.response);
        reject(`Error :: ${xml.status}`)
    }
})
promise.then(function(res){
   dataShow(res)
})
.catch(function(error){
    console.log(error);
})




function dataShow(data)
{
    data.forEach(element => {
        for (const key in element) {
            document.body.innerHTML += `${key} : ${element[key]} <br>`          
        }
    });
}