var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name:"Vishambar",
    score:3,
  },

  {
    name:"Vivek",
    score:1,
  },

  {
    name:"Prasad",
    score:2,
  },
]
var userName = readlineSync.question("What's your Name : ");
console.log("Welcome "+ userName + " How Much DO You Know Suresh? ");

// function play
function play(question , answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Right ");
    score++;
  }
  else{
    console.log("Wrong ");
    score--;
  }
  
  console.log("Current Score : "+score);
  console.log("------------------------");
}

function showHighScore(){
  
  console.log("check out Who Got High Score , if you should be there ping me and I'll update it");
  
  for(var i=0; i<highScores.length; i++){
    console.log(highScores[i].name + " : " + highScores[i].score);
  }
  
}


// Array of Questions
var questions = [
  {
    question:"Where Do I Live? ",
    answer:"Pune",
  },

  {
    question:"My Favorite Video Game? ",
    answer:"GTA5",
  },

  {
    question:"My Favorite Superhero? ",
    answer:"Spiderman",
  },

]

// calling play function
for(var i = 0; i<questions.length; i++){
  play(questions[i].question , questions[i].answer);
}

// Printing Final Score
if(score > 0){
  console.log("YAY! You Scored : " + score);
}
else{
  console.log("OOps Better Luck Next Time ! You Scored : " + score);
}

showHighScore();
