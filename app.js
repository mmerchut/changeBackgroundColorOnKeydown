let number = 1;
document.body.style.backgroundColor = `rgb(${number}, ${number}, ${number})`;

const changeBackGround = function(event) {
    if(event.which == 38) {
        console.log('increase')
        number += 5;
        document.body.style.backgroundColor = `rgb(${number <= 255 ? number += 5 : number = 255 }, ${number}, ${number})`;
        console.log(number)
        return;
    }
    if(event.which == 40) {
        console.log('descrease')
        number -= 5;
        document.body.style.backgroundColor = `rgb(${number >= 0 ? number -= 5 : number = 0 }, ${number}, ${number})`;
        console.log(number)
        return;
    }
    else if(event.which != 38 || event.which != 40) {
        console.log('This key don\'t work ')
    };
}
    
    
// const changeBackGround2 = function(event) {
//     switch(event.which) {
//         case 38:
//         console.log('increase')
//         number += 5;
//         document.body.style.backgroundColor = `rgb(${number <= 255 ? number += 5 : number = 255 }, ${number}, ${number})`;
//         console.log(number)
//             break;
//         case 40:
//         console.log('descrease')
//         number -= 5;
//         document.body.style.backgroundColor = `rgb(${number >= 0 ? number -= 5 : number = 0 }, ${number}, ${number})`;
//         console.log(number)
//             break;
//         default:
//             console.log('This key dont work')
//     }
    
// }




// document.addEventListener('keydown', changeBackGround2)
document.addEventListener('keydown', changeBackGround)