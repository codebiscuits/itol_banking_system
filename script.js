class bankAccount {
    constructor(number, name, initBal) {
        this.accountNumber = number;
        this.accountHolder = name;
        this.balance = initBal;
    }

    checkBalance() {
        return `Account balance for ${this.accountHolder}: ${this.balance}`;
    }

    deposit(amount) {
        this.balance += Number(amount);
        return `Deposit of ${amount} successful!`;
    }

    withdraw(amount) {
        this.balance -= Number(amount);
        return `Withdrawal of ${amount} successful!`;
    }
}

const accounts = new Map()

function createAccount() {
    const holder = document.getElementById("holder").value;
    const initialBalance = parseFloat(document.getElementById("initial-balance").value);
    const accountNumber = Math.floor(Math.random() * 1000000);
    const newAccount = new bankAccount(accountNumber, holder, initialBalance);
    accounts.set(accountNumber, newAccount);
    document.getElementById("holder").value = "";
    document.getElementById("initial-balance").value = "";
    console.log(accounts);
    document.getElementById("display").innerText = `Account created, account number: ${accountNumber}`;
}

function deposit() {
    const accountNumber = parseInt(document.getElementById('account-number').value);
    const amount = parseFloat(document.getElementById("amount").value);
    const account = accounts.get(accountNumber);
    if (account) {
        document.getElementById("display").innerText = account.deposit(amount);
        console.log(accounts);
    } else {
        document.getElementById("display").innerText = "Account not found";
    }
}

function withdraw() {
    const accountNumber = parseInt(document.getElementById('account-number').value);
    const amount = parseFloat(document.getElementById("amount").value);
    const account = accounts.get(accountNumber);
    if (account) {
        if (account.balance >= amount) {
            document.getElementById("display").innerText = account.withdraw(amount);
            console.log(accounts);
        } else {
            document.getElementById("display").innerText = `${account.accountHolder} has insufficient balance`;
        }
    } else {
        document.getElementById("display").innerText = "Account not found";
    }
}

function checkBal() {
    const accountNumber = parseInt(document.getElementById('account-number').value);
    const amount = parseFloat(document.getElementById("amount").value);
    const account = accounts.get(accountNumber);
    if (account) {
        document.getElementById("display").innerText = account.checkBalance();
    } else {
        document.getElementById("display").innerText = "Account not found";
    }
}
