let url_img = `https://pixabay.com/api/?key=14304821-db198647e0592cf253911c94a&q=red+backgrounds&image_type=photo&per_page=50&orientation=horizontal`;


document.addEventListener('DOMContentLoaded',()=>{
fetch(url_img)
.then(response => response.json())
.then(data => showImg(data.hits))
.catch(err=>{console.error(err)})
})


function showImg(images)
{
    
    document.querySelector('.wrapper').innerHTML = `
        <ul>
            ${images.map(img =>{ 
                if(img.webformatWidth - img.webformatHeight > 250)
                    return ''
                return '<li> <img src ="' + img.webformatURL+'"></li>'}).join('')}
        </ul>
    `
}