
let my_form = document.forms.form1;
// console.log(forms)
// console.log(forms.children)
// console.log(forms.elements)

my_form.addEventListener('submit',(e)=>{
    // console.log(my_form.name)
    // console.log(my_form.elements[0])
    // console.log(my_form.email)
    // console.log(my_form.password)
    let name = document.querySelector('.form-1 input').value;
    // console.log(name)
    let rememeber = my_form.remember;
    // console.log(rememeber.checked)
    let male = my_form.male;
    // console.log(male)
    for (let i = 0; i < male.length; i++) {
        if(male[i].checked){
            console.log(male[i].previousElementSibling.textContent)
        }
        
    }
    let range = my_form.range;
    range.value = 100;
    console.log(range.value)
    let date = my_form.date;
    date.value = "2026-03-12"
    // console.log(date)
    // console.log(new Date(date))
    let time = my_form.time;
    console.log(time.value)
    let fruit = my_form.fruit;
    console.log(fruit.value)
    console.log(fruit.children)
    console.log(fruit.options[1].value)
    
    e.preventDefault();
})



let color = document.querySelector('input[type="color"]');
color.addEventListener('change',()=>{
    my_form.style.backgroundColor = color.value;
})

let name = my_form.name;
name.addEventListener('input',()=>{
    console.log(name.value)
})
let remember = my_form.remember;
remember.addEventListener('change',()=>{
    console.log(remember.checked)
})
let range = my_form.range;
range.addEventListener('change',()=>{
    console.log(range.value)
})