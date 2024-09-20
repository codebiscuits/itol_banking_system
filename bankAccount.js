export class bankAccount {
    constructor(firstName, lastName, number) {
        this.accountNumber = number;
        this.firstName = firstName;
        this.lastName = lastName;
        this.accountHolder = (firstName + lastName)
        this.balance = 0;
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