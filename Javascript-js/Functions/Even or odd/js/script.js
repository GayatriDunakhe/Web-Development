const checknum = () => {
    let num = parseInt(document.getElementById("num").value)

    if(num % 2 == 0){
        document.getElementById("result").innerHTML = `${num} is even`
    }
    else{
        document.getElementById("result").innerHTML = `${num} is odd`
    }
}
