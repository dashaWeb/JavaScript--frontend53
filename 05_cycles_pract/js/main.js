
// document.writeln('2 x 1 = 2')
// document.writeln('2 x 2 = 4')
// document.writeln('2 x 3 = 4')
// document.writeln('2 x 4 = 4')
// document.writeln('2 x 5 = 4')
// document.writeln('2 x 6 = 4')
// document.writeln('2 x 7 = 4')
// document.writeln('2 x 8 = 4')
// document.writeln('2 x 9 = 4')
// document.writeln('2 x 10 = 4')


// for (let i = 1; i <= 10 ; i++) {
//     document.writeln(`2 x ${i} = ${2 * i} <br>`)   
// }
// for (let i = 1; i <= 10 ; i++) {
//     document.writeln(`3 x ${i} = ${3 * i} <br>`)   
// }
// for (let i = 1; i <= 10 ; i++) {
//     document.writeln(`4 x ${i} = ${4 * i} <br>`)   
// }
// for (let i = 1; i <= 10 ; i++) {
//     document.writeln(`5 x ${i} = ${5 * i} <br>`)   
// }

document.writeln('<div class= "container">')
for (let j = 2; j < 10; j++) {
    document.writeln('<div class= "data">')
    for (let i = 1; i <= 10; i++) {
        document.writeln(`${j} x ${i} = ${j * i} <br>`)
    }
    document.writeln("</div>")
}
document.writeln("</div>")


/*
   1
  121
 12321
1234321

*/
// document.writeln('<p style = "text-align:center;">')
// // line 1
// document.writeln('1')
// document.writeln('<br>')

// // line 2
// document.writeln('1')
// document.writeln('2')
// document.writeln('1')

// document.writeln('<br>')


// // line 3
// document.writeln('1')
// document.writeln('2')
// document.writeln('3')
// document.writeln('2')
// document.writeln('1')

// document.writeln('<br>')

// // line 3
// document.writeln('1')
// document.writeln('2')
// document.writeln('3')
// document.writeln('4')
// document.writeln('3')
// document.writeln('2')
// document.writeln('1')
// document.writeln('<br>')


// document.writeln('</p>')


// document.writeln('<p style = "text-align:center;">')
// // line 1
// let q = 1;
// for (let i = 1; i < 1 * 2; i++) {
//     document.writeln(`${q}`)
//     if (i < 1)
//         q++;
//     else
//         q--;
// }
// document.writeln('<br>')
// // line 2
// q = 1;
// for (let i = 1; i < 2 * 2; i++) {
//     document.writeln(`${q}`)
//     if (i < 2)
//         q++;
//     else
//         q--;
// }
// document.writeln('<br>')
// // line 3
// q = 1;
// for (let i = 1; i < 3 * 2; i++) {
//     document.writeln(`${q}`)
//     if (i < 3)
//         q++;
//     else
//         q--;
// }
// document.writeln('<br>')
// // line 4
// q = 1;
// for (let i = 1; i < 4 * 2; i++) {
//     document.writeln(`${q}`)
//     if (i < 4)
//         q++;
//     else
//         q--;
// }
// document.writeln('<br>')
// document.writeln('</p>')

// let line = +prompt("Enter number line")
// document.writeln('<p style = "text-align:center;">')
// for (let j = 1; j <= line; j++) {
//     let q = 1;
//     for (let i = 1; i < j * 2; i++) {
//         document.writeln(`${q}`)
//         if (i < j)
//             q++;
//         else
//             q--;
//     }
//     document.writeln('<br>')
// }
// document.writeln('</p>')



// let number = +prompt("Enter number")
// let counter = true
// for (let i = 2; i < number / 2; i++) {
//     if(number % i == 0){
//         counter = false;
//         break;
//     }
// }
// if(counter){
//     console.log('Prime number')
// }
// else{
//     console.log("Complex number")
// }

alert('\t 1 - count;\n 2 - sum; 3 - avg')