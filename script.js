// const buttons = document.querySelector(".buttons");
// const last = document.querySelector(".lastrow");
// const display = document.querySelector(".display");
// let firstNumReady = false;
// let prev = 0;

// buttons.addEventListener("click", event => {
//     if (event.target.style.backgroundColor === "rgb(66, 117, 74)") {
//         if (display.textContent === "0") {
//             display.textContent = "";
//         }

//         if (firstNumReady) {
//             display.textContent = prev / parseFloat(event.target.textContent);
//             firstNumReady = !firstNumReady;
//         } else {
//             display.textContent += event.target.textContent;
//         }
//     }
//     if (event.target.textContent === "AC") {
//         display.textContent = "0";  
//         prev = false;
//     }
//     if (event.target.textContent === "+/-") {
//         display.textContent = -parseFloat(display.textContent);
//     }
//     if (event.target.textContent === "%") {
//         display.textContent = parseFloat(display.textContent) / 100;
//     }
//     if (event.target.textContent === "/") {
//         if (!firstNumReady) {
//             console.log("check");
//             firstNumReady = !firstNumReady;
//             prev = parseFloat(display.textContent);
//         }
//         display.textContent = event.target.textContent;
//     }
// });

// last.addEventListener("click", event => {
//     if (event.target.style.backgroundColor === "rgb(66, 117, 74)") {
//         display.textContent += event.target.textContent;
//     }
// });


// const display = document.querySelector(".display");
// const num = document.querySelector(".num");
// const operator = document.querySelector(".operator");
// const m = document.querySelector(".m");
// let operatr = 0;
// let firstVal = 0;
// let ready = false;
// let justDisplayed = false;

// num.addEventListener("click", event => {
//     updateDisplay(event.target.textContent, false);
// });

// m.addEventListener("click", event => {
//     if (event.target.textContent === "AC") {
//         clear();
//     }
// });

// operator.addEventListener("click", event => {
//     if (ready) {
//         calculate(operatr, firstVal, display.textContent);
//         ready = !ready;
//     } else {
//         operatr = event.target.textContent;
//         firstVal = parseFloat(display.textContent);
//         ready = !ready;
//         clear();
//     }

// });

// function calculate(operatr, firstVal, secondVal) {
//     if (operatr === "/") {
//         operatr = 0; 
//         updateDisplay(firstVal / secondVal, true); 
//         justDisplayed = true;  
//     }
// }

// function updateDisplay(c, erase) {
//     if (justDisplayed) {
//         display.textContent = c;
//         justDisplayed = false;
//     }
//     else if (erase) {
//         display.textContent = c;
//     } else {
//         display.textContent += c;
//     }
// }

// function clear() {
//     display.textContent = "";
// }


const nums = document.querySelector(".num");
const operators = document.querySelector(".operator");
const display = document.querySelector(".display");
const m = document.querySelector(".m");

let opcountplus = 0;
let opcountstar = 0;
let opcountdiv = 0;
let opcountsub = 0;
let val = 0;
let current = 0;
let prev = 0;
let operator = 0;
let justPressed = false;

nums.addEventListener("click", event => {
    if (justPressed) {
        justPressed = !justPressed;
        updateDisplay(event.target.textContent, false);
    }
    else {
        updateDisplay(event.target.textContent, true);
    }
});

m.addEventListener("click", event => {
    if (event.target.textContent === "AC") {
        updateDisplay("", false);
        opcountplus = 0;
        opcountstar = 0;
        opcountdiv = 0;
        opcountsub = 0;
        val = 0;
        current = 0;
        prev = 0;
        operator = 0;
        justPressed = false;
    }

    if (event.target.textContent === "+/-") {
        updateDisplay(-parseFloat(display.textContent), false);
    }

    if (event.target.textContent === "%") {
        updateDisplay(parseFloat(display.textContent) / 10, false);
    }
});

operators.addEventListener("click", event => {
    justPressed = true;
    if (event.target.textContent === "+") {
        opcountplus++;
        if (opcountplus === 1 && opcountstar !== 0) {
            something();
            prev = parseFloat(display.textContent);  
            operator = event.target.textContent;
            opcountstar = 0;
        } 
        
        else if (opcountplus === 1 && opcountdiv !== 0) {
            something();
            prev = parseFloat(display.textContent);  
            operator = event.target.textContent;
            opcountdiv = 0;
        } 
        
        else if (opcountplus === 1 && opcountsub !== 0) {
            something();
            prev = parseFloat(display.textContent);  
            operator = event.target.textContent;
            opcountsub = 0;
        } 
        
        else if (opcountplus === 1) {
            prev = parseFloat(display.textContent);  
            operator = event.target.textContent;
        }

        if (opcountplus % 2 === 0) {
            something();
        }

        if (opcountplus >= 3 && opcountplus % 2 === 1) {
            something();
        }
    }

    if (event.target.textContent === "*") {
        opcountstar++;
        if (opcountstar === 1 && opcountplus !== 0) {
            something();
            prev = parseFloat(display.textContent);  
            operator = event.target.textContent;
            opcountplus = 0;
        } 
        else if (opcountstar === 1 && opcountdiv !== 0) {
            something();
            prev = parseFloat(display.textContent);  
            operator = event.target.textContent;
            opcountdiv = 0;
        }
        else if (opcountstar === 1 && opcountsub !== 0) {
            something();
            prev = parseFloat(display.textContent);  
            operator = event.target.textContent;
            opcountsub = 0;
        }
        
        else if (opcountstar === 1) {
            prev = parseFloat(display.textContent);  
            operator = event.target.textContent;
        }

        if (opcountstar % 2 === 0) {
            something();
        }

        if (opcountstar >= 3 && opcountstar % 2 === 1) {
            something();
        }
    }

    if (event.target.textContent === "/") {
        opcountdiv++;
        if (opcountdiv === 1 && opcountplus !== 0) {
            something();
            prev = parseFloat(display.textContent);  
            operator = event.target.textContent;
            opcountplus = 0;
        } 
        else if (opcountdiv === 1 && opcountstar !== 0) {
            something();
            prev = parseFloat(display.textContent);  
            operator = event.target.textContent;
            opcountstar = 0;
        }
        else if (opcountdiv === 1 && opcountsub !== 0) {
            something();
            prev = parseFloat(display.textContent);  
            operator = event.target.textContent;
            opcountsub = 0;
        }

        else if (opcountdiv === 1) {
            prev = parseFloat(display.textContent);  
            operator = event.target.textContent;
        }

        if (opcountdiv % 2 === 0) {
            something();
        }

        if (opcountdiv >= 3 && opcountdiv % 2 === 1) {
            something();
        }
    }

    if (event.target.textContent === "-") {
        opcountsub++;

        if (opcountsub === 1 && opcountplus !== 0) {
            something();
            prev = parseFloat(display.textContent);  
            operator = event.target.textContent;
            opcountplus = 0;
        } 
        else if (opcountsub === 1 && opcountstar !== 0) {
            something();
            prev = parseFloat(display.textContent);  
            operator = event.target.textContent;
            opcountstar = 0;
        }
        else if (opcountsub === 1 && opcountdiv !== 0) {
            something();
            prev = parseFloat(display.textContent);  
            operator = event.target.textContent;
            opcountdiv = 0;
        }

        else if (opcountsub === 1) {
            prev = parseFloat(display.textContent);  
            operator = event.target.textContent;
        }

        if (opcountsub % 2 === 0) {
            something();
        }

        if (opcountsub >= 3 && opcountsub % 2 === 1) {
            something();
        }
    }

    if (event.target.textContent === "=") {
        something();
        opcountplus = 0;
        opcountstar = 0;
        opcountdiv = 0;
        opcountsub = 0;
    }
});

function something() {
    current = parseFloat(display.textContent);
    val = calculate(prev, current, operator);
    updateDisplay(val, false);
    prev = val;
}

function updateDisplay(content, addOn) {
    if (addOn) {
        display.textContent += content;
    } else {
        display.textContent = content;
    }
}

function calculate(fval, sval, operator) {
    if (operator === "+") {
        return fval + sval;
    }

    if (operator === "*") {
        return fval * sval;
    }

    if (operator === "/") {
        return fval / sval;
    }

    if (operator === "-") {
        return fval - sval;
    }
}
























