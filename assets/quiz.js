var quizContainer = document.getElementById('container');
var resultsContainer = document.querySelector('.score-container');
var initials = document.querySelector('.initials-container');
const startButton = document.getElementById('start');
var  = document.getElementById('questions');

var answerButtons = document.getElementById('answer-btn');



// hideElement(resultsContainer);
// hideElement(initials);

var startTimer = document.querySelector('.start')
var showTime = document.querySelector('#test-time');
var testTime = 60;
var secondsInterval;


startTimer.addEventListener('click', function(){
  secondsInterval = setInterval(function() {
    testTime--;
    showTime.innerText = testTime;
    if (testTime === 0) {
      clearInterval(secondsInterval);
    }

  }, 1000   );

})



// function showElement(elementToShow) {
// elementToShow.style.display = 'block'

// }
// function hideElement(elementToHide) {
//   elementToHide.style.display = 'none'
  
//   }




// function startQuiz(questions) {
//   // first question displays
//   showQuestions(questions[0]);
//   // timer starts
//   // show score
  
// }


startButton.addEventListener('click', startGame)

function startGame() {
  
// go to next question
gotoNextQuestion()

}



function gotoNextQuestion() {
showNextQuestions

}



function showNextQuestion(questions){
qu

}


function chooseAnswer() {

}




var questions = [
    {
      testQuestions: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    }, 
    {
      testQuestions: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      testQuestions: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      testQuestions:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      testQuestions:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];



// function showQuestions(question) {
  // adding variables for the output and answer choices
  // var userOptions = [];
  // var answers;


//   // for (var i=0; i<questions[i]; i++) {

//   //   //shows the list of answers for question
//   //   answers = [];

// var quizQuestions = document.querySelector('.questions');
// quizQuestions.innerText = question.testQuestions



//  }



// // button to start the quiz
// // timer starts
// // select an answer to first question
// // select an answer to second question
// // Enter in initials to store user score
// // displays high score 
// // function for start and next buttons
// // function for checkbox or radio button of the questions
// // function for timer counter
// // count the score
// // display the score and initials when either time counts to 0 or all questions get answered





// // submitButton.onclick = function() {
// //   showResults(questions)
// // }