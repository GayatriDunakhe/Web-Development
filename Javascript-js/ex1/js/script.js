function myfun(){
    // alert("Hey hello!");

    var res;

    if(confirm("press button")){
        res = "you pressed ok!";
        console.log(res);
    }
    else{
        res = "you pressed cancle!";
        console.log(res);
    }
}