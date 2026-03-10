// console.log(document.cookie)

let date = new Date(0);
console.log(date)
date.setTime((new Date().getHours()) - 10000);
console.log(date)
document.cookie = `userLogin=dev; expires=${date}; path=/`
document.cookie = `password=devuser; expires=${date}; path=/`

window.addEventListener('load',()=>{
    console.log(document.cookie)
})

let res = document.cookie;
res = res.split('; ')
console.log(res)
let CookieObj = {}

for (let i = 2; i < res.length; i++) {
    let str = res[i].split('=')
    CookieObj[str[0]] = str[1]; 
}

console.log(CookieObj)