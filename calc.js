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
let currentEqual = false;
let newNumber;

numberButtons.forEach((numbutton) => {
    numbutton.addEventListener('click',() => {
        currentEqual=false;
        clearAfterNum();
        if (currentNum.textContent==="0") {
            currentNum.textContent=""};
        if (currentNum.textContent.length<10){
            currentNum.textContent += numbutton.textContent;
        }
    })
    
});

dotButton.addEventListener('click',() => {
    currentEqual=false;
    clearAfterDot();
    if (currentNum.textContent==="0") {
        currentNum.textContent="0."
    } else if(currentNum.textContent.includes('.')===false) {
        currentNum.textContent += dotButton.textContent;
    }
});

clearButton.addEventListener('click',() => {
    currentEqual=false;
    currentNum.textContent = "0";
    lastNum.textContent = "";
    currentSum=0.0;
    currentOp = "";
});

plusButton.addEventListener('click',() => {
    if (currentEqual){
        currentOp = "";
    }
    currentEqual=false;
    clearAfter();
    calculate(currentOp);
    currentOp = "+";
    currentNum.textContent += "+";
    lastNum.textContent += currentNum.textContent;
    currentNum.textContent = "0";
    opAlready("+");
});

minusButton.addEventListener('click',() => {
    if (currentEqual){
        currentOp = "";
    }
    currentEqual=false;
    
    clearAfter();
    calculate(currentOp);
    
    currentOp = "-";
    currentNum.textContent += "-";
    lastNum.textContent += currentNum.textContent;
    currentNum.textContent = "0";
    opAlready("-");
    
});

multButton.addEventListener('click',() => {
    if (currentEqual){
        currentOp = "";
    }
    currentEqual=false;
    clearAfter();
    calculate(currentOp);
    currentOp = "x";
    currentNum.textContent += "x";
    lastNum.textContent += currentNum.textContent;
    currentNum.textContent = "0";
    opAlready("x");
});

divButton.addEventListener('click',() => {
    if (currentEqual){
        currentOp = "";
    }
    currentEqual=false;
    clearAfter();
    calculate(currentOp);
    currentOp = "/";
    currentNum.textContent += "÷";
    lastNum.textContent += currentNum.textContent;
    currentNum.textContent = "0";
    opAlready("÷");
});

equalsButton.addEventListener('click',() => {
    console.log(currentEqual);
    if (currentEqual && currentOp!="" && currentSum!=0){
        console.log('holaa');
        lastNum.textContent = currentSum + currentOp + newNumber + "=";
        calculateLast(currentOp);
        currentNum.textContent = currentSum;
        if (currentNum.textContent.length>9){
            alert("Number is TOO big!");
            lastNum.textContent = "";
            currentNum.textContent = "0";
            currentSum = 0;
            currentOp = "";
        }
    } else {
        opAlready("=");
        lastNum.textContent += currentNum.textContent;
        lastNum.textContent += "=";
        
        calculate(currentOp);
        
        currentNum.textContent = currentSum;
        if (currentNum.textContent.length>9){
            alert("Number is TOO big!");
            lastNum.textContent = "";
            currentNum.textContent = "0";
            currentSum = 0;
            currentOp = "";
        }
        currentEqual=true;
    }
    
});


function calculate (operation) {
    newNumber = parseFloat(currentNum.textContent);
    
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
        lastNum.textContent = lastNum.textContent.replace(/\d=/g,"");
        lastNum.textContent = currentSum + operation;
        console.log(lastNum.textContent);
    }
};


function calculateLast (operation) {
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