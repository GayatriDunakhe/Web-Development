const countires = {
    // "India" : {
    //     "code1": "+91",
    //     "code2": "+257"
    // },
    "India": "+91",
    "Napal": "+977"
}

// console.log(countires.India.code1)

const countryDropdown = document.getElementById("countryDropdown")

for(let cname in countires){

    if(countires.hasOwnProperty(cname)){
        // const code =  countires[cname];
        const code = cname;
        const option = document.createElement("option")
        option.value = code
        option.text = code
        countryDropdown.appendChild(option)
    }
}