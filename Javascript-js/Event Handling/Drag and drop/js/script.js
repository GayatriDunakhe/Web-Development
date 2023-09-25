let drag = document.getElementById("drag");
let drag1 = document.getElementById("drag1");
let drop = document.getElementById("drop");

drag.addEventListener("dragstart", function(e){
    e.dataTransfer.setData("text/plain", e.target.id)
})

drag1.addEventListener("dragstart", function(e){
    e.dataTransfer.setData("text/plain", e.target.id)
})

drop.addEventListener("dragover", function(e){
    e.preventDefault()
})

drop.addEventListener("drop", function(e){
    e.preventDefault()
    const data = e.dataTransfer.getData('text/plain');
    const dragElem = document.getElementById(data);
    
    if (dragElem) {
        drop.appendChild(dragElem);
    }
})