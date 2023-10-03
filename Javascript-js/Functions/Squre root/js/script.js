const sqrtNum= () => {
    let num = parseInt(document.getElementById("num").value)

    const sqrtnum = (a) => Math.sqrt(a);
    const res = sqrtnum(num)

    document.getElementById("result").innerHTML = res;
}
