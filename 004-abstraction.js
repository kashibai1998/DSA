class Vehicle {
    constructor(name) {
        if (this.constructor === Vehicle)
        throw new Error("Abstarct cannot be instsntiated")
        this.name = name
    }
    horn() {
        throw new Error("Abstarct cannot be instsntiated")
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

const v1 = new Vehicle("VRL")
const b1 = new Bus("VRL")
b1.horn()
b1.describe()