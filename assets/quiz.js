var quizContainer = document.getElementById('quiz');
var resultsContainer = document.querySelector('.score-container');
var initials = document.querySelector('.initials-container');
var submitButton = document.getElementById('submit');


hideElement(resultsContainer);
hideElement(initials);

var testTime = 60;

setInterval(function(){
    testTime--;

    if (testTime >= 0){
        id = document.getElementById("testTime");
        id.innerHTML = testTime;

    }
    if (testTime === 0){
        id.innerHTML = "Test Complete";
   
    
    };

}, 1000);

function startQuiz(questions) {
  // first question displays
  showQuestions(questions[0]);
  // timer starts
  // show score
  console.log(questions);
}




function showElement(elementToShow) {
elementToShow.style.display = 'block'

}
function hideElement(elementToHide) {
  elementToHide.style.display = 'none'
  
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

  startQuiz(questions);

function showQuestions(question) {
  // adding variables for the output and answer choices
  // var userOptions = [];
  // var answers;


  // for (var i=0; i<questions[i]; i++) {

  //   //shows the list of answers for question
  //   answers = [];
  // }
  console.log(question);
var quizQuestions = document.querySelector('.questions');
quizQuestions.innerText = question.testQuestions



 }



// button to start the quiz
// timer starts
// select an answer to first question
// select an answer to second question
// Enter in initials to store user score
// displays high score 
// function for start and next buttons
// function for checkbox or radio button of the questions
// function for timer counter
// count the score
// display the score and initials when either time counts to 0 or all questions get answered





// submitButton.onclick = function() {
//   showResults(questions)
// }