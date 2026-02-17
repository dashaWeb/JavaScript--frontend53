let wrapper = document.querySelector('.wrapper')
let btn = document.querySelector('.wrapper button')
let box = document.querySelector('.wrapper div')



btn.addEventListener('click',(even)=>{
    console.log(even)
})

// wrapper.addEventListener('mousemove',(e)=>{
//     document.querySelector('.wrapper span').textContent = `X = ${e.clientX} Y = ${e.clientY}`
// })

// wrapper.addEventListener('mouseenter',()=>{
//     wrapper.style.background = 'green'
//     wrapper.style.transition = '3s'
// })
// wrapper.addEventListener('mouseleave',()=>{
//     wrapper.style.background = 'orange'
// })

let rnd = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);

let max_left = wrapper.getBoundingClientRect().right - box.getBoundingClientRect().width
let max_top = wrapper.getBoundingClientRect().bottom - box.getBoundingClientRect().height

wrapper.addEventListener('mousemove',(e)=>{ 
    let up = box.getBoundingClientRect().top - 15;
    let down = box.getBoundingClientRect().bottom + 15;
    let start = box.getBoundingClientRect().left - 15
    let end = box.getBoundingClientRect().right + 15;
    let x = e.clientX, y = e.clientY;
    if(x > start && x < end && y > up && y < down ){
        box.style.top = `${rnd(0,max_top)}px`;
        box.style.left = `${rnd(0,max_left)}px`;
    }
})
box.addEventListener('click',function(){
    box.remove();
})

wrapper.addEventListener('contextmenu',(e)=>{
    e.preventDefault()
    alert('Hello')
})