
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

// Global Variables
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
var levelsPage =document.getElementById("levels")
var easybtn= document.getElementById("easy")
var hardbtn= document.getElementById("hard")
var scoreShower= document.getElementById("finalScore")
var gameover= document.getElementById("gameover")
var result= document.getElementById("result")
var submitScore= document.getElementById("submitScore")
var highScoreContainer= document.getElementById("highscoreContainer")
var inputName= document.getElementById("initials")
var highscoreInitials= document.getElementById("highscore-initials")
var highscorelist =  document.getElementById("highscoreList")
var highscorebtn= document.getElementById("Highscore")
var PlayAgain= document.getElementById("playAgain")
var Clear= document.getElementById("clearHighscore")
var endgame= document.getElementById("endGame")

/*var numberOfQuestions= parseInt(quizQuestions.lenght)
var finalQuestion= quizQuestions[quizQuestions.lenght]; */ //FIXME
var finalQuestion= quizQuestions[6]


// question generation function
function Question() {
        var currentQuestion = quizQuestions[i];
        questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
        buttonA.innerHTML = currentQuestion.choiceA;
        buttonB.innerHTML = currentQuestion.choiceB;
        buttonC.innerHTML = currentQuestion.choiceC;
        buttonD.innerHTML = currentQuestion.choiceD;
}



levelsPage.style.display= "none";


//Function to show levels
function StartGame() {
    Startpage.style.display = "none";
    levelsPage.style.display= "block";
    
}


//Easy function starts the game 
function levelEasy() {
    Startpage.style.display = "none";
    levelsPage.style.display= "none";

    Question()
    time = 20 ; //FIXME number times the lenght of the object
    
    setInterval (function timer () {
        time--;
    
    QuizTimer.textContent = "Time:" + time;

    if (time==0){ showScore()}

    } ,1000);
    
    QuizShow.style.display = "block";

}

//Hard game function
function levelHard() {
    Startpage.style.display = "none";
    levelsPage.style.display= "none";

    Question()
    time = 10;      //FIXME
    
    setInterval (function timer () {
        time--;
    
    QuizTimer.textContent = "Time:" + time;

    if (time==0){ showScore()}
    
    } ,1000);
    
    QuizShow.style.display = "block";

}

//Show score
function showScore() {
    QuizShow.style.display = "none"
    gameover.style.display = "flex";
    
if (score==1)
{ scoreShower.innerHTML= "Congratulations! You got " + score + " correct question out of the "+ 7;}

else{
scoreShower.innerHTML= "Congratulations! You got " + score + " correct questions out of the "+ 7;}

}





//answer checker
function CheckAnswer(answer) {

    if (quizQuestions[i].correctAnswer=== answer && quizQuestions[i]!=finalQuestion)
    {
    score++
    result.innerHTML = "Correct"
    result.style.display = "block";
    i++
    Question();
    
}

    else if (quizQuestions[i].correctAnswer!== answer && quizQuestions[i]!=finalQuestion ){
       
        result.innerHTML = "Incorrect"
        result.style.display = "block";
        i++
        Question();
    }

    else if (quizQuestions[i]===finalQuestion){ showScore()}

  
} 


//highscore function

function highscore(){
time =0; 
   

    QuizShow.style.display = "none";
    highScoreContainer.style.display = "block";
    gameover.style.display = "none";
    result.style.display = "none";
    if (inputName.value===""){
        inputName= "Player" 
    }

    


    var currentScore = {
        name : inputName,
        score : score
    };

    var SavedHighscores= JSON.parse(localStorage.getItem("SavedHighscores"))||[];
   SavedHighscores.push(currentScore)


for (var a=0; a<SavedHighscores.length; a++)
{

    var namelist= document.createElement("li");
    var scorelist=document.createElement("li");
    namelist.textContent= SavedHighscores[a].name;
    scorelist.textContent= SavedHighscores[a].score;

    

    highscoreInitials.appendChild(namelist);
    highscorelist.appendChild(scorelist);
}

    
}





//show highscore
function ShowHighscore(){
    
    highscore()

    QuizShow.style.display = "none";
    highScoreContainer.style.display = "block";
    gameover.style.display = "none";
    result.style.display = "none";
    Startpage.style.display="none";
endgame.style.display="block"
}


//replay function





// button working
startButton.addEventListener("click",StartGame);
easybtn.addEventListener("click",levelEasy);
hardbtn.addEventListener("click",levelHard);
submitScore.addEventListener("click", highscore)
highscorebtn.addEventListener("click",ShowHighscore)
PlayAgain.addEventListener("click",)
Clear.addEventListener("click",)