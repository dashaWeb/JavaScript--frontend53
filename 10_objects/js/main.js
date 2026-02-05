
// let key = 'group'//prompt('Enter key')
// let value = 'frontend53' //prompt('Enter value')

// let student = {
//     name:'Olia',
//     lastname:'Bondar',
//     age:18,
//     email:'test@gmail.com',
//     [key]:value,
//     checkPassword: function(params) {
//         return this.password.length > 8
//     }
// }
// let student2 = {
//     name:'Olia',
//     lastname:'Bondar',
//     age:18,
//     email:'test@gmail.com',
//     [key]:value,
//     checkPassword: function(params) {
//         return this.password.length > 8
//     }
// }
// console.log(student)

// document.writeln(`${student.lastname} ${student.name} <br>`)
// document.writeln(`Age :: ${student.age} <br>`)
// document.writeln(`Group :: ${student[key]}`)

// student.age = 20
// student.password = '123456qwerty'
// document.writeln(`<br><br>${student.lastname} ${student.name} <br>`)
// document.writeln(`Age :: ${student.age} <br>`)
// document.writeln(`Group :: ${student[key]} <br>`)
// document.writeln(`Password :: ${student.password}`)

// console.log(student)


function Car(brand, year, distance) {
    this.brand = brand;
    this.year = year;
    this.distance = distance
}

let ford = new Car('Ford', 2010, 4511)
let bmw = new Car('BMW', 2022, 12452)
console.log(ford)
console.log(bmw)

document.writeln(ford.brand)
ford.color = 'red'

Car.prototype.color = 'black'
console.log(ford.color)
console.log(bmw.color)

Car.prototype.getYear = function () { return new Date().getFullYear() - this.year; }

console.log(ford)
console.log(bmw)

document.writeln('<div class = "container">')
for (const key in ford) {
    if (!Object.hasOwn(ford, key)) continue;
    document.writeln(`<p> ${key}</p> <p>${ford[key]}</p>`)
}
document.writeln('</div>')

console.log(Object.keys(bmw))
console.log(Object.values(bmw))
console.log(Object.entries(bmw))

let keys = Object.keys(ford)

keys.forEach((n) => { console.log(n, ford[n]) })
let clone = keys.map((n) => n.repeat(2))
console.log(clone)
let filter_clone = clone.filter(n => n.includes('c'))
console.log(filter_clone)


let audi = Object.create(
    {
        getAge: function () {
            Object.defineProperty(this, 'age', {
                value: new Date().getFullYear() - this.year
            })
        }
    },
    {
        brand: {
            value: 'Audi',
            enumerable: true,
            writable: false,
            configurable: false
        },
        year: {
            value: 2024,
            writable: false,
            enumerable: true,
            configurable: false
        },
        distance: {
            value: 12455,
            enumerable: false,
            writable: true,
            configurable: true
        },
        color: {
            get: function () {
                console.log('get color')
                return 'red'
            },
            set: function () {
                console.log('set color')
            }
        }
    })
console.log(audi)

Object.keys(audi).forEach((key) => {
    console.log(key, audi[key])
})

