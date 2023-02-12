const firstNumber = document.getElementById('first-number');
const symble = document.getElementById('operator');
const secondNumber = document.getElementById('second-number');
const finalNumber = document.getElementById('final-number');
const btnsubmit = document.getElementById('btn-submit');
const errorMessage = document.getElementById('error-message');
const operators = ['+', '-', '*'];
let result;

//generate number
function generateNumber(min, max) {
    const value = Math.floor(Math.random() * max - min) + min;
    return value;

}


//two number
let generatedFirstNumber = generateNumber(1, 20);
let generatedSecondNumber = generateNumber(1, 20);

//generate operator
const operator = operators[Math.floor(Math.random() * operators.length)];


//question making error handling
if (operator == '-' || operator == '/') {
    if (generatedFirstNumber < generatedSecondNumber) {
        [generatedFirstNumber, generatedSecondNumber] = [generatedSecondNumber, generatedFirstNumber];
    }
}

//result finding
result = eval(`${generatedFirstNumber} ${operator} ${generatedSecondNumber}`);


// console.log(result);
// console.log(generatedFirstNumber, operator, generatedSecondNumber);

//Show value in web page
firstNumber.innerText = generatedFirstNumber;
secondNumber.innerText = generatedSecondNumber;
symble.innerText = operator;


btnsubmit.addEventListener('click', function () {
    submitedValue = btnsubmit.value;
    if (submitedValue == '') {
        errorMessage.classList.remove('hidden');
    }
})