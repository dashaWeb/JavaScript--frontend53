let choice = "е" //prompt("д, е ", "д")

switch (choice) {
    case 'д': {
        let flag = true;
        let star = 9;
        document.writeln('<div class="figure-5">')
        for (let j = 0; j < 9; j++) {
            for (let i = 0; i < star; i++) {
                document.writeln('*')
            }
            document.writeln('<br>')
            if(j == parseInt(9 / 2))
                flag = false
            if(flag)
                star-=2;
            else{
                star+=2
            }
        }
        document.writeln('</div>')
    }
    case 'е':{
        let star = 1
        let flag = true;
        document.writeln('<div')
        for (let i = 0; i < 9; i++) {
            document.writeln('<div class="figure-6">')
            document.writeln('<span>')
            for (let j = 0; j < star; j++) {
                document.writeln('*')  
            }
            document.writeln('</span>')
            document.writeln('<span>')
            for (let j = 0; j < star; j++) {
                document.writeln('*')  
            }
            document.writeln('</span>')
            document.writeln('<br>')
            document.writeln('</div>')
            if(i == parseInt(9 / 2) )
                flag = false
            if(flag)
                star++
            else
                star--
        }
        document.writeln('</div>')
    }
}

/*
*******
 *****
  ***
   *
  ***
 *****
*******
*/

// // line 1
// for(let i = 0; i < 7; i++)
// {
//     document.writeln('*')
// }
// document.writeln('<br>')
// // line 2
// for(let i = 0; i < 5; i++)
// {
//     document.writeln('*')
// }
// document.writeln('<br>')
// // line 3
// for(let i = 0; i < 3; i++)
// {
//     document.writeln('*')
// }
// document.writeln('<br>')
// // line 4
// for(let i = 0; i < 1; i++)
// {
//     document.writeln('*')
// }
// document.writeln('<br>')

/*
*        *
**      **
***    ***
****  ****
**********
****  ****
***    ***
**      **
*        *


*/