const firstNumber = document.getElementById('first-number');
const symble = document.getElementById('operator');
const secondNumber = document.getElementById('second-number');
const finalNumber = document.getElementById('final-number');
const btnsubmit = document.getElementById('btn-submit');
const btnReload = document.getElementById('btn-reload');
const errorMessage = document.getElementById('error-message');
const wrongMessage = document.getElementById('wrong-message');
const streakField = document.getElementById('streak');
const errorField = document.getElementById('error');




const operators = ['+', '-', '*'];
let result;
let streak = 0;
let wrongAnswer = 0;
let life = 3;
let correctAnswer = 0;
let lastStreak = 0;
let currentStreak = 0;


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

    //math-field-title
    const mathFieldTitle = document.getElementById('math-field-title');
    mathFieldTitle.textContent = `Fill blank with correct answer.\n You have ${life} term in your hand!`;
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
            currentStreak++;
            one();
            streakField.innerText = streak;
            errorField.innerText = wrongAnswer;
            wrongMessage.classList.add('hidden');
            correctAnswer++;
            if (correctAnswer == 10) {
                const overlay = document.getElementById('overlay');
                overlay.classList.remove('opacity-0', 'invisible');
                const winLose = document.getElementById('win-lose');
                winLose.textContent = 'You Won!';
            }
        }
        else {
            wrongMessage.classList.remove('hidden');
            streak = 0
            streakField.innerText = streak;
            wrongAnswer++;
            life--;
            errorField.innerText = wrongAnswer;
            const lastStreakSting = document.getElementById('last-streak');
            if (lastStreak > currentStreak)
                lastStreakSting.innerText = lastStreak;
            else
                lastStreakSting.innerText = currentStreak;

            lastStreak = currentStreak;
            currentStreak = 0;
            one();
            if (wrongAnswer < 3) {
                lastStreakSting.innerText = lastStreak;
                one();

            }
            else {
                const overlay = document.getElementById('overlay');
                overlay.classList.remove('opacity-0', 'invisible');
                const winLose = document.getElementById('win-lose');
                winLose.textContent = 'You Lose!';
            }
        }
    }
})

btnReload.addEventListener('click', function () {
    location.reload();
})

document.getElementById('btn-start-over').addEventListener('click', function () {
    console.log(1);
    location.reload();
})