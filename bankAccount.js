export class bankAccount {
    constructor(firstName, lastName, number) {
        this.accountNumber = number;
        this.firstName = firstName;
        this.lastName = lastName;
        this.accountHolder = (firstName + lastName)
        this.balance = 0;
    }

    checkBalance() {
        console.log("Current balance: ", this.balance);
    }

    deposit(amount) {
        this.balance += amount;
        console.log("Deposit successful!");
    }

    withdraw(amount) {
        if (amount < this.balance) {
            this.balance -= amount;
            console.log("Withdrawal successful!");
        } else {
            console.log("Not enough balance to withdraw " + amount);
        }
    }
}