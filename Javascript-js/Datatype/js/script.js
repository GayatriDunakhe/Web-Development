// 1.Write a js code that checks if a variable is of type string.

// var str = "gayatri";
var str =12;
if(typeof str === "string"){
    console.log("string")
}
else{
    console.log("not string")
}

// 2.Create a js code that converts a number to a string

var num = 1234;
var cnum = String(num)
console.log(typeof num)
console.log(cnum);
console.log(typeof cnum)

// 3.Write a function that checks if a variable is a boolean.

function checkvar(){
    // var bool = true;
    var bool = "false";

    if(typeof bool === "boolean"){
        console.log("is boolean")
    }
    else{
        console.log("is not boolean")
    }
}

checkvar();

// 4. Write a js code that convets a string to lowercase.

var txt = "GAYATRI";
var res = txt.toUpperCase();
console.log(res);

// 5. Crate a js code that checks if a variable is undefined.

// var a = undefined;
var a = 9;

if(typeof a === "undefined"){
    console.log("is undefined type");
}
else{
    console.log("is not undefined type");
}