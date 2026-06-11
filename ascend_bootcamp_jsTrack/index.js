///let, const, var----
let x = 5

//data types ---strings(a, b, everything),boolean(true, false), null(), number(1,2,3)  and symbol(#)
//

//Operators------( arithmetic, comparison and logical)
//
//
//Function=> 
letsDo (){
const content = "we are not alone";
}

//if, if else, switch, truth or false
// loops-- for loop, whileloop, do....while loops
// break and continue
//


//while loop example
let myBalance = 1000;

while(true) {
let input = prompt("Enter amount to withdraw or type exit to quit");

  //exit---break 
  if (input === "exit") {
console.log("Session terminated");
    break;
  } 

  let amount = Number(input);
  if (isNaN(amount) || amount <= 0){
  console.log("invalid amount.try again");
    continue;
  }

  if (amount > myBalance) {
console.log("insufficient balance");
    continue;
  }

  //successful transcation
  balance -=amount
  console.log("Withdrawal successful. Remaining balance: ${myBalance}");
}


