let empName = ["Gayatri", "Ram", "Ganesh", "Om", "Shreya"]

var res = document.getElementById("res")
var show = "";

for(let i =0; i<empName.length; i++){
    show += `${empName[i]}<br>`
}

res.innerHTML = show;

function deleteEmpName(){
    let name = empName.splice(-1,1);
    if(name.length != 0){
        res.innerHTML = `The employee ${name} was deleted`;
    }
    else{
        res.innerHTML = `Sorry no employees are there!`;
    }
}
