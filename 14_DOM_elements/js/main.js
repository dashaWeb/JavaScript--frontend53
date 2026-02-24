
let wrapper = document.querySelector('.wrapper')
let current = document.querySelector('.current')


// let el = document.createElement('p')
// let b = document.createElement('b')
// b.append('Hyper Text Markup Language') 
// el.appendChild(b)
// el.innerText = '<b>Hyper Text Markup Language </b>'
// el.innerHTML = '<b>Hyper Text Markup Language </b>'


// let el = document.createElement('p')
// el.append('Text 1')
// wrapper.prepend('element')
// wrapper.insertAdjacentElement('afterbegin',el)
// wrapper.insertAdjacentElement('afterend',el)
// wrapper.insertAdjacentElement('beforebegin',el)
// wrapper.insertAdjacentElement('beforeend',el)
wrapper.insertAdjacentHTML('afterbegin','<b>Style</b>')
wrapper.insertAdjacentText('afterbegin','<b>Style</b>')
// console.log(el)
// let rnd = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// let getRGB = () => `rgb(${rnd(0,255)},${rnd(0,255)},${rnd(0,255)})`;

// let btn = document.querySelector('button')
// let i = 0;
// btn.addEventListener('click',()=>{
//     let el = document.createElement('p')
//     el.append(`Text ${++i}`);
//     let bg = getRGB();
//     console.log(bg)
//     el.style.backgroundColor = `${bg}`;
//     wrapper.insertAdjacentElement('beforeend',el)
// })


// let el = document.createElement('p')
// el.textContent = 'Lorem ipsum dolor'
// el.className = 'default '
// wrapper.append(el)

// // let flag = false
// el.addEventListener('click',()=>{
//     // if(!flag)
//     // {
//     //     el.classList.add('active')
//     //     flag = true
//     // }
//     // else
//     // {
//     //     el.classList.remove('active')
//     //     flag = false
//     // }
//     // if(!el.classList.contains('active'))
//     //     el.classList.add('active')
//     // else
//     //     el.classList.remove('active')
//     el.classList.toggle('active')
// })

// let li = document.querySelectorAll('.list li')

// console.log(li)

// for (let i = 0; i < li.length; i++) {
//     li[i].addEventListener('click',function(){
//         // this.classList.toggle('active')
//         this.remove()
//     })

// }
let rnd = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
let getRGB = () => `rgb(${rnd(0, 255)},${rnd(0, 255)},${rnd(0, 255)})`;
let li = document.querySelectorAll('.list li')
for (let i = 0; i < li.length; i++) {
    // console.log(li[i].attributes)
    li[i].setAttribute('data-color',getRGB())

}


let list = document.querySelector('.list')
list.addEventListener('click', function (e) {
    // console.log(e.target)
    // this.classList.toggle('active')
    // this.remove()
    let el = e.target;
    if (el.tagName === "LI")
    {
        el.classList.toggle('active');
        el.style.backgroundColor = el.dataset.color
        // console.log(el.dataset.color)
    }
    

})
// list.removeAttribute('class')
// console.log(list.hasAttribute('title'))

console.log(document.querySelector('input').value)