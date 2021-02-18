function Account (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
  this.balance = 0;
}

Account.prototype.makeDeposit = function (depositAmount) {
  this.balance +=Math.abs(parseFloat(depositAmount));
  return "You have made a deposit of" + depositAmount + "your new balance is:" + this.balance;
}



// Create BankAccount constructor and prototype that includes methods for deposit and withdrawl and any other properties needed. 
// Create Account constructor that mimics a data base 

