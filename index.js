import {bankAccount} from "./bankAccount.js";

var counter = 0

function createAccount(first, last) {
    let newAccount = new bankAccount(first, last, counter);
    counter += 1;
    return newAccount;
}

var aj = createAccount("Alice", "Java");
var bs = createAccount("Bob", "Script");


var balanceButtonA = document.getElementById("balanceButtonA")
var balanceButtonB = document.getElementById("balanceButtonB")
var depositButtonA = document.getElementById("depositButtonA")
var depositButtonB = document.getElementById("depositButtonB")
var withdrawButtonA = document.getElementById("withdrawButtonA")
var withdrawButtonB = document.getElementById("withdrawButtonB")

balanceButtonA.onclick = function () {
    aj.checkBalance();
}

balanceButtonB.onclick = function () {
    bs.checkBalance();
}

depositButtonA.onclick = function () {
    let amount = window.prompt("How much to deposit?", "0");
    aj.deposit(amount);
}

depositButtonB.onclick = function () {
    let amount = window.prompt("How much to deposit?", "0");
    bs.deposit(amount);
}

withdrawButtonA.onclick = function () {
    let amount = window.prompt("How much to withdraw?", "0");
    aj.withdraw(amount);
}

withdrawButtonB.onclick = function () {
    let amount = window.prompt("How much to withdraw?", "0");
    bs.withdraw(amount);
}
