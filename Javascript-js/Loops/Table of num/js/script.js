function showtable(){

    let num = parseInt(document.getElementById("num").value)

    var res = document.getElementById("result")

    var table = "";

    for (let i = 1; i < 11; i++) {
        table += `${num} x ${i} = ${num * i}<br>`
    }

    res.innerHTML = table

}