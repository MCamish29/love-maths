// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    /* So this syntax is more modern, what it's going  to do is go through our buttons array and return
    each element in the array which will be stored in  that variable button on each iteration.*/
    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                alert("You Clicked Submit!");
            } else{
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(){

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25)+1;
    let num2 = Math.floor(Math.random() * 25)+1;
}

function checkAnswers(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}

function displayDivisionQuestion(){

}