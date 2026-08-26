class Car {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }

    start() {
        console.log(this.brand + " car");
    }

    showDetails() {
        console.log("Brand: " + this.brand);
        console.log("Color: " + this.color);
    }
}
class ElectricCar extends Car {
    constructor(brand, color, battery) {
        super(brand, color);
        this.battery = battery;
    }

    charge() {
        console.log(this.brand + " is charging");
    }

    showBattery() {
        console.log("Battery: " + this.battery + "%");
    }
}
const car1 = new Car("BMW", "Black");

const car2 = new ElectricCar("Tesla", "White", 80);
car1.start();
car1.showDetails();

console.log("--");

car2.start();
car2.showDetails();
car2.charge();
car2.showBattery();