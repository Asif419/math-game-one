const firstNumber = document.getElementById('first-number');
const symble = document.getElementById('operator');
const secondNumber = document.getElementById('second-number');
const finalNumber = document.getElementById('final-number');
const btnsubmit = document.getElementById('btn-submit');
const btnReload = document.getElementById('btn-reload');
const errorMessage = document.getElementById('error-message');
const wrongMessage = document.getElementById('wrong-message');
const streakField = document.getElementById('streak');




const operators = ['+', '-', '*'];
let result;
let streak = 0;


//generate number
function generateNumber(min, max) {
    const value = Math.floor(Math.random() * max - min) + min;
    return value;

}

function one() {
    //two number
    let generatedFirstNumber = generateNumber(1, 10);
    let generatedSecondNumber = generateNumber(1, 10);

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


    //make empty input box
    finalNumber.value = '';
}



one();


btnsubmit.addEventListener('click', function () {

    const submitedValue = finalNumber.value;

    if (submitedValue == '') {
        errorMessage.classList.remove('hidden');
    }
    else {
        errorMessage.classList.add('hidden');
        const submitedNumber = parseFloat(submitedValue);

        if (result === submitedNumber) {
            streak++;
            one();
            streakField.innerText = streak;
        }
        else {
            wrongMessage.classList.remove('hidden');
            streak = 0
            streakField.innerText = streak;
        }
    }   
})

btnReload.addEventListener('click', function () {
    location.reload();
})