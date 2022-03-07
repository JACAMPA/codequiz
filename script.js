//creating variables
var startBtn = document.querySelector(".start-button"); 
var timerEl = document.querySelector(".timer-count"); 
var questionCon = document.querySelector(".container"); 
var questionEl = document.querySelector("#question");
var submitForm = document.querySelector("#form"); 
var answerBtn = document.querySelector("#answer-button"); 
var submitBtn = document.querySelector("#submission");
var questionIndex; 
var timer; 
var timerCount;

var questions = [
    {
        question: "Which built-in method combines the text of two strings and returns a new string?",
        options: [ 
           {answer: "append()", correct: false},
           {answer: "concat()", correct: true},
           {answer: "attach()", correct: false,},
           {answer: "None of the above.", correct: false}
]
    },

    {
        question: "How to write an IF statement in JavaScript?",
        options: [ 
           {answer: "if i = 5", correct: false},
           {answer: "if (i == 5)", correct: true},
           {answer: "if i == 5 then", correct: false,},
           {answer: "if i = 5 then", correct: false}
]
    },
    
        {
            question: 'What is the HTML tag under which one can write the JavaScript code?',
            options: [
                { answer: "A. <javascript>", correct: false },
                { answer: "B. <scripted>", correct: false },
                { answer: "C. <script>", correct: true },
                { answer: "D. <js>", correct: false },
            ]
        },
]

//starts at first question, starts the timer and prevents multiple start clicks
function startQuiz() {
indexArray = 0; 
timerCount = 45; 
startBtn.disabled = true; 
questionCon.classList.remove("hidden")
nextQuestion()
}

// This function is used to move to the next question. showQuestions with arguments indexArray finds the next question.
function nextQuestion() {
    if (indexArray === questions.length) {
        questionCon.classList.add("hidden");
        submitForm.classList.remove("hidden");
        clearInterval(timer);
    }
    showQuestions(questions[indexArray]);
}


//shows questions
function showQuestions(question) {
    questionEl.textContent = question.question
    while (answerBtn.firstChild){    
        answerBtn.removeChild(answerBtn.firstChild)
      }
    question.options.forEach(answer => {
        var button = document.createElement('button') 
        button.textContent = answer.answer 
        button.addEventListener('click', selectAnswer)
        button.classList.add('button') 
        answerBtn.appendChild(button)
    })
}
// function for selecting answer
    function selectAnswer(event) {
        var userChoice = event.target.textContent;
        var correctOption = questions[indexArray].options.filter(function(option) {
            return option.correct
        })[0].answer;
        if (userChoice !== correctOption) {
            timerCount -= 10;
        }
        indexArray++;
        nextQuestion();
    }



// Function for timer
function startTimer() {
    timerCount = 45; 
    timer = setInterval(function() { 
        timerEl.textContent = timerCount + " seconds remaining";
        timerCount--;
        if(timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000); 
    

}


submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

});

// starts timer and starts quiz when button is clicked
startBtn.addEventListener("click", startTimer); 
startBtn.addEventListener("click", startQuiz); 
