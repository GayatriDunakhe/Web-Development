var res = document.getElementById("result")

var table = "";

let i = 1;

// while(i <= 10) {
//     table += `${i}<br>`
//     i++
// }

do{
    table += `${i}<br>`
    i++
}while(i <= 10);

res.innerHTML = table