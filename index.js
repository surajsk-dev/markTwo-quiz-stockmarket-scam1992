//Stock Market quiz
//chalk
var chalk=require('chalk')
//questions and answers using object
console.log(chalk.green(`This is Stock Market Quiz.
After completion of quiz send your screenshot to update your score here.`))
console.log("---------------------------------------------")
questionOne={
question:chalk.bold.yellow(`What is the Stock Market?
a:The Stock Market is a market where people bet on race horses to gain some money.
b:The Stock Market is a market where people buy products which the merchants have a lot of stock 
c:The Stock Market is a market where people can buy stocks which are shares of companies.\n`),
answer:"c"
}
questionTwo={
question:chalk.bold.yellow(`What do the bear and the bull stand for?
a:The bear means stocks are falling and the bull means stocks are going up.
b:They are signs that the Stock Market is opened and closed.
c:The bear means stocks are rising and the bull means stocks are falling.\n`),
answer:"a"
}
questionThree={
question:chalk.bold.yellow(`Which statement about blue chips stocks is correct?
a:Earnings are used for reinvestment in order to maintain the growing trend of the stocks
b:No dividends
c:The stocks are consistently profitable with a dividend payment\n`),
answer:"c"
}
questionFour={
question:chalk.bold.yellow(`Penny stocks refer to low-priced stock investments. These stocks are usually traded in the stock exchange?
a:True
b:False\n`),
answer:"b"
}
questionFive={
question:chalk.bold.yellow(`Value stocks are usually traded below the market price. They are considered to have low-term potential growth because of the long-term growth of the company associated with the stocks?
a:True
b:False\n`),
answer:"a"
}
//score
score=0;
highScore=[
  {
    name:"suraj",
    score:4
  },
  {
    name:"shiva",
    score:3
  },
  {
    name:"sharath",
    score:3
  },
  {
    name:"jayesh",
    score:2
  }
]
//creating array to store objects
var questionArr=[questionOne,questionTwo,questionThree,questionFour,questionFive]
//taking input
var readLineSync=require("readline-sync");
//function for right or wrong
function play(question,answer){
  questionAnswer=readLineSync.question(question);
  if(questionAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("You are right.");
    score=score+1;
  }else{
    console.log("you are wrong");
  }
  console.log("correct answer is: "+answer);
  console.log("your current score is: "+score);
  console.log("------------------------------------------");
}
//for loop for question
for(i=0;i<questionArr.length;i++){
  current=questionArr[i];
  play(current.question,current.answer);
}
//high score
console.log(chalk.bold.red("High scorers are: "));
for(i=0;i<highScore.length;i++){
  high=highScore[i];
  console.log(high.name,"score is: "+high.score);
  console.log("-------------------------");
}

var highest=[];
for(i in highScore){
  highest.push(highScore[i].score) 
}
if(Math.max(...highest)<score){
   console.log(chalk.bold.green("Congratulations! your score is highest: "+score));
   console.log(chalk.bold.red("Note: update your score by sending screenshot."))
}else{
    console.log(chalk.bold.green("Your Score is: "+score));
    console.log(chalk.bold.red("Note: update your score by sending screenshot."));
  }

// for(i=0;i<highScore.length;i++){
//   high=highScore[i];

//   if(high.score<=score){
//     console.log(high.name)
//     // console.log(chalk.bold.green("Congratulations! your score is highest: "+score));
//     // console.log(chalk.bold.red("Note: update your score by sending screenshot."));
//   }
 
// }

