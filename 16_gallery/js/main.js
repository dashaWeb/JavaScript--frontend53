
let images = document.querySelectorAll('.minImg img')
let current_img = document.getElementById('img')
let left = document.getElementById('left')
let right = document.getElementById('right')
let min = document.querySelector('.minImg')

let index = 0;

for(let i = 0; i < images.length; i++){
    images[i].setAttribute('data-id', i)
}

min.addEventListener('click', (e) => {
    if (e.target.tagName == 'IMG') {
        current_img.src = e.target.src;
        index = e.target.dataset.id;
    }
})
for(let i = 0; i < images.length; i++){
    images[i].addEventListener('mouseenter',()=>{
        images[i].style.transform = 'scale(1.2)'
        images[i].style.opacity = '1'

    })
    images[i].addEventListener('mouseleave',()=>{
        images[i].style.transform = 'scale(1)'
        images[i].style.opacity = '.5'

    })
}

left.onselectstart = () => false;
right.onselectstart = () =>  false;

left.onmouseenter = function(){
    this.style.opacity = '1'
}
right.onmouseenter = function(){
    this.style.opacity = '1'
}
left.onmouseleave = function(){
    this.style.opacity = '.3'
}
right.onmouseleave = function(){
    this.style.opacity = '.3'
}

left.addEventListener('click', () => {
    --index;
    if(index < 0)
        index = images.length - 1
    current_img.src = images[index].src;
})

right.addEventListener('click', () => {
    ++index;
    if(index >= images.length)
        index = 0
    current_img.src = images[index].src;

})

