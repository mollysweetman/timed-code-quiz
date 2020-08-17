var quizContainer = document.getElementById('container');
var resultsContainer = document.querySelector('.score-container');
var initials = document.querySelector('.initials-container');
var startButton = document.getElementById('start');

var questionItem = document.getElementById('questions');
var answerList = document.getElementById('answerOptions');

var numberOfQuestionEl = 0;
var answer;


hideElement(resultsContainer);
hideElement(initials);

var startTimer = document.querySelector('.start')
var showTime = document.querySelector('#test-time');
var testTime = 60;
var secondsInterval;


function showElement(elementToShow) {
  elementToShow.style.display = 'block'
  
  }
  function hideElement(elementToHide) {
    elementToHide.style.display = 'none'
  
    }
    

// function startQuiz(questions) {
//   // first question displays
//   showQuestions(questions[0]);
//   // timer starts
//   // show score

// }

startTimer.addEventListener('click', function () {
  startTimer.style.display = 'none';
  gotoNextQuestion();
  secondsInterval = setInterval(function () {
    testTime--;
    showTime.innerText = testTime;
    if (testTime === 0 || numberOfQuestionEl === questions.length) {
      clearInterval(secondsInterval);
    }

  }, 1000);

})



function startGame() {
 startButton.addEventListener('click', startGame())
  startButton.style.display = 'hide';

numberOfQuestionEl++;
answer = questions[numberOfQuestionEl].answer

questionItem.textContent = questions[numberOfQuestionEl].testQuestions;
answerList.innerText = "";

var quizOptions = questions[numberOfQuestionEl].quizOptions;


for (var i =o; i < quizOptions.length; i++) {
    var nextQuestion = document.createElement("Qbtn");

    nextQuestion.textContent = quizOptions[i];
    answer = quizOptions.appendChild(nextQuestion);

}



  var choiceButton = document.createElement("button");
  choiceButton.setAttribute("class" ,"options");
  choiceButton.setAttribute("value" , options);
  choiceButton.textContent = options;
  choiceButton.onclick = answer;


var q1 = document.createElement("button")
var q2 = document.createElement("button")
var q3 = document.createElement("button")
var q4 = document.createElement("button")

//   <button onclick="myFunction()">Click me</button>
// object.addEventListener("click", myScript);


  // go to next question
  //gotoNextQuestion()
//   addScore++;
// answer = questions[addScore].answer

// questionItem.textContent = questions[addScore].title
// options.innerHTML = '';




// if (event.target.value === answerButtons);
// console.log(questions);
}






// function showNextQuestion(questions) {
//   // questionItem.innerText = 
//   startButton.setAttribute('start');

// }


// function chooseAnswer() {

// }


var questions = [
  {
    testQuestions: "Commonly used data types DO NOT include:",
    options: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    testQuestions: "The condition in an if / else statement is enclosed within ____.",
    options: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    testQuestions: "Arrays in JavaScript can be used to store ____.",
    options: [
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
    options: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
  },
  {
    testQuestions:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log"
  }
];


function gotoNextQuestion() {
  //showNextQuestions

  var questionIndex = 0;
  var questionsPath = document.querySelector("#questions");

  questionsPath.innerText = questions[questionIndex].testQuestions;

  // var posAns1 = questions[questionIndex].options
  // var posAns2 = questions[questionIndex].options
  // var posAns3 = questions[questionIndex].options
  // var posAns4 = questions[questionIndex].options






}



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

