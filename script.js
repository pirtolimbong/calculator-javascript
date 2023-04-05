const calculatorScreen = document.querySelector(".calculator-screen")

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

// BAGIAN NUMBER

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });

});

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";


const inputNumber = (number) => {
    if (currentNumber === "0") {
        currentNumber = number;
    } else {
    currentNumber += number;
    }
};


// BAGIAN OPERATOR

const inputOperator = (operator) => {
   if(calculationOperator === "") {
    prevNumber = currentNumber;
   }

   calculationOperator = operator;
   currentNumber = "0";
};

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
});

// Calculation 
const calculate = () => {
    let result = "";
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = prevNumber - currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break;
        default:
            break;
    }

    currentNumber = result;
    calculationOperator = "" ;
}

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
});

// BAGIAN BUTTON AC

const clearAll = () => {
    prevNumber = "";
    calculationOperator = "";
    currentNumber = "0";
};

const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
});

// Bagian DECIMAL
inputDecimal = (dot) => {
    if (currentNumber.includes('.')){
        return;
    }
    currentNumber += dot;
}

const decimal = document.querySelector(".decimal"); 

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

// Bagian Percen
const percentage = document.querySelector(".percentage");

percentage.addEventListener("click", () => {
    calculationPercentage();
});

const calculationPercentage = () => {
        let result = parseFloat(currentNumber) / 100;
        updateScreen(result);
};



