
let url = "https://jsonplaceholder.typicode.com/users";
let $users = document.querySelector('.users')
let $details = document.querySelector('.details-user');

let xml = new XMLHttpRequest();
xml.open("GET",url);
xml.send();

xml.onload = () =>{
    loadUsers(JSON.parse(xml.response));
}

function getUser(id)
{
    let xml = new XMLHttpRequest();
    xml.open("GET",`${url}/${id}`);
    xml.send();
    xml.onload = ()=>{
        detailsUser(JSON.parse(xml.response));
    }
}
function getPosts(id)
{
    let xml = new XMLHttpRequest();
    xml.open("GET",`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    xml.send();
    xml.onload = ()=>{
        showPosts(JSON.parse(xml.response));
    }
}
function loadUsers(users)
{
   users.forEach(element => {
        let div = document.createElement('div');
        div.textContent = element.name;
        div.setAttribute("data-id",element.id);
        $users.insertAdjacentElement("beforeend",div);
        
   });
}

function detailsUser(data)
{
    $details.innerHTML = "";
    let heading = document.createElement('h4');
    heading.textContent = 'User info: ';
    $details.insertAdjacentElement('afterbegin',heading);
    let table = document.createElement('table');
    for (const key in data) {
        if(key == "id" || key == "company")
            continue;
        table.insertAdjacentHTML("beforeend",`
            <td style = "text-transform:capitalize;">${key}:</td>
            <td>${key == "address"? data[key]["city"] + ", " + data[key]["street"] : data[key]}</td>
            `)
    }
    $details.insertAdjacentElement('beforeend',table);
    let btn = document.createElement('button')
    btn.textContent = "Show posts";
    $details.insertAdjacentElement('beforeend',btn);
    btn.addEventListener('click',()=>{
        getPosts(data.id)
    })
}
function showPosts(data)
{
   let section = document.createElement("section");
   let heading = document.createElement('h4');
    heading.textContent = "User's Posts: ";
    section.insertAdjacentElement('afterbegin',heading)
   data.forEach((el)=>{
    section.insertAdjacentHTML('beforeend',`
        <article>
            <h3>${el.title}</h3>
            <p>${el.body}</p>
        </article>
        `);
   })
   $details.insertAdjacentElement('beforeend',section);

}
$users.addEventListener('click',(e)=>{
    if(e.target.hasAttributes('data-id')){
        getUser(e.target.dataset.id);
    }
})