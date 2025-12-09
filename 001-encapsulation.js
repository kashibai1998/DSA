class Bank {
    #balance
    constructor(balance) {
        this.#balance = balance
    }

    getBalance() {
        return this.#balance
    }

    setBalance(balance) {
        this.#balance = balance
    }
}

const b1 = new Bank(100)
console.log("Get bal", b1.getBalance())
b1.setBalance(200)
console.log("after setting", b1.getBalance())
