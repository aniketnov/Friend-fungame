var input = require('readline-sync');
var log = console.log;
var score = 0;

function welcome(){
    if(input.keyInYN(`Hey I am Aniket chhari do you know me`) === true){
    var inputuser = input.question("what is your Name ?")
      log(`Hello ${inputuser} tell me something about me`)
    }
  else{
    process.exit();
  }
};

function fun(question , answer){
  var userInput =input.question(question);
  if(userInput.toUpperCase() === answer.toUpperCase()){
    log("You are right");
    score += 1;
    log(`current score ${score}`);
  }
  else{
    log("You are Wrong");
    score -= 1;
    log(`current score ${score}`);
 
  }
  log("\n")

};
function game() {
  for(var i =0; i < questions.length; i++){
  var currentqns = questions[i];
  fun(currentqns.question , currentqns.answer);
}
}

var highScore = [
  {
    name : "Aman",
    score: 1,
  },
   {
    name : "Rohan",
    score: 0,
  }
  
];

function high() {
log(`your highest score is : ${score}`)
highScore.map(score => log(`${score.name}  ${score.score}`))
}


var questions = [
  {
    question : "What is my favourite vegetable to eat?",
    answer : "lady finger"
  },
    {
    question : "Who was my favourite cartoon character?",
    answer : "Mickey mouse"
  },
  {
    question : "What is my favourite sport?",
    answer : "Hockey"
  },

  {
    question : "Who is my best friend?",
    answer : "Akash"
  },
  {
    question : "who was my best friend in College time?",
    answer : "Akash"
  },


  
];


welcome();
game();
high();

