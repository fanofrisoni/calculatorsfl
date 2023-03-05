const numberButtons = document.querySelectorAll(".numbuttons");
const currentNum = document.querySelector("#currentnum");
const lastNum = document.querySelector("#lastnum");
const clearButton = document.querySelector("#erase");
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const multButton = document.querySelector("#mult");
const divButton = document.querySelector("#division");
const equalsButton = document.querySelector("#equals");
let currentSum = 0.0;
let currentOp = "";


numberButtons.forEach((numbutton) => {
    numbutton.addEventListener('click',() => {
        clearAfterNum();
        if (currentNum.textContent==="0") {currentNum.textContent=""}
        currentNum.textContent += numbutton.textContent;
    })
});

clearButton.addEventListener('click',() => {
    currentNum.textContent = "0";
    lastNum.textContent = "";
    currentSum=0.0;
    currentOp = "";
});

plusButton.addEventListener('click',() => {
    clearAfter();
    calculate(currentOp);
    currentOp = "+";
    currentNum.textContent += "+";
    lastNum.textContent += currentNum.textContent;
    currentNum.textContent = "0";
});

minusButton.addEventListener('click',() => {
    clearAfter();
    calculate(currentOp);
    currentOp = "-";
    currentNum.textContent += "-";
    lastNum.textContent += currentNum.textContent;
    currentNum.textContent = "0";
});

multButton.addEventListener('click',() => {
    clearAfter();
    calculate(currentOp);
    currentOp = "x";
    currentNum.textContent += "x";
    lastNum.textContent += currentNum.textContent;
    currentNum.textContent = "0";
});

divButton.addEventListener('click',() => {
    clearAfter();
    calculate(currentOp);
    currentOp = "/";
    currentNum.textContent += "÷";
    lastNum.textContent += currentNum.textContent;
    currentNum.textContent = "0";
});

equalsButton.addEventListener('click',() => {
    lastNum.textContent += currentNum.textContent;
    lastNum.textContent += "=";
    calculate(currentOp);
    currentOp = "";
    currentNum.textContent = currentSum;

});

function calculate (operation) {
    let newNumber = parseFloat(currentNum.textContent);
    console.log(currentOp);
    console.log(newNumber);
    switch (operation){
        case "+":
            currentSum = currentSum + newNumber;
            break;
        case "-":
            currentSum = currentSum - newNumber;
            break;
        case "x":
            currentSum = currentSum * newNumber;
            break;
        case "/":
            currentSum = Math.round((currentSum / newNumber)*10)/10;
            break;
        default: currentSum = newNumber;
    }
    console.log("total=" + currentSum);
};

function clearAfterNum (){
    if (lastNum.textContent.includes("=")){
        lastNum.textContent = "";
        currentNum.textContent = "";
        currentSum = 0;
        currentOp = "";
    }
};

function clearAfter (){
    if (lastNum.textContent.includes("=")){
        lastNum.textContent = lastNum.textContent.split("=").pop();
    }
};