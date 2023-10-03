function checkage(){
    var age = document.getElementById('age').value;
    var res = document.getElementById('result');

    if(age >= 18){
        res.innerHTML = "You are eligible for vote"
    }
    else{
        res.innerHTML = "You are not eligible for vote"
    }
}