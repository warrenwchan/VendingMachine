const processData = require('./../__mock__/process-data');

class vendingMachine {
    constructor(data) {
        this.data = processData(data);
        // console.log(this.data)
    }

    printInvintory () {
        return this.data.invintory;
    }

    refillInvintory () {
        const refill = 30;
        for( var i = 0; i < this.data.invintory.length; i++ ) {
            if(this.data.invintory[i].amount <= 5) {
                var resupplyItems = refill - this.data.invintory[i].amount;
                return this.data.invintory[i].amount + resupplyItems;
            }
        }
    }

    resupplyChange () {
        const resupplied = 100;
        for( var i = 0; i < this.data.coins.length; i++ ) {
            if(this.data.coins[i].amount <= 25) {
                var resupplyAmount = resupplied - this.data.coins[i].amount;
                // console.log(resupplyAmount);
                return this.data.coins[i].amount + resupplyAmount;
            }
        }
    }

    itemDispense (balance) {
        if(balance) {
            // console.log('this is the balance entered', balance)
            for( var i = 0; i < this.data.invintory.length; i++) {
                if( balance === this.data.invintory[i].cost) {
                    return this.data.invintory[i].name;
                }
            }
        } return false;
    }

    returnCoins (balance) {
        if( balance > this.data.invintory[1].cost) {
            let change = balance - this.data.invintory[1].cost;
            const coinsReverse = this.data.coins.reverse()
            // console.log(change)

            for( var i = 0; i < this.data.coins.length; i++ ) {
                // console.log(change)
                if( change % this.data.coins[i].value === 0 ) {
                    return this.data.coins[i].type;
                }
            }
        }
    }
}

module.exports = vendingMachine;
