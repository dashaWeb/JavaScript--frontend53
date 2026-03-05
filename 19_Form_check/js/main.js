let form = document.forms[0];

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(form.password.value)
    if((form.name.value.trim()).length == 0){
        form.name.classList.add('error');
    }
    if(!checkPassDigit(form.password.value))
        form.password.classList.add('error')
})

function checkPassDigit(pass)
{
    for(let i = 0; i < 10; i++)
    {
        if(pass.indexOf(i) != -1)
            return true;
    }
    return false;
}


// form.onsubmit = ()=>{
//     return false;
// }

// let test = new RegExp()

let line_1 = '123'
let line_2 = '234'
let line_3 = 'Lorem ipsum 21 dolor'


let template = /1/
console.log('Example','template')
console.log(line_1, ' -----> ', template.test(line_1))
console.log(line_2, ' -----> ', template.test(line_2))
console.log(line_3, ' -----> ', template.test(line_3))

template = /12/
console.log('Example','template')
console.log(line_1, ' -----> ', template.test(line_1))
console.log(line_2, ' -----> ', template.test(line_2))
console.log(line_3, ' -----> ', template.test(line_3))

template = /[12]/
console.log('Example','template')
console.log(line_1, ' -----> ', template.test(line_1))
console.log(line_2, ' -----> ', template.test(line_2))
console.log(line_3, ' -----> ', template.test(line_3))

template = /[0-9]/
console.log('Example','template')
console.log(line_1, ' -----> ', template.test(line_1))
console.log(line_2, ' -----> ', template.test(line_2))
console.log(line_3, ' -----> ', template.test(line_3))

template = /\D/
console.log('Example','template')
console.log(line_1, ' -----> ', template.test(line_1))
console.log(line_2, ' -----> ', template.test(line_2))
console.log(line_3, ' -----> ', template.test(line_3))

template = /\W/
console.log('Example','template')
console.log(line_1, ' -----> ', template.test(line_1))
console.log(line_2, ' -----> ', template.test(line_2))
console.log(line_3, ' -----> ', template.test(line_3))

template = /^4$/
console.log('Example','template')
console.log(line_1, ' -----> ', template.test(line_1))
console.log(line_2, ' -----> ', template.test(line_2))
console.log(line_3, ' -----> ', template.test(line_3))

template = /^\w+ \w+ \w+ \w+$/
console.log('Example','template')
console.log(line_1, ' -----> ', template.test(line_1))
console.log(line_2, ' -----> ', template.test(line_2))
console.log(line_3, ' -----> ', template.test(line_3))

template = /\w+/
console.log('Example','template')
console.log(line_1, ' -----> ', template.test(line_1))
console.log(line_2, ' -----> ', template.test(line_2))
console.log(line_3, ' -----> ', template.test(line_3))


template = /[^342]/
console.log('Example','template')
console.log(line_1, ' -----> ', template.test(line_1))
console.log(line_2, ' -----> ', template.test(line_2))
console.log(line_3, ' -----> ', template.test(line_3))

template = /\w{2,6}/
console.log('Example','template')
console.log(line_1, ' -----> ', template.test(line_1))
console.log(line_2, ' -----> ', template.test(line_2))
console.log(line_3, ' -----> ', template.test(line_3))


line_1 = '123!'
template = /^\d+[!]/
console.log('Example','template')
console.log(line_1, ' -----> ', template.test(line_1))
console.log(line_2, ' -----> ', template.test(line_2))
console.log(line_3, ' -----> ', template.test(line_3))

line_1 = "LOREM IPSUM"
template = /[a-z]/i
console.log('Example','template')
console.log(line_1, ' -----> ', template.test(line_1))
console.log(line_2, ' -----> ', template.test(line_2))
console.log(line_3, ' -----> ', template.test(line_3))

let phone = '+380955684587';
template = /^\+[0-9]{12}$/;
console.log(phone, template.test(phone))

let str_1 = '123qwe456abc114';
template = /[0-9]{3}/g
console.log(str_1, " ----> ", template.exec(str_1))
console.log(str_1, " ----> ", str_1.match(template))

str_1 = '656 - 589 - 695'
console.log(str_1 , '---->', str_1.replace(/[- 8]/g,''))
str_1 = '656 - 589 - 695'
console.log(str_1 , '---->', str_1.split(/\D/))




