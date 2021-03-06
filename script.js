
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
var timing;

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
var finalQuestion= quizQuestions[6]
var mySound;


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
    time = 60 ;
    QuizShow.style.display = "block";
    Startpage.style.display = "none";
    levelsPage.style.display= "none";
    Question()
   timing= setInterval (function timer () {
        time--;
    QuizTimer.textContent = "Time:" + time;
    if (time==0){ clearInterval(timer)
         showScore();}
    } ,1000);
    
}

//Hard game function
function levelHard() {
    time = 30; 
    QuizShow.style.display = "block";
    Startpage.style.display = "none";
    levelsPage.style.display= "none";
    Question()   
    timing = setInterval (function timer () {
        time--;
         QuizTimer.textContent = "Time:" + time;
        if (time==0){ clearInterval(timer)
             showScore();}
         } ,1000);
    
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
        mySound=new Audio ("sound1.mp3")
        mySound.play()
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
        time= time-3;
        Question();
    }

    else if (quizQuestions[i]===finalQuestion && quizQuestions[i].correctAnswer=== answer){ 
        score++
        showScore()}

    else if  (quizQuestions[i]===finalQuestion && quizQuestions[i].correctAnswer!== answer)
{showScore()}
  
} 


//highscore function

function highscore(){
time =0; 
   
Startpage.style.display="none";
    QuizShow.style.display = "none";
    highScoreContainer.style.display = "block";
    gameover.style.display = "none";
    result.style.display = "none";
    endgame.style.display= "block"

 
    var savedHighscores= JSON.parse(localStorage.getItem("savedHighscores"))||[];
    inputName = inputName.value.trim();
    var currentScore = {
        name : inputName,
        score : score
    };

   
    savedHighscores.push(currentScore)
   localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));

  


   highscoreInitials.innerHTML= ""
   highscorelist.innerHTML= ""
   var Highscores =JSON.parse(localStorage.getItem("savedHighscores")) || [];


   for (var a=0; a<Highscores.length; a++)
   {
   
       
       var namelist= document.createElement("li");
       var scorelist=document.createElement("li");
       namelist.textContent= Highscores[a].name;
       scorelist.textContent= Highscores[a].score;
   
       
   
       highscoreInitials.appendChild(namelist);
       highscorelist.appendChild(scorelist);
   }
}


//replay function
function replay(){
score =0
i=0
time=0;
clearInterval(timing)


QuizShow.style.display = "none";
    highScoreContainer.style.display = "none";
    gameover.style.display = "none";
    result.style.display = "none";
    Startpage.style.display="flex";
endgame.style.display="none"

}

//clear 
function clear() {
    window.localStorage.clear();
    highscoreInitials.textContent = "";
    highscorelist.textContent = "";
}


// button working
startButton.addEventListener("click",StartGame);
easybtn.addEventListener("click",levelEasy);
hardbtn.addEventListener("click",levelHard);
submitScore.addEventListener("click", highscore)
highscorebtn.addEventListener("click",highscore)
PlayAgain.addEventListener("click",replay)
Clear.addEventListener("click",clear)
