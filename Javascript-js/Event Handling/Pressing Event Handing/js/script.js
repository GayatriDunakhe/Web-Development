//keydown
document.addEventListener("keydown", function(e) {
    if (e.key == "a") {
        alert(`I should get ${e.key} is pressed`);
    }
    else if (e.key == "b") {
        alert(`I should get ${e.key} is pressed`);
    }
    else{
        alert("other key was pressed")
    }
});

let btn = document.getElementById("btn").addEventListener("doubleclick", function(){
    alert("double click")
})