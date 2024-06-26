// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    /* So this syntax is more modern, what it's going  to do is go through our buttons array and return
    each element in the array which will be stored in  that variable button on each iteration.*/
    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                checkAnswers();
            } else{
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    // Listens to see if enter was pressed
    document.getElementById("answer-box").addEventListener("keydown", function(event){
        if (event.key === "Enter"){
            checkAnswers();
        }
    })


    runGame("addition");
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType){
    // Will make the answer box blank on a new game
    document.getElementById("answer-box").value = "";
    // Will put the cursor in the answer box ready
    document.getElementById("answer-box").focus();

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25)+1;
    let num2 = Math.floor(Math.random() * 25)+1;

    if (gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    } else if (gameType ==="multiply"){
        displayMultiplyQuestion(num1, num2);
    }  else if (gameType ==="subtract"){
        displaySubtractQuestion(num1, num2);
    }else {
        alert(`Uknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }


}

/**
 * Checks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswers(){
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    }else{
        alert(`Awww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }
    runGame(calculatedAnswer[1]);

}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "x"){
        return [operand1 * operand2, "multiply"];
    } else if (operator === "-"){
        return [operand1 - operand2, "subtract"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
        }
}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore(){
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer(){
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1:operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2:operand1;
    document.getElementById("operator").textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x";
}

function displayDivisionQuestion(){

}