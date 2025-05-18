
const questions = [
    {
        question : ' What does HTML stands for?',
        answers : [
            { text : 'Hypertext MarkUp Language', correct : true },
            { text : 'HyperLink Text language' , correct : false },
            { text : 'HyperText Mechanism Langauage' , correct : false},
            { text : 'Hyper technical machine language' , correct : false },
        ] 
    },

    {
        question : 'which of the following statement is not true?' ,
        answers : [
            { text : 'a is the anchor tag' , correct : false },
            { text : 'a is used to add hyperlinks' , correct : false },
            { text : 'img tag is used to remove image from webpages' , correct : true },
            { text : 'marque tag is responible for the movement of texts' , correct : false },
        ]
    },

    {
        question : 'Which tag is used to display table?' ,
        answers : [
            { text : 'th' , correct : false },
            { text : 'td' , correct : false },
            { text : 'tr' , correct : false },
            { text : 'table' , correct : true },
        ]   
    },

    {
        question : 'Which symbol is used to target id in CSS?' ,
        answers : [
            { text : '*' , correct : false },
            { text : '.' , correct : false },
            { text : '#' , correct : true },
            { text : '!' , correct : false },
        ]
    },

    {
        question : 'which element is used to display list items?' ,
        answers : [
            { text : 'ul' , correct : false },
            { text : 'li' , correct : true },
            { text : 'ol' , correct : false },
            { text : 'dl' , correct : false },
        ]
    },

    {
        question : 'Which type of language javascript is?' ,
        answers : [
            { text : 'scripted language' , correct : true },
            { text : 'programming language' , correct : false },
            { text : 'markup language' , correct : false },
            { text : 'machine level' , correct : false },
        ]
    },

    { 
        question : 'Which element is used to display unordered list?' ,
        answers : [
            { text : 'ol' , correct : false },
            { text : 'ul' , correct : true },
            { text : 'li' , correct : false },
            { text : 'dl' , correct : false },
        ]
    },

    { 
        question : 'How we can target id in javascript?' ,
        answers : [
            { text : 'document.getElementsByClassName' , correct : false },
            { text : 'document.getelementbyid("id")' , correct : false },
            { text : 'document.GetElementById("id")' , correct : false },
            { text : 'document.getElementById("id")' , correct : true },
        ]
    },

    { 
        question : 'which of the following is the latest version of HTML' ,
        answers : [
            { text : 'HTML 5.3' , correct : true },
            { text : 'HTML 2.0' , correct : false },
            { text : 'HTML 1.0' , correct : false },
            { text : 'HTML 3.2' , correct : false },
        ]
    },

    { 
        question : 'Which of the following is true?' ,
        answers : [
            { text : 'Div is inline element' , correct : false },
            { text : 'href stands for hyperlink former' , correct : false },
            { text : 'Animation is the key feature of CSS' , correct : true },
            { text : 'flex and grids are used in javascript' , correct : false },
        ]
    },  
] 
  

const  questionElement = document.getElementById('questions')
const answerBtns = document.getElementById('answerBtn')
const nextBtn = document.getElementById('next')


let currentQuestionIndex = 0;
let score = 0

function startQuiz(){
    currentQuestionIndex = 0
    score = 0
    
    showquestions()
}

function showquestions(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex+1;
    questionElement.innerHTML = `${questionNumber}. ${currentQuestion.question}`

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('btn')
        answerBtns.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    })
}

function resetState(){
    nextBtn.style.display = "none"
    while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++
    }else{
        selectedBtn.classList.add("incorrect")
    }

    Array.from(answerBtns.children).forEach(button =>{
        if(button.dataset.correct=== "true"){
            button.classList.add("correct")
        }
        button.style.Color = "white"
        button.disabled= true;
    });
    nextBtn.style.display = "block"

}


function showScore(){
    resetState()
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}`
    nextBtn.innerHTML = 'Play Again'
    nextBtn.style.display = "block"
}

function handleNextBtn(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showquestions()
    }else{
        showScore()
    }
}


nextBtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextBtn()
    }else{
        startQuiz()
    }
})

startQuiz()