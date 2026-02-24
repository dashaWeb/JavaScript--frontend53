{
//  <!-- Example 1 -->
// let $red = document.querySelector('.red')
// let $blue = document.querySelector('.blue')
// let $yellow = document.querySelector('.yellow')

// document.body.addEventListener('click',()=>{
//     alert('Body')
// })

// $red.addEventListener('click',(e)=> {
//     e.stopPropagation()
//     alert('Red')
// })
// $blue.addEventListener('click',(e)=> {
//     e.stopPropagation();
//     alert('Blue')})
// $yellow.addEventListener('click',(e)=> {
//     e.stopPropagation()
//     alert('Yellow')
// })
}

let $list = document.querySelector('.list');
console.log('all children', $list.children)
console.log('first children', $list.firstElementChild)
console.log('first children', $list.nextElementSibling)
console.log('first children', $list.previousElementSibling)
console.log('first children', $list.nextSibling)
console.log('first children', $list.parentElement)
console.log('first children', $list.childElementCount)
$list.children[0].textContent = 'text'
$list.children[0].prepend('tttt')
// $list.children[0].remove()


