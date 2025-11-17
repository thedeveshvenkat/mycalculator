justPressed = true;

operand = 0;
operandstr = "";
result = 0;

currentOperator = "";
prevOperator = "";

const nums = document.querySelector(".num");
const operators = document.querySelector(".operator");
const display = document.querySelector(".display");
const m = document.querySelector(".m");

nums.addEventListener("click", event => {
    if (justPressed) {
        operandstr = event.target.textContent;
        operand = parseFloat(operandstr);
        justPressed = false;
        display.textContent = operandstr;
    } else {
        operandstr += event.target.textContent;
        operand = parseFloat(operandstr);
        display.textContent = operandstr;
    }
});

operators.addEventListener("click", event => {
    justPressed = true;
    currentOperator = event.target.textContent;
    if (prevOperator === "") {
        result = operand;
    } else {
        result = calculate(result, operand, prevOperator);
        display.textContent = result;
    }
    
    prevOperator = currentOperator;
    if (prevOperator === "=") prevOperator = "";
});

function calculate(r, o, p) {
    if (p === "+") {
        return r + o;
    }

    if (p === "*") {
        return r * o;
    }

    if (p === "/") {
        return r / o;
    }

    if (p === "-") {
        return r - o;
    }
}
