const numberButtons = document.querySelectorAll(".numbuttons");
const dotButton = document.querySelector(".dotbutton");
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
        if (currentNum.textContent==="0") {currentNum.textContent=""};
        currentNum.textContent += numbutton.textContent;
        if (currentNum.textContent.length>9){
            alert("Max 8 digits per entry! Thanks!");
            currentNum.textContent="0";
        }
    })
    
});

dotButton.addEventListener('click',() => {
    clearAfterDot();
    if (currentNum.textContent==="0") {currentNum.textContent="0."} else{
        currentNum.textContent += dotButton.textContent;
    }
});

clearButton.addEventListener('click',() => {
    currentNum.textContent = "0";
    lastNum.textContent = "";
    currentSum=0.0;
    currentOp = "";
});

plusButton.addEventListener('click',() => {
    opAlready("+");
    clearAfter();
    calculate(currentOp);
    currentOp = "+";
    currentNum.textContent += "+";
    lastNum.textContent += currentNum.textContent;
    currentNum.textContent = "0";
});

minusButton.addEventListener('click',() => {
    opAlready("-");
    clearAfter();
    calculate(currentOp);
    currentOp = "-";
    currentNum.textContent += "-";
    lastNum.textContent += currentNum.textContent;
    currentNum.textContent = "0";
});

multButton.addEventListener('click',() => {
    opAlready("x");
    clearAfter();
    calculate(currentOp);
    currentOp = "x";
    currentNum.textContent += "x";
    lastNum.textContent += currentNum.textContent;
    currentNum.textContent = "0";
});

divButton.addEventListener('click',() => {
    opAlready("÷");
    clearAfter();
    calculate(currentOp);
    currentOp = "/";
    currentNum.textContent += "÷";
    lastNum.textContent += currentNum.textContent;
    currentNum.textContent = "0";
});

equalsButton.addEventListener('click',() => {
    opAlready("=");
    lastNum.textContent += currentNum.textContent;
    lastNum.textContent += "=";
    calculate(currentOp);
    currentOp = "";
    currentNum.textContent = currentSum;
    if (currentNum.textContent.length>14){
        alert("Number is TOO big!");
        lastNum.textContent = "";
        currentNum.textContent = "0";
        currentSum = 0;
        currentOp = "";
    }
});


function calculate (operation) {
    let newNumber = parseFloat(currentNum.textContent);
    switch (operation){
        case "+":
            currentSum = Math.round((currentSum + newNumber)*1000)/1000;
            break;
        case "-":
            currentSum = Math.round((currentSum - newNumber)*1000)/1000;
            break;
        case "x":
            currentSum = Math.round((currentSum * newNumber)*1000)/1000;
            break;
        case "/":
            currentSum = Math.round((currentSum / newNumber)*1000)/1000;
            break;
        default: currentSum = newNumber;
    }
};

function clearAfterNum (){
    if (lastNum.textContent.includes("=")){
        lastNum.textContent = "";
        currentNum.textContent = "";
        currentSum = 0;
        currentOp = "";
    }
};
function clearAfterDot (){
    if (lastNum.textContent.includes("=")){
        lastNum.textContent = "";
        currentNum.textContent = "0";
        currentSum = 0;
        currentOp = "";
    }
};

function clearAfter (){
    if (lastNum.textContent.includes("=")){
        lastNum.textContent = lastNum.textContent.split("=").pop();
    }
};

function opAlready (operation){
    if(lastNum.textContent.slice(-1)==operation){
        lastNum.textContent.slice(-1)="";
    }
};

function checkSize (){
    if (currentNum.textContent.length>10){
    }
};