
//while loop example----atm
let myBalance = 1000;

while(true) {
let input = prompt("Enter amount to withdraw or type exit to quit:", "");

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


