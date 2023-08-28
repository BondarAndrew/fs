class Account {
    constructor(account_number, initial_balance = 0) {
        this.account_number = account_number;
        this.balance = initial_balance;
        this.transaction_history = [];
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.transaction_history.push(`Deposited: ${amount}`);
            return true;
        } else {
            return false;
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.transaction_history.push(`Withdrawn: ${amount}`);
            return true;
        } else {
            return false;
        }
    }

    getBalance() {
        return this.balance;
    }

    getTransactionHistory() {
        return this.transaction_history;
    }
}


const accountNumber = "123456789";
const initialBalance = 1000;
const { deposit, withdraw, getBalance, getTransactionHistory } = new Account(accountNumber, initialBalance);

function main() {
    while (true) {
        console.log("1. Перевірити баланс");
        console.log("2. Здійснити внесок");
        console.log("3. Здійснити зняття");
        console.log("4. Переглянути історію транзакцій");
        console.log("5. Вийти");

        const choice = prompt("Оберіть дію:");

        switch (choice) {
            case "1":
                console.log(`Поточний баланс: ${getBalance()} грн`);
                break;
            case "2":
                const depositAmount = parseFloat(prompt("Введіть суму внеску:"));
                if (deposit(depositAmount)) {
                    console.log(`Успішно внесено ${depositAmount} грн`);
                } else {
                    console.log("Некоректна сума внеску");
                }
                break;
            case "3":
                const withdrawAmount = parseFloat(prompt("Введіть суму зняття:"));
                if (withdraw(withdrawAmount)) {
                    console.log(`Успішно знято ${withdrawAmount} грн`);
                } else {
                    console.log("Недостатньо коштів на рахунку або некоректна сума зняття");
                }
                break;
            case "4":
                const history = getTransactionHistory();
                console.log("Історія транзакцій:");
                history.forEach(transaction => console.log(transaction));
                break;
            case "5":
                console.log("До зустрічі!");
                return;
            default:
                console.log("Некоректний вибір. Будь ласка, виберіть дію зі списку.");
                break;
        }
    }
}

main();