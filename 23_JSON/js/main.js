

// let person = {
//     name:"Alex",
//     lastname:"Demchyk",
//     age:15,
//     phone:[
//         {
//             type:"home",
//             number_phone:"45-25-65"
//         },
//         {
//             type:"mobile",
//             number_phone:"+38067-548-59-62"
//         },
//     ],
//     checkAge:function(){
//         if(this.age < 18)
//             return false;
//         return true
//     },
//     photo:"icon.jpg",
//     birthdate:null
// }
// console.log(person)

// let checkAge = (key,value) =>{
//     if(key == 'age' && value < 18)
//         return undefined
//     return value;
// }

// let str_person = JSON.stringify(person,checkAge,2)
// console.log(str_person)


// let des_person = JSON.parse(str_person,(key,value)=>{
//     if(key == "name" && value.length < 10)
//         return undefined
//     if(value == null)
//         return undefined
//     return value;
// });
// console.log(des_person)


let xml = new XMLHttpRequest();

let url = 'https://jsonplaceholder.typicode.com/users'
xml.open('GET', url,true);
xml.send()
console.log("response :: ",xml.response)
xml.onerror = () => {
    console.log(xml.status)
}

xml.onreadystatechange = () => {
    // if (xml.readyState == 0) {
    //     console.log("Unsent")
    // }
    // if (xml.readyState == 1) {
    //     console.log("open")
    // }
    // if (xml.readyState == 2) {
    //     console.log("send ")
    // }
    // if (xml.readyState == 3) {
    //     console.log("Loading ")
    // }
     if (xml.readyState == 4) {
        // console.log("Done ", xml.response);
       
    }
}

xml.onload = () =>{
    // console.log("status :: ", xml.status)
    // console.log("status text :: ",xml.statusText)
    // console.log("readyState :: ",xml.readyState)
    // console.log("response :: ",xml.response)
    // console.log("responseText :: ",xml.responseText)
     print_(JSON.parse(xml.response))
}

function print_(data){
    // console.log(data);
    let ol = document.createElement('ol');
    let list = data.map((el)=>{
        return `<li data-id = '${el.id}'>${el.name}</li>`
    })
   ol.innerHTML = list.join("");
   document.body.insertAdjacentElement('afterbegin',ol)
}