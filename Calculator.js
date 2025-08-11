let result = document.getElementById("result-el");
result.innerText = "0";

let num1 = 0;
let num2 = 0;
let operator = null;

// Handle all number & dot presses
function press(input) {
    // Replace 0 if starting fresh (but allow 0.)
    if (result.innerText === "0" && input !== ".") {
        result.innerText = input;
    }
    // If input is dot and there's already one, ignore
    else if (input === "." && result.innerText.includes(".")) {
        return;
    }
    // Otherwise append input
    else {
        result.innerText += input;
    }
}

// Operator functions
function add() {
    num1 = Number(result.innerText);
    operator = "+";
    result.innerText = "0";
}

function subtract() {
    num1 = Number(result.innerText);
    operator = "-";
    result.innerText = "0";
}

function divide() {
    num1 = Number(result.innerText);
    operator = "/";
    result.innerText = "0";
}

function multiply() {
    num1 = Number(result.innerText);
    operator = "*";
    result.innerText = "0";
}

// Equal function
function equal() {
    num2 = Number(result.innerText);
    switch (operator) {
        case "+":
            result.innerText = num1 + num2;
            break;
        case "-":
            result.innerText = num1 - num2;
            break;
        case "*":
            result.innerText = num1 * num2;
            break;
        case "/":
            result.innerText = num1 / num2;
            break;
    }
}

// Clear everything
function clearCalc() {
    result.innerText = "0";
    num1 = 0;
    num2 = 0;
    operator = null;
}

// Backspace one digit
function back() {
    if (result.innerText.length > 1) {
        result.innerText = result.innerText.slice(0, -1);
    } else {
        result.innerText = "0";
    }
}
