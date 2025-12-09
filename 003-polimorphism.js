class Vehicle {
    constructor(name) {
        this.name = name
    }
    horn() {
        console.log(`${this.name} horn`)
    }
}

class Bus extends Vehicle {
    describe() {
        console.log("i am bus")
    }
    horn() {
        console.log("i am overridning vehicle class -> polymorphsim")
    }
}

const b1 = new Bus("VRL")
b1.horn()
b1.describe()