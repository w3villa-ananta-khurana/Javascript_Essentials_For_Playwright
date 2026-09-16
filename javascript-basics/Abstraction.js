//Abstraction means: Hide unnecessary implementation details and expose only what the user needs.

class Payment{
    pay(amount){
        this.validateCard();
        this.connectToBank();
        this.checkBalance();
        this.processPayment();
        this.generateReceipt();

        console.log("Payment Sucessfull");
    }

    validateCard() {
        //card validation logic
    }

    connectToBank() {
        //connect to bank logic
    }

    checkBalance() {
        //check balance logic
    }

    processPayment() {
         //process payment logic
    }

    generateReceipt() {
        //generate script logic
    }
}

const payment = new Payment();
payment.pay(50000);