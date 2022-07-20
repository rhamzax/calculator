function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(operator, num1, num2){
    let sum = 0;
    if (operator === "add"){
        sum = add(num1, num2);
    }
    else if (operator === "subtract"){
        sum = subtract(num1, num2);
    }
    else if (operator === "multiply"){
        sum = multiply(num1, num2);
    }
    else if (operator === "divide"){
        sum = divide(num1, num2);
    }
}