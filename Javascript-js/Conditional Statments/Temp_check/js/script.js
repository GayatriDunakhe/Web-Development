// 6. define function with same name which is pass in onclick
function checktempeture(){

    // 7. get the tempeture from the input file
    let tempetureInput = document.getElementById('tempeture').value;
    

    // 8. convert the input to a number
    let tempeture = parseFloat(tempetureInput)

    // 9. check the condition
    if(tempeture > 30){
        document.getElementById('result').innerHTML = "It's too hot outside! stay Hydrated!!!"
    }
    else if(tempeture < 10){
        document.getElementById('result').innerHTML = "It's too cold outside!!"
    }
    else{
        document.getElementById('result').innerHTML = "The weather is confortable "
    }
}