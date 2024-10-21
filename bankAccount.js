export class bankAccount {
    constructor(number, name, initBal) {
        this.accountNumber = number;
        this.accountHolder = name;
        this.balance = initBal;
    }

    checkBalance() {
        console.log("Current balance for", this.firstName, this.lastName, ":", this.balance);
    }

    deposit(amount) {
        this.balance += Number(amount);
        console.log("Deposit of", amount, "successful!");
    }

    withdraw(amount) {
        if (amount < this.balance) {
            this.balance -= Number(amount);
            console.log("Withdrawal of", amount, "successful!");
        } else {
            console.log("Not enough balance to withdraw " + amount);
        }
    }
}