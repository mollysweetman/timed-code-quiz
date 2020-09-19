var quizContainer = document.getElementById('container');
var resultsContainer = document.querySelector('.score-container');
var initials = document.querySelector('.initials-container');
var startButton = document.getElementById('start');

var questionItem = document.getElementById('questions');
var answerList = document.querySelectorAll('.answerOptions');

var numberOfQuestionEl = 0;
var answer;

var displayedQuestion = 0



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



startTimer.addEventListener('click', function () {
  startTimer.style.display = 'none';
  
  secondsInterval = setInterval(function () {
    testTime--;
    showTime.innerText = testTime;
    if (testTime === 0 || numberOfQuestionEl === questions.length) {
      clearInterval(secondsInterval);
      setTimeout(showResults);
    }

  }, 1000);

})



var questions = [
  {
    testQuestions: "test question",
    options: ["option1", "asdf", "different", "unique"],
    answer: "option1"
  },
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


function removeStart() {
  quizContainer.removeChild(startButton);
  startGame();
}


startButton.addEventListener('click', startGame)

function startGame(event) {
  startButton.style.display = 'hide';

  var currentQ = questions[numberOfQuestionEl]

  numberOfQuestionEl++;
  answer = currentQ.answer

  questionItem.textContent = currentQ.testQuestions;
  //answerList.innerText = "";


  var quizOptions = currentQ.options;


  // Generate questions
  for (var i = 0; i < quizOptions.length; i++) {
    answerList[i].innerText = "";
    // creating button element to stick on page
    var optionButton = document.createElement("button");

    // <button class="options"></button>
    optionButton.setAttribute("class", "options");
    // <button class="options" value="strings"></button>
    optionButton.setAttribute("value", currentQ.options[i]);
    // <button class="options" value="strings">strings</button>
    optionButton.textContent = currentQ.options[i];
    optionButton.addEventListener('click', function (event) {
      showAnswer();
      console.log('anything');
      
    })


    //quizOptions.append(optionButton);

    answerList[i].innerHTML = "";
    answerList[i].append(optionButton);

    
  }
}



function showAnswer() {
  var nextQuestionEl = document.getElementsByClassName("nextButton");
  var newButton = document.createElement("button");
  let answerElement = document.getElementsByClassName("answers")[0];

  // <button class="options"></button>
  newButton.setAttribute("class", "nextButton");
  
  // <button class="options" value="strings">strings</button>
  newButton.textContent = "nextButton";


  document.querySelector(".nextButton").appendChild(newButton);



  if (questions[0].answer === event.target.textContent) {

    console.log(questions[0].answer);

    answerElement.innerHTML = "YES!";
    // setTimeout();
    // showElement;
  } else {
    answerElement.innerHTML = "WRONG!";
    // setTimeout();
    testTime = testTime - 10;
    // showElement;
  }

  
  newButton.addEventListener('click', function(){
    startGame();
    console.log('something');
    
  })
}


// answerList.addEventListener("click", startGame);










// function showResults() {
//   document.getElementById("quiz").classList.add('noDisplay');
//   document.getElementById("initials").classList.remove('noDisplay');
//   userScoreElement.textContent = "FINAL SCORE: " + "";
// }








// function gameLost() {
// 	questionItem.textContent = "You lost! Try again!";
// 	return;
// }
  //   addScore++;
  // answer = questions[addScore].answer

  // questionItem.textContent = questions[addScore].title
  // options.innerHTML = '';

  // if (event.target.value === answerButtons);
  // console.log(questions);


 // function showNextQuestion(questions) {
 //   // questionItem.innerText = 
 //   startButton.setAttribute('start');

 // }



  // questionsPath.innerText = questions[questionIndex].testQuestions;

  // var posAns1 = questions[questionIndex].options
  // var posAns2 = questions[questionIndex].options
  // var posAns3 = questions[questionIndex].options
  // var posAns4 = questions[questionIndex].options



  // var q1 = document.createElement("button")
  // var q2 = document.createElement("button")
  // var q3 = document.createElement("button")
  // var q4 = document.createElement("button")

  // function startQuiz(questions) {
  //   // first question displays
  //   showQuestions(questions[0]);
  //   // timer starts
  //   // show score

  // }

  // function showQuestions(question) {
  // adding variables for the output and answer choices
  // var userOptions = [];
  // var answers;



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



  //   <button onclick="myFunction()">Click me</button>
  // object.addEventListener("click", myScript);





