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
            if(this.data.invintory[i].amount = 5) {
                return this.data.invintory[i].amount + refill;
            }
        } return this.data.invintory
    }

    resupplyChange () {

    }

    itemDispense () {

    }

    returnCoins () {

    }

}

module.exports = vendingMachine;
