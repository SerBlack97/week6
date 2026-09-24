function mathSum (num2){
    console.log(num)
    const sum = Number(document.getElementById("number1").value) + Number(document.getElementById("number2").value);
    return sum;
}

console.log(mathSum());

function mathSub (num3){
    console.log(num)
    const sum = Number(document.getElementById("number1").value) - Number(document.getElementById("number2").value);
    return sum;
}

console.log(mathSub());

document.querySelector("button").addEventListener("click", function() {document.querySelector("#special").innerHTML=mathSum();
})