
// Quiz questions
var quizQuestions = [{
    question: "What's the biggest animal in the world?",
    choiceA: "Elephant",
    choiceB: "Blue whale",
    choiceC: "Lion",
    choiceD: "Hypopotamous",
    correctAnswer: "B"},
  {
    question: "In what franchise would you find the character Katniss Everdeen?",
    choiceA: "The Hunger Games",
    choiceB: "Lord of the Rings",
    choiceC: "Divergent",
    choiceD: "Maze Runner",
    correctAnswer: "A"},
   {
    question: "How many valves does the heart have?",
    choiceA: "18",
    choiceB: "4",
    choiceC: "6",
    choiceD: "2",
    correctAnswer: "B"},
    {
    question: "What does He stand for on the periodic table?",
    choiceA: "Hassium",
    choiceB: "Hydrogen",
    choiceC: "Holmium",
    choiceD: "Helium",
    correctAnswer: "D"},
    {
    question: "How many elements are there in the periodic table?",
    choiceA: "188",
    choiceB: "136",
    choiceC: "118",
    choiceD: "124",
    correctAnswer: "C"},  
    {
    question: "What are the three water signs in astrology?",
    choiceA: "Cancer, Scorpio, and Pisces",
    choiceB: "Aquarius, Pisces, Aries",
    choiceC: "Taurus, Saggitarius, Libra",
    choiceD: "Leo, Aquarius, Gemini",
    correctAnswer: "A"},
    {
    question: "How many bones does a shark have?",
    choiceA: "155",
    choiceB: "270",
    choiceC: "206",
    choiceD: "None",
    correctAnswer: "D"
},    ];


var time=0;
var score=0;
var i=0;

var questionsEl = document.getElementById("questions");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var startButton = document.getElementById("startbtn")
var QuizTimer= document.getElementById("timer")
var QuizShow=  document.getElementById("quiz")
var Startpage= document.getElementById("startpage")


// question generation function
function Question() {

   

        var currentQuestion = quizQuestions[i];
        questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
        buttonA.innerHTML = currentQuestion.choiceA;
        buttonB.innerHTML = currentQuestion.choiceB;
        buttonC.innerHTML = currentQuestion.choiceC;
        buttonD.innerHTML = currentQuestion.choiceD;

    
}






//Start game function
function StartGame() {
    Startpage.style.display = "none";

    Question()
    
    
    setInterval (function timer () {
        time++;
    
    QuizTimer.textContent = "Time:" + time;
    
    } ,1000);
    
    QuizShow.style.display = "block";
}


function CheckAnswer(answer) {

    if (quizQuestions[i].correctAnswer=== answer)
    {score++

    var result= document.getElementById("result")
    result.innerHTML = "Correct"
    result.style.display = "block";
    i++
    Question();
}

    else if (quizQuestions[i].correctAnswer!== answer){
        var result= document.getElementById("result")
        result.innerHTML = "Incorrect"
        result.style.display = "block";
        i++
        Question();
    }

    else (i== quizQuestions.lenght )
    {
        //FIXME show score
    }

}








startButton.addEventListener("click",StartGame);