let empName = ["Gayatri", "Ram", "Ganesh", "Om", "Shreya"]

function display(){
    var searchInput = document.getElementById("search").value;
    var res = document.getElementById("res")

    if(empName.includes(searchInput)){
        deleteEmpName(searchInput);
    }
    else{
        res.innerHTML = "No Employee found!"
    }

}

function deleteEmpName(name){
    res.innerHTML = `hello ${name}`
}