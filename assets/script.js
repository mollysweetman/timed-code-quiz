
// button to start the quiz
// timer starts
// select an answer to first question
// select an answer to second question
// Enter in initials to store user score
// displays high score 

var quizMsg = document.getElementsByClassName(".hello");

console.log(quizMsg);

document.addEventListener("click", sayHello)


function sayHello(event){
    console.log(event.target)
}

// list of all questions, choices, and answers
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];

//global variables
    //need questions

    //need something to track what question where on
    //var questionCount = 0
​
    //need something to track the score
​
    //need something to track the time
​
​
​
//functions
    //increase the counter / going to next question
​
​
​
//event listeners
    //need an event listener for user clicking answer btn's
    //need an event listener when user wants to start quiz
​
​
//entry point - START
    //home screen stuff - landing page
    //user click start quiz
        //change home screen stuff to display: none or hidden
    //show first question -> by default, display: none or hidden
                        //-> make question "div" display:
