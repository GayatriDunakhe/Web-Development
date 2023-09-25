let colr = ["red", "green", "white"]

function showArry(){
    var res = document.getElementById("res")
    var show = "";

    for(let i =0; i<colr.length; i++){
        show += `${colr[i]}<br>`
    }

    res.innerHTML = show;
}
