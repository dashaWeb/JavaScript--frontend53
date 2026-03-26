
// let url = 'https://jsonplaceholder.typicode.com/users';
// document.querySelector('button').addEventListener('click',()=>{
//     fetch(url)
//     .then(function(result){
//         return result.json();
//     })
//     .then(function(data){
//         console.log(data)
//     })
//     .catch(function(error){
//         console.log(error)
//     })
// })
// document.querySelector('button').addEventListener('click', () => {
//     fetch(url, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//         .then((result) => {
//             console.log(result.headers.get('Content-Type'));
//             return result.json();
//         })
//         .then(data => console.log(data))
//         .catch(error => console.log(error))
// })

// document.addEventListener('DOMContentLoaded',()=>{
//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body:JSON.stringify({
//             name:'Olia',
//             age:30
//         })
//     })
//         .then((result) => {
//             console.log(result.headers.get('Content-Type'));
//             return result.json();
//         })
//         .then(data => console.log(data))
//         .catch(error => console.log(error))
// })

let url = 'https://jsonplaceholder.typicode.com/users';

document.querySelector('button').addEventListener('click', () => {
    fetch(url,)
        .then(result => result.json())
        .then(data => showUsers(data))
        .catch(error => console.log(error))
})

function showUsers(data)
{
    let key_value = [];
    Object.keys(data[0]).forEach(key => key_value.push(`<th>${key}</th>`));
    // {"id":1,"name":"Leanne Graham","username":"Bret","email":"Sincere@april.biz","address":{"street":"Kulas Light","suite":"Apt. 556","city":"Gwenborough","zipcode":"92998-3874","geo":{"lat":"-37.3159","lng":"81.1496"}},"phone":"1-770-736-8031 x56442","website":"hildegard.org","company":{"name":"Romaguera-Crona","catchPhrase":"Multi-layered client-server neural-net","bs":"harness real-time e-markets"}}
    let table = `<table> <tr>${key_value.join('')}</tr>`
    let users = data.map(user =>{
        const {id,name,username,email,address,phone,website,company} = user;
        return `
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${username}</td>
                <td>${email}</td>
                <td>${address.city} ${address.street}</td>
                <td>${phone}</td>
                <td>${website}</td>
                <td>${company.name}</td>
            </tr>`
    })
    table += users.join('');
    table += '</table>'
    document.querySelector('.wrapper').insertAdjacentHTML('afterbegin',table);
}