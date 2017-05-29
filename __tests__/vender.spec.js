const vendingMachine = require('./../src/vending-machine');

describe('vendingMachine', () => {
    let test;


    beforeEach(() => {
        test = {};

        test.processData = {

            coins: [
                {
                    type: 'dime',
                    value: 0.10,
                    amount: 100
                },
                {
                    type: 'quarter',
                    value: 0.25,
                    amount: 50
                },
                {
                    type: 'loonlie',
                    value: 1.00,
                    amount: 1
                },
                {
                    type: 'toonie',
                    value: 2.00,
                    amount: 10
                },
            ],

            invintory: [
                {
                    type: 'candy',
                    value: 1.00,
                    amount: 5
                },
                {
                    name : 'chips',
                    cost: 1.00,
                    amount: 20
                },
                {
                    type: 'cookies',
                    value: 1.50,
                    amount: 5
                },
                {
                    type: 'pop',
                    value: 2.00,
                    amount: 20
                }
            ]
        }

        test.machine = new vendingMachine(test.processData);
    })

    describe('When printing vending machine items', () => {
        it('Should return listed items in vending machine', () => {
            expect(test.machine.printInvintory()).toMatchObject(test.processData.invintory);
        })
    })

    describe('When invintory is low at 5 items', () => {
        it('Should return invintory refilled to 20 items', () => {
            expect(test.machine.refillInvintory()).toBe(20)
        })
    })

    describe('When coins are low 25 coins', () => {
        it('Should re-supply coins amount to 100', () => {
            expect(test.machine.resupplyChange()).toBe(100)
        })
    })
});
