const cars = [
    {
        id: 101,
        name: "Toyota",
        type: "Petrol",
        price: 800000
    },
    {
        id: 102,
        name: "Tata Nexon",
        type: "Electric",
        price: 1200000
    },
    {
        id: 103,
        name: "Hyundai",
        type: "Petrol",
        price: 950000
    },
    {
        id: 104,
        name: "MG ZS",
        type: "Electric",
        price: 1500000
    },
    {
        id: 105,
        name: "Honda",
        type: "Petrol",
        price: 1100000
    }
];

const output = document.getElementById("output");


//Accessing Array Elements
console.log(cars[0]);
console.log(cars[0].name);


//map()
// Display car names
function showCars() {

    const carNames = cars.map(car => car.name);

    output.innerHTML = `
        <h2>All Cars</h2>
        <p>${carNames.join("  ")}</p>
    `;
}


//filter()
// Find electric cars
function showElectric() {

    const electricCars = cars.filter(car => car.type === "Electric");

    output.innerHTML = "<h2>Electric Cars</h2>";

    electricCars.forEach(car => {
        output.innerHTML += `
            <p>${car.name} - ₹${car.price}</p>
        `;
    });
}


//filter()
// Cars above 10 lakhs
function showExpensive() {

    const expensiveCars = cars.filter(car => car.price > 1000000);

    output.innerHTML = "<h2>Cars Above ₹10 Lakhs</h2>";

    expensiveCars.forEach(car => {
        output.innerHTML += `
            <p>${car.name} - ₹${car.price}</p>
        `;
    });
}


//reduce()
// Calculate total price
function dashboard() {

    const totalPrice = cars.reduce(
        (total, car) => total + car.price,
        0
    );

    //some()
    const hasElectric = cars.some(
        car => car.type === "Electric"
    );

    //every()
    const allCarsValid = cars.every(
        car => car.price > 0
    );

    output.innerHTML = `
        <h2>Car Statistics</h2>

        <p>Total Cars: ${cars.length}</p>

        <p>Total Car Value: ₹${totalPrice}</p>

        <p>Electric Car Available: ${hasElectric}</p>

        <p>All Cars Have Valid Price: ${allCarsValid}</p>
    `;
}


// find()
// Find one car
function showCar() {

    const car = cars.find(
        car => car.id === 103
    );

    output.innerHTML = `
        <h2> Car Found</h2>
        <p>ID: ${car.id}</p>
        <p>Name: ${car.name}</p>
        <p>Type: ${car.type}</p>
        <p>Price: ₹${car.price}</p>
    `;
}


//findIndex()
// Find car position
const index = cars.findIndex(
    car => car.id === 104
);

console.log("MG ZS Index:", index);


// sort()
// Sort cars by price
function sortCars() {

    const sortedCars = [...cars].sort(
        (a, b) => a.price - b.price
    );

    output.innerHTML = "<h2>📈 Cars Sorted by Price</h2>";

    sortedCars.forEach(car => {
        output.innerHTML += `
            <p>${car.name} - ₹${car.price}</p>
        `;
    });
}


//Remove Duplicate Elements
const carTypes = [
    "Petrol",
    "Electric",
    "Petrol",
    "Diesel",
    "Electric"
];

const uniqueTypes = [...new Set(carTypes)];

console.log("Unique Types:", uniqueTypes);