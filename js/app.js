function calculate() {

    const results = document.getElementById("result");
    const math = document.getElementById("operation");

    const fnumber = parseFloat(document.getElementById("number1").value);
    const snumber = parseFloat(document.getElementById("number2").value);

    switch(operation) {
    case "add":
      results = fnumber + snumber;
      resultDiv.innerHTML = `Result: ${fnumber} + ${snumber} = ${results}`;
      break;
    case "subtract":
      results = fnumber - snumber;
      resultDiv.innerHTML = `Result: ${fnumber} - ${snumber} = ${results}`;
      break;
    case "multiply":
      results = fnumber * snumber;
      resultDiv.innerHTML = `Result: ${fnumber} * ${snumber} = ${results}`;
      break;
    case "divide":
      if (snumber === 0) {
        resultDiv.innerHTML = "Error";
      } else {
        results = fnumber / snumber;
        resultDiv.innerHTML = `Result: ${fnumber} / ${snumber} = ${results}`;
      }
      break;
}
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