function calculate() {
  
    const resultDiv = document.getElementById("result");
    const math = document.getElementById("operation");
    
    const operation = math.value; 
    // user inputs converted into integers 
    const fnumber = parseFloat(document.getElementById("number1").value);
    const snumber = parseFloat(document.getElementById("number2").value);
    // initialize starting number
    let total = 0; 
    //functions
    switch(operation) {
        case "add":
            total = fnumber + snumber;
            resultDiv.innerHTML = `Result:${total}`;
            break;
        case "subtract":
            total = fnumber - snumber;
            resultDiv.innerHTML = `Result:${total}`;
            break;
        case "multiply":
            total = fnumber * snumber;
            resultDiv.innerHTML = `Result:${total}`;
            break;
        case "divide":
            if (snumber == 0) {
                resultDiv.innerHTML = "Result: Error";
            } 
            else {
                total = fnumber / snumber;
                resultDiv.innerHTML = `Result:${total}`;
            }
            break;
    }
}
// runs function on button click
const calc = document.getElementById("calcbutton");
calc.addEventListener("click", calculate);