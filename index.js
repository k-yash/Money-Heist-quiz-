const chalk = require('chalk');
var readlineSync = require("readline-sync");
var score = 0;
function questionsans(question,options,answer){
  console.log(chalk.red(question));
  userAns = readlineSync.keyInSelect(options,chalk.green.bold("correct option?"),{cancel: false});
  if(userAns+1 === answer){
    console.log(chalk.blue.bgYellowBright.bold("You are right! "));
    score+=1;
  }else{
     console.log(chalk.yellowBright.bgRedBright.bold("You are wrong! "));
     console.log(chalk.bgYellowBright.bold("Correct answer is: "+ answer+" "));
     score-=1;
  }
}
var highScores = [
  {
    score:6,
    name: "Yash",
  },
  {
    score:5,
    name: "Jack"
  },
  {
    score:4,
    name:"Krate"
  },
  {
    score:3,
    name:"Norm"
  },
  {
    score:2,
    name:"Klaus"
  }
]
var questions = [
  {
    ques: "Ques1. How much currency does the gang print at the Royal Mint? ", 
    options:["879 million euros","926 million euros","984 million euros"],
    ans:3
  },
  {
    ques:"Ques2. Inspector Raquel’s mother suffers from what medical condition? ",
    options : ["Alzheimer’s Disease","Paranoid Schizophrenia","Post-Traumatic Stress Disorder"],
    ans:1
  }
  ,
  
  {
    ques:"Ques3. The Professor’s first name is eventually revealed. What is it?" ,
    options : ["Andres","Anibal","Sergio"],
    ans:3,
  }
  ,
  {
    ques:"Ques4. The Professor invented the plan to rob the Royal Mint.",
    options : ["True","False"],
    ans:2
  }
  ,
  {
    ques:"Ques5. Before giving up on society and turning to a life of crime, what was Moscow’s occupation?",
    options : ["Hacker","Miner","Soldier"],
    ans:2
  }
  ,
  {
    ques:"Ques6. At the end of Part 2, in which country does Raquel track down The Professor?",
    options : ["Barbados","Philippines","Thailand"],
    ans:2
  }

]
userName = readlineSync.question(chalk.cyanBright("Enter your name?\n"));
console.log(chalk.bgCyanBright.bold.rgb(244, 21, 173)("Hello! "+userName+" WELCOME to MONEY HEIST Quiz\n"));
console.log(chalk.bgMagenta.rgb(238, 255, 0).bold("RULES:-"));
console.log(chalk.bgRed.bold.italic("1.There are 6 questions."));
console.log(chalk.bgRed.bold.italic("2.Each correct answer will give you 1 point."));
console.log(chalk.bgRed.bold.italic("3.And each wrong answer will also deduct 1 point.\n"));
console.log(chalk.bgRed.bold.italic("Enjoy the Quiz "+userName+"!\n"));

for(var i=0;i<questions.length;i++){
  questionsans(questions[i].ques,questions[i].options,questions[i].ans);

}
console.log(chalk.black.bgWhite.bold("Your Final Score is : "+ score));
// console.log("Updating high scores")
if(score>=3){
console.log(chalk.bgMagentaBright.bold.italic("Congratulations you beated a high score!!"));}
console.log(chalk.blue.bold("Displaying Leader Board :"));
for(var i=0;i<highScores.length;i++){
  if(score === highScores[i].score){
    
    console.log(chalk.red.bold(userName)+" - "+chalk.red.bold(score));
  }
  console.log(chalk.cyan.bold(highScores[i].name)+" - "+ chalk. rgb(237, 101, 29).bold(highScores[i].score));

}