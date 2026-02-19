
// task 1

let task_1 = document.querySelector('.task-1')

task_1.addEventListener('mousemove', (e) => {
    task_1.textContent = ` X = ${e.clientX}px; Y = ${e.clientY}px;`
})
task_1.addEventListener('click', () => {
    task_1.textContent = 'Click left btn mouse'
})
task_1.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    task_1.textContent = 'Click right btn mouse'
})

// task - 2

let li = document.querySelectorAll('.task-2 li')
let blocks = document.querySelectorAll('.task-2 .block')

for (let i = 0; i < li.length; i++) {

    li[i].addEventListener('click', () => {
        for (let j = 0; j < li.length; j++) {
            li[j].style.background = 'transparent';
            blocks[j].style.display = 'none'
        }
        li[i].style.background = '#4873a1';
        blocks[i].style.display = 'block'
    })
}