const processData = require('./../__mock__/process-data');

class vendingMachine {
    constructor(data) {
        this.data = processData(data);
        console.log(this.data)
    }

    printInvintory () {
        return this.data.invintory;
    }

    refillInvintory () {
        const refill = 15;
        for(var i = 0; i < this.data.invintory.length; i++ ) {
            if(this.data.invintory[i].amount <= 5) {
                return this.data.invintory[i].amount + refill;
            }
        }
    }

    resupplyChange () {
        const resupplied = 100;
        for(var i = 0; i < this.data.coins.length; i++ ) {
            if(this.data.coins[i].amount <= 25) {
                var resupplyAmount = resupplied - this.data.coins[i].amount;
                console.log(resupplyAmount);
                return this.data.coins[i].amount + resupplyAmount;
            }
        }
    }

    itemDispense () {

    }

    returnCoins () {

    }

}

module.exports = vendingMachine;
