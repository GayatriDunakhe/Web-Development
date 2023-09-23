function calculate(){

    let num1Input = document.getElementById('num1').value;
    let num2Input = document.getElementById('num2').value;

    let option = document.getElementById('calculate').value;

    let num1 = parseInt(num1Input)
    let num2 = parseInt(num2Input)

    var res;

    if(option == "add"){
        res = num1 + num2;
        document.getElementById('result').innerHTML = `Addition of ${num1} + ${num2} = ${res}`
    }
    else if(option == "sub"){
        res = num1 - num2;
        document.getElementById('result').innerHTML = `Substration of ${num1} - ${num2} = ${res}`
    }
    else if(option == "mul"){
        res = num1 * num2;
        document.getElementById('result').innerHTML = `Multiplication of ${num1} * ${num2} = ${res}`
    }
    else if(option == "div"){
        res = num1 / num2;
        document.getElementById('result').innerHTML = `Division of ${num1} / ${num2} = ${res}`
    }
    else{
        document.getElementById('result').innerHTML = "Select calculation operation first"
    }
}