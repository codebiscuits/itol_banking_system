import {bankAccount} from "./bankAccount.js";

var counter = 0

function createAccount(first, last) {
    let newAccount = new bankAccount(first, last, counter);
    counter += 1;
    return newAccount;
}

var aj = createAccount("Alice", "Java");
var bs = createAccount("Bob", "Script");

function balanceButton() {
    aj.checkBalance();
}

function depositButton() {
    let amount = window.prompt("How much to deposit?", "0");
    aj.deposit(amount);
}

function withdrawButton() {
    let amount = window.prompt("How much to withdraw?", "0");
    aj.withdraw(amount);
}
