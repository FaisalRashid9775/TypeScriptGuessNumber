import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from 'chalk-animation'

const timer = ()=>{
  return new Promise ((res,rej)=>{
    setTimeout(res,2000)
  })
}
async function welcome() {
  let welcomeMessage=chalkanimation.rainbow(`Welcome to my Game`)
  await timer()
  welcomeMessage.stop()
  
}


async function Game() {
 
 let playerlife=10
 do {
  var computerChoice=Math.floor(Math.random()*10+1) 
   playerlife--
   var userchoice= await inquirer.prompt([{
    name:'number',
    type: 'input',
    message:'Enter a number betweeen 1 to 10'
   }])
   console.log(computerChoice)
   console.log(userchoice.number)
   if(userchoice.number==computerChoice){
    console.log('Match')
   }
   else{
    console.log('Not Matched')
   }
 }while(playerlife>0 && userchoice.number !==computerChoice )
  if(playerlife===0){
    console.log(`Game over`)
  }
}
await welcome()
async function restart() {
  do {
    console.clear()
    
    
    await Game()
    var restart = await inquirer.prompt([{
        type : "input",
        name : 'restart_game',
        message : 'Do you want to retart the game if yes then enter y'
    }])
}
while (restart.restart_game==='y' || restart.restart_game==='Y' || restart.restart_game==='yes' || restart.restart_game==='YES')

}
  
await restart()