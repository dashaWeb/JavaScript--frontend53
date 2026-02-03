
// let email = 'itstep@academy.org'

// let checkLogin = (email) =>
// {
//     if(email.indexOf('@') == -1)
//         return false;
//     if(email.length < 8)
//         return false

//     return true
// }
// console.log(checkLogin(email))
// console.log(checkLogin('test.com'))

let text = '   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet condimentum elit.    '

console.log(text.at(-2))
console.log(text[2])
// text[2] = 'h'
console.log(text.charCodeAt(5))
console.log(text.includes('Dolor'))
console.log(text.indexOf('Dolor'))
console.log(text.indexOf('t',21))
console.log(text.lastIndexOf('t'))

let count = 0
let index = -1
while((index = text.indexOf('t', index + 1)) != -1)count++;
console.log("Result :: ", count)
console.log(text.startsWith('test'))
console.log(text.startsWith('rem',2))
console.log(text.endsWith('elit',text.length-1))
console.log(text.concat('test','ddddd     '))
console.log(text.trimStart())
console.log(text.trimEnd())
console.log(text.trim())
let text2 = '123'
console.log(text2.padStart(10,'*'))
console.log(text2.padEnd(10,'*'))
console.log(text.padEnd(10,'*'))
console.log(text2.repeat(3))
console.log(text.slice(10,20))
console.log(text.substring(10,20))
console.log(text.substr(10,20))
console.log(text.toLowerCase())
console.log(text.toUpperCase())
text2 = 'abd'
let text3 = 'abc'
console.log(text2.localeCompare(text3))
console.log(text3.localeCompare(text2))
console.log(text3.localeCompare(text3))

console.log(text3.replace('b','*****'))


let res = '1 2 3 4'.split(' ')
console.log(res)

console.clear()

console.log(`round 5.678 --> `,Math.round(5.678))
console.log(`floor 5.678 --> `,Math.floor(5.678))
console.log(`ceil 5.0001 --> `,Math.ceil(5.0001))

console.log(`sqrt(16) --> `, Math.sqrt(16))
console.log(`pow(3,5) --> `, Math.pow(3,5))
console.log(`max(3,5) --> `, Math.max(3,5))
console.log(`min(3,5) --> `, Math.min(3,5))
let min = -10, max = 30
for (let i = 0; i < 50; i++) {
    console.log(`random() --> `,Math.floor(Math.random() * (max - min + 1) + min))
}

console.clear()

let date = new Date()

console.log(date)
console.log(Date.now())
let current = Date.now();
let end = Date.parse('2026-02-14T15:05:22')
let sec = parseInt((end - current) / 1000)
let convert_ = 60 * 60 * 24
let days = parseInt(sec / convert_)
sec = sec % convert_
let h = parseInt(sec / 3600)
sec = sec % 3600
let m = parseInt(sec / 60)
sec = sec % 60
console.log(`${days} days and ${h}:${m}:${sec}`)

console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDay())
console.log(date.getDate())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getMilliseconds())
console.log(date.getTime())

date.setFullYear(2026)
date.setMonth(11)
date.setDate(31)

console.log(date)

console.log(text3.replace('b','*****'))
console.log(text.replace('t','*'))
console.log(text.replaceAll('t','-'))