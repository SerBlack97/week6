const calculate = document.getElementById("calculate");
const results = document.getElementById("output");

function handleSubmit(event){
    event.preventDefault();
    console.log(document.getElementById("operation").value);
    document.querySelector(".box").innerHTML=mathSum();
}
// function mathSum (){
//     console.log(num)
//     const sum = Number(document.getElementById("number1").value) + Number(document.getElementById("number2").value);
//     return sum;
// }

// console.log(mathSum());

// function mathSub (){
//     console.log(num)
//     const sum = Number(document.getElementById("number1").value) - Number(document.getElementById("number2").value);
//     return sum;
// }

// console.log(mathSub());

// function mathMul (){
//     console.log(num)
//     const sum = Number(document.getElementById("number1").value) - Number(document.getElementById("number2").value);
//     return sum;
// }

// console.log(mathMul());

// function mathDivi (){
//     console.log(num)
//     const sum = Number(document.getElementById("number1").value) - Number(document.getElementById("number2").value);
//     return sum;
// }

// console.log(mathDivi());


// document.querySelector("output").addEventListener("click", function() {document.querySelector("#special").innerHTML=mathSum();
// })