// localStorage.setItem('Test',"Hello World")
// localStorage.setItem('Test2',"test test")

// document.writeln(localStorage.getItem('Test'))

// // localStorage.removeItem('Test2')

// console.log(localStorage.key(0))
// console.log(localStorage.key(1))
// console.log(localStorage.length)

let button = document.querySelector('button');
let input = document.querySelector('input');
document.addEventListener('DOMContentLoaded',()=>{
    input.value = localStorage.getItem('number');
})
input.addEventListener('input',function(){
    localStorage.setItem('number',this.value);
})
button.addEventListener('click',()=>{
    localStorage.setItem('number',input.value);

    window.open('page.html')
})

let $ul = document.querySelector('ul');
$ul.onselectstart = ()=>{
    return false;
}
let last = null;
$ul.addEventListener('click',(e)=>{
    if(last != null)
        last.classList.remove('active');
    if(e.target.tagName =='UL')
        return;
    e.target.classList.add('active');
    localStorage.setItem('color',e.target.dataset.color);
    last = e.target;
})