let choice = "ж" //prompt("д, е, ж ", "д")

switch (choice) {
    case 'ж': // 1,2,3,4,5,4,3,2,1
        {
            document.writeln('<div class="figure-3">')
            let star = 1
            let flag = true
            let line = 30
            for (let i = 0; i < line - 1; i++) {
                for (let j = 0; j < star; j++) {
                    document.writeln('*')
                }
                if(star == parseInt(line / 2))
                    flag = false
                if(flag)
                    star++;
                else
                    star--;
                document.writeln('<br>')
            }
            document.writeln('</div>')
            break;
        }
    case 'жж': // 1,2,3,4,5,4,3,2,1
        {
            document.writeln('<div class="figure">')
            for(let i = 1; i <= 5; i++) // i --> 1, 2, 3,4,5
            {
                for(let j = 0; j < i; j++)
                {
                    document.writeln('*')
                }
                document.writeln('<br>')
            }
            for(let i = 4; i > 0 ; i--) // i --> 4,3,2,1
            {
                for(let j = 0; j < i; j++)
                {
                    document.writeln('*')
                }
                document.writeln('<br>')
            }
            document.writeln('</div>')
            break;
        }
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

/*
*           * = 1
**          * = 2
***         * = 3
****        * = 4
*****       * = 5
****        * = 4
***         * = 3
**          * = 2
*           * = 1


*/
// //line 1
// document.writeln('*')

// document.writeln('<br>')

// //line 2
// document.writeln('*')
// document.writeln('*')

// document.writeln('<br>')

// //line 3
// document.writeln('*')
// document.writeln('*')
// document.writeln('*')

// document.writeln('<br>')

// //line 4
// document.writeln('*')
// document.writeln('*')
// document.writeln('*')
// document.writeln('*')

// document.writeln('<br>')

// //line 5
// document.writeln('*')
// document.writeln('*')
// document.writeln('*')
// document.writeln('*')
// document.writeln('*')
// document.writeln('<br>')

// //line 1
// for (let i = 0; i < 1; i++) { // 0
//     document.writeln('*')
// }
// document.writeln('<br>')
// //line 2
// for (let i = 0; i < 2; i++) { // 0,1
//     document.writeln('*')
// }
// document.writeln('<br>')
// //line 3
// for (let i = 0; i < 3; i++) { // 0,1,2
//     document.writeln('*')
// }
// document.writeln('<br>')
// //line 4
// for (let i = 0; i < 4; i++) { // 0,1,2,3
//     document.writeln('*')
// }
// document.writeln('<br>')
// //line 5
// for (let i = 0; i < 5; i++) { // 0,1,2,3,4
//     document.writeln('*')
// }
// document.writeln('<br>')


// //line 6
// for (let i = 0; i < 4; i++) { // 0,1,2,3
//     document.writeln('*')
// }
// document.writeln('<br>')
// //line 7
// for (let i = 0; i < 3; i++) { // 0,1,2,3
//     document.writeln('*')
// }
// document.writeln('<br>')
// //line 8
// for (let i = 0; i < 2; i++) { // 0,1,2,3
//     document.writeln('*')
// }
// document.writeln('<br>')
// //line 9
// for (let i = 0; i < 1; i++) { // 0,1,2,3
//     document.writeln('*')
// }
// document.writeln('<br>')