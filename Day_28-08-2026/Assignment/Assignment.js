const car = {
    id: 101,
    brand: "BMW",
    model: "X5",
    year: 2024,
    speed: 120,
    features: ["AC", "GPS", "Sunroof"]
};

// Object Destructuring
const { brand, model, speed } = car;

//FUNCTIONS

function showCarDetails() {
    return `
        <h2>Car Information</h2>
        <p>Brand: ${brand}</p>
        <p>Model: ${model}</p>
        <p>Speed: ${speed} km/h</p>
        <p>Year: ${car.year}</p>
    `;
}

//HIGHER ORDER FUNCTION

function processFeatures(features, callback) {
    return features.map(callback);
}

const upperFeatures = processFeatures(
    car.features,
    feature => feature.toUpperCase()
);

//CLASS AND INHERITANCE

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    start() {
        return `${this.brand} ${this.model} is starting...`;
    }
}

class ElectricCar extends Car {
    constructor(brand, model, battery) {
        super(brand, model);
        this.battery = battery;
    }

    batteryStatus() {
        return `Battery: ${this.battery}%`;
    }
}

const myCar = new ElectricCar("Tesla", "Model 3", 85);

//PROMISE

function checkCarEngine() {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Engine check completed");
        }, 2000);

    });
}

//ASYNC / AWAIT

async function serviceCar() {

    document.getElementById("output").innerHTML =
        "<h2>Checking car service...</h2>";

    const result = await checkCarEngine();

    document.getElementById("output").innerHTML =
        `<h2>${result}</h2>`;
}

// EVENT LOOP

function startCar() {

    console.log("1. Start button clicked");

    setTimeout(() => {
        console.log("3. setTimeout executed");
        document.getElementById("output").innerHTML +=
            "<p>Car started after 2 seconds 🚗</p>";
    }, 2000);

    console.log("2. Normal code executed");
}

// 8. MODERN ES6+ FEATURES

// Arrow Function
const getCarName = () => `${car.brand} ${car.model}`;

// Spread Operator
const updatedCar = {
    ...car,
    color: "Black"
};

// Template Literal
const message = `My car is ${getCarName()}`;

// BUTTON EVENTS

document.getElementById("showCar").addEventListener("click", () => {

    document.getElementById("output").innerHTML = `
        ${showCarDetails()}

        <h3>Features</h3>
        <p>${upperFeatures.join(", ")}</p>

        <h3>Electric Car</h3>
        <p>${myCar.start()}</p>
        <p>${myCar.batteryStatus()}</p>

        <p>${message}</p>
        <p>Color: ${updatedCar.color}</p>
    `;
});


document.getElementById("startCar").addEventListener("click", startCar);


document.getElementById("serviceCar").addEventListener("click", serviceCar);