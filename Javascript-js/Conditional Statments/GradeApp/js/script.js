function checkgrades(){
    
    let grades = parseFloat(document.getElementById("grades").value);

    var res = document.getElementById("result");

    switch(true){
        case grades >= 90:
            res.innerHTML = "A"
            break;
        case grades >= 80:
            res.innerHTML = "B"
            break;
        case grades >= 70:
            res.innerHTML = "C"
            break;

        case grades >= 60:
            res.innerHTML = "D"
            break;

        default:
            res.innerHTML = "F"
        
    }
}