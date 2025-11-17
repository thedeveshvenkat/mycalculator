let justPressed = true;
let operand = 0;
let operandstr = "";
let result = 0;

let currentOperator = "";
let prevOperator = "";

const nums = document.querySelectorAll("span.num > button");
const operators = document.querySelectorAll("span.operator > button");
const acBtn = document.querySelector("span.m > button:first-child"); 
const plusMinusBtn = document.querySelector("span.m > button:nth-child(2)");
const percentBtn = document.querySelector("span.m > button:nth-child(3)");

const display = document.querySelector(".display");

// Number buttons
nums.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;
        console.log("Number clicked:", value);

        if (justPressed) {
            operandstr = value;
            justPressed = false;
        } else {
            operandstr += value;
        }

        operand = parseFloat(operandstr);
        display.textContent = operandstr;
    });
});

// Operator buttons
operators.forEach(btn => {
    btn.addEventListener("click", () => {
        const op = btn.textContent;
        justPressed = true;
        console.log("Operator clicked:", op);


        if (prevOperator === "") {
            result = operand;
        } else {
            result = calculate(result, operand, prevOperator);
            display.textContent = result;
            operand = result;
            console.log("Result after operation:", result); 
        }

        prevOperator = op;

        if (op === "=") {
            prevOperator = "";
        }
    });
});




acBtn.addEventListener("click", () => {
    operand = 0;
    operandstr = "";
    result = 0;
    currentOperator = "";
    prevOperator = "";
    justPressed = true;

    display.textContent = "0";  // reset display
    console.log("AC pressed: reset all values");
});

plusMinusBtn.addEventListener("click", () => {
    // If we are currently typing a number
    if (!justPressed) {
        operand = -operand;                   // flip sign
        operandstr = operand.toString();      // update string
       // display.textContent = operandstr;     // update display
        display.textContent = parseFloat(operandstr.toFixed(8));

    } else {
        // If no number being typed, flip the result
        result = -result;
        //display.textContent = result;
        display.textContent = parseFloat(result.toFixed(8));
        operand = result;                     // update operand so next operation uses it
    }

    console.log("Plus/Minus pressed:", display.textContent);
});

percentBtn.addEventListener("click", () => {
    // If we are currently typing a number
    if (!justPressed) {
        operand = operand / 100;
        operandstr = operand.toString();
        //display.textContent = operandstr;
        display.textContent = parseFloat(operandstr.toFixed(8));
    } else {
        // If no number being typed, apply % to result
        result = result / 100;
        display.textContent = result;
        operand = result; // update operand so next operation uses it
    }

    console.log("Percent pressed:", display.textContent);
});


function calculate(r, o, p) {
    if (p === "+") return r + o;
    if (p === "-") return r - o;
    if (p === "*") return r * o;
    if (p === "/") return r / o;
}
