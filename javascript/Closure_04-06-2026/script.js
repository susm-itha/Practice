//counter using closure
function createCounter() {
    let count = 0
    return function () {
        count++;
        console.log("Count:", count)
    }
}
const counter = createCounter()
counter()
counter()
counter()

//data privacy closure
function bankAccount() {
    let balance = 5000
    return {
        deposit: function(amount) {
            balance += amount
            console.log("Balance:", balance)
        },
        withdraw: function(amount) {
            balance -= amount
            console.log("Balance:", balance)
        }
    }
}
const account = bankAccount()
account.deposit(1000)
account.withdraw(2000)

//Closure with setTimeout
function delayedMessage(name) {
    setTimeout(function () {
    console.log("Hello " + name)
    }, 2000);
}
delayedMessage("Susmitha")