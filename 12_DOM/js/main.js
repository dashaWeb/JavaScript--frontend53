
// let p_id = document.getElementById('text-id')
// let p_class = document.getElementsByClassName('text');
// let all_p = document.getElementsByTagName('p')
// let heading = document.getElementsByName('head')
// // p_id.style.color = 'red';
// console.log(p_id)
// console.log(p_class)
// console.log(all_p)
// console.log(heading)
// // p_class[0].style.color = 'green'
// // p_class[1].style.color = 'green'
// // p_class[2].style.color = 'green'
// for (const element of p_class) {
//     element.style.color = 'orange'
// }

// for (let i = 0; i < p_class.length; i++) {
//     p_class[i].style.border = 'solid'
//     p_class[i].style.padding = '10px' 
// }

// let p_id = document.querySelector('p')
// p_id.style.color = 'red'
// let all = document.querySelectorAll('body p:nth-child(even)')
// console.log(all)

// let btn = document.querySelector('button')

// console.log(btn.innerHTML)
// btn.onclick = function()
// {
//     console.log('test')
// }

// let message = () => console.log("Hello")

// let flag = true
// btn.addEventListener('click',function() {
//     // if(flag)
//     // {
//     //     this.innerText = 'Read Me'
//     //     flag = false
//     // }
//     // else
//     // {
//     //     this.innerText = 'Click'
//     //     flag = true
//     // }
//     if(this.innerText == 'Click')
//         this.innerText = 'Read me'
//     else
//         this.innerText = 'Click'
// })

let btn = document.querySelector('button')
btn.addEventListener('click',()=>{
    document.querySelector('.wrapper').style.height = '100vh'
})
document.querySelector('.material-symbols-outlined').addEventListener('click',()=>{
    document.querySelector('.wrapper').style.height = '0vh'
    document.querySelector('.wrapper').style.borderRadius = '0vh'
})