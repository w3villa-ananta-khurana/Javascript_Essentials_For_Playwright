//Encapsulation is bundling data and the methods that operate on that data together, 
// while restricting direct access to the internal data.

//In simple terms : Keep the important data inside the box and control how the outside world can access it.

//without encapsulation
// const account = {
//     balance: 10000
// };

// account.balance = 9999999;
// console.log(account.balance);

//with encapsulation, we cannot perform the above instruction
//JavaScript allows us to make a property private using #.
//The outside world can't directly touch #balance

class BankAccount {

    #balance = 10000;

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();
account.deposit(500);
console.log(account.getBalance()); 


// Notes : 
// BankAccount → a class
// #balance → a private field/property
// 10000 → its initial value
// deposit() → a method that changes the balance
// getBalance() → a method that reads the balance
// this.#balance → the #balance belonging to the current object