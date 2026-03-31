

// function func()
// {
//     console.log('start');
//     let res = task1();
//     console.log('Result', res);
//     console.log('end');

// }


// function task1()
// {
//     setTimeout(()=>{
//         console.log('task1');
//         return 1;
//     }, 5000)
// }

// func();

// async function task1() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('task1');
//             resolve('done');
//         }, 5000)
//     })
//     let res = await promise;
//     alert(res);
//     return res;

// }

// async function runTask() {
//     console.log('start');
//     let res = await task1();
//     console.log('end', res);
// }

// runTask();

// console.log(task1());
// task1().then(d=>console.log(d))


let url = 'https://newsapi.org/v2/top-headlines?category=general&pageSIZE=100&apiKey=c4da29def36b4a239e4616f4644ec70b'

let getNews = async (url) => {

    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }

}

let showNews = async()=>{
    let res = await getNews(url);
    console.log(res);
}

showNews();
// console.log(getNews(url));
console.log("End program")