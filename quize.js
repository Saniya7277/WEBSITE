// Define the quiz questions and answers
const quizData = [
    {
        question: "What is the print function used for in Python?",
        options: ["To calculate math", "To print text on the screen", "To store variables"],
        correctAnswer: 1
    },
    {
        question: "What is a variable in Python?",
        options: ["A type of loop", "A container to store data", "A mathematical operator"],
        correctAnswer: 1
    },
    {
        question: "Which of these is a valid Python data type?",
        options: ["String", "Character", "Word"],
        correctAnswer: 0
    },
    {
        question: "What is the correct syntax for a Python function?",
        options: ["def function_name():", "function_name(){}", "function def_name():", "None of the above"],
        correctAnswer: 0
    },
    {
        question: "What keyword is used to declare a class in Python?",
        options: ["class", "function", "object", "define"],
        correctAnswer: 0
    },
    {
        question: "How do you create a list in Python?",
        options: ["[]", "{}", "()", "None of the above"],
        correctAnswer: 0
    },
    {
        question: "Which keyword is used to create a loop in Python?",
        options: ["for", "repeat", "loop", "iterate"],
        correctAnswer: 0
    },
    {
        question: "How do you add a comment in Python?",
        options: ["//", "/* */", "#", "<!-- -->"],
        correctAnswer: 2
    },
    {
        question: "What is the output of len([1, 2, 3])?",
        options: ["3", "2", "1", "Error"],
        correctAnswer: 0
    },
    {
        question: "How do you create a dictionary in Python?",
        options: ["[]", "{}", "()", "None of the above"],
        correctAnswer: 1
    },
    {
        question: "Which function is used to read input from the user in Python?",
        options: ["input()", "read()", "scan()", "get()"],
        correctAnswer: 0
    },
    {
        question: "What is the correct way to write an if-else condition in Python?",
        options: ["if (condition) { } else { }", "if condition: ... else: ...", "if condition -> else", "None of the above"],
        correctAnswer: 1
    },
    {
        question: "What is the output of 5 // 2 in Python?",
        options: ["2", "2.5", "3", "Error"],
        correctAnswer: 0
    },
    {
        question: "How do you declare a tuple in Python?",
        options: ["()", "[]", "{}", "<>"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is NOT a valid Python operator?",
        options: ["+", "-", "++", "*"],
        correctAnswer: 2
    },
    {
        question: "How do you write a multi-line string in Python?",
        options: ['"""..."""', "'...'...", "/* ... */", "// ... //"],
        correctAnswer: 0
    },
    {
        question: "What is the output of type(10)?",
        options: ["int", "float", "string", "None of the above"],
        correctAnswer: 0
    },
    {
        question: "What is the output of 'Hello ' + 'World'?",
        options: ["Hello World", "Hello", "World", "Error"],
        correctAnswer: 0
    },
    {
        question: "What is the output of bool(0)?",
        options: ["True", "False", "Error", "None of the above"],
        correctAnswer: 1
    },
    {
        question: "Which module is used for mathematical operations in Python?",
        options: ["math", "cmath", "random", "sys"],
        correctAnswer: 0
    }
];

// Variables to track the quiz state
let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
    
    document.getElementById("next-btn").style.display = "none";
}

// Function to check the selected answer
function checkAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
    }
    document.getElementById("next-btn").style.display = "inline-block";
}

// Function to move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

// Function to show the final score
function showScore() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("score").style.display = "block";
    document.getElementById("final-score").textContent = `${score} / ${quizData.length}`;
}

// Function to restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz").style.display = "block";
    document.getElementById("score").style.display = "none";
    loadQuestion();
}
// Initializing the quiz
loadQuestion();

// Event listener for the "Next Question" button
document.getElementById("next-btn").addEventListener("click", nextQuestion);
