// let btn_open = document.querySelectorAll('button')[0];
// let btn_close = document.querySelectorAll('button')[1];

// let newWin;
// btn_open.addEventListener('click',()=>{
//     newWin = window.open('https://rozetka.com.ua/','Rozetka','resizable')
//     newWin.resizeTo(500,500);
//     // newWin.moveTo(50,50)
//     newWin.moveBy(100,100)
// })
// btn_close.addEventListener('click',()=>{
//     newWin.close();
// })

// console.log(window.navigator)
// console.log(window.screen)
// console.log(window.location)
// console.log(window.history)
// console.log(window.frames)

// let arrow = document.querySelector('.arrow')

// window.addEventListener('scroll',()=>{
//     let y = window.scrollY;
//     if(y > 500)
//     {
//         arrow.style.transform = 'scale(1)';
//     }
//     else{
//         arrow.style.transform = 'scale(0)';
//     }
// })
// arrow.addEventListener('click',()=>{
//     window.scrollTo(0,0)
//     arrow.style.transform = 'scale(0)';
// })


// document.addEventListener('DOMContentLoaded',()=>{
//     document.querySelector('body p:first-child').style.color = 'red';
// })

// window.onload = () =>{
//     alert('onload')
// } 

// window.onbeforeunload = (e) =>{
//     if( document.querySelector('body p:first-child').style.color == 'red')
//     {
//         console.log('foreunload')
//         return 'beforeunload'
//     }
//     return null
// }

let img = document.querySelector('img')

img.addEventListener('load',(e)=>{
    console.log('load',e)
})
img.addEventListener('error',(e)=>{
    console.log('error',e)
})