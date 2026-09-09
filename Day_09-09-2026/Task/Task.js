const cars = [
    {
        id: 1,
        brand: "Toyota",
        model: "Camry",
        price: 28000,
        fuel: "Petrol",
        year: 2023,
        available: true,
        owner: {
            name: "Rahul",
            city: "Hyderabad"
        }
    },

    {
        id: 2,
        brand: "Honda",
        model: "City",
        price: 18000,
        fuel: "Petrol",
        year: 2022,
        available: true,
        owner: {
            name: "Priya",
            city: "Bangalore"
        }
    },

    {
        id: 3,
        brand: "Tesla",
        model: "Model 3",
        price: 40000,
        fuel: "Electric",
        year: 2024,
        available: false,
        owner: {
            name: "Arjun",
            city: "Chennai"
        }
    },

    {
        id: 4,
        brand: "BMW",
        model: "X3",
        price: 55000,
        fuel: "Diesel",
        year: 2023,
        available: true,
        owner: {
            name: "Sneha",
            city: "Hyderabad"
        }
    }
];


// -----------------------------
// Object Destructuring
// -----------------------------

const { brand, model, price } = cars[0];

console.log(brand, model, price);


// -----------------------------
// Spread Operator
// -----------------------------

const newCar = {
    ...cars[0],
    price: 30000
};

console.log(newCar);


// -----------------------------
// Rest Operator
// -----------------------------

function carDetails(brand, model, ...details) {
    console.log(brand, model);
    console.log(details);
}

carDetails("Toyota", "Camry", 28000, "Petrol", 2023);


// -----------------------------
// Optional Chaining
// -----------------------------

console.log(cars[0].owner?.city);


// -----------------------------
// Nullish Coalescing
// -----------------------------

const phone = cars[0].owner?.phone ?? "Not Available";

console.log(phone);


// -----------------------------
// Display Dashboard
// -----------------------------

function updateDashboard(carArray) {

    // map()
    const carNames = carArray.map(car =>
        `${car.brand} ${car.model}`
    );

    console.log("Car Names:", carNames);


    // filter()
    const available = carArray.filter(car =>
        car.available
    );


    // reduce()
    const totalPrice = carArray.reduce(
        (total, car) => total + car.price,
        0
    );


    document.getElementById("totalCars").textContent =
        carArray.length;

    document.getElementById("availableCars").textContent =
        available.length;

    document.getElementById("totalValue").textContent =
        "$" + totalPrice.toLocaleString();


    // Display cards
    document.getElementById("carList").innerHTML =
        carArray.map(car => {

            // Destructuring
            const {
                brand,
                model,
                price,
                fuel,
                year,
                available,
                owner
            } = car;

            return `
                <div class="car-card">

                    <div class="car-icon">🚘</div>

                    <h3>${brand} ${model}</h3>

                    <p>📅 Year: ${year}</p>

                    <p>⛽ Fuel: ${fuel}</p>

                    <p>👤 Owner: ${owner?.name ?? "Unknown"}</p>

                    <p>📍 City: ${owner?.city ?? "Unknown"}</p>

                    <p class="price">
                        $${price.toLocaleString()}
                    </p>

                    <p class="${
                        available
                        ? "available"
                        : "unavailable"
                    }">

                        ${
                            available
                            ? "● Available"
                            : "● Not Available"
                        }

                    </p>

                    <button onclick="viewCar(${car.id})">
                        View Details
                    </button>

                </div>
            `;

        }).join("");
}


// -----------------------------
// Search
// -----------------------------

document.getElementById("search")
    .addEventListener("input", function () {

        const searchText = this.value.toLowerCase();

        const result = cars.filter(car =>
            car.brand.toLowerCase().includes(searchText) ||
            car.model.toLowerCase().includes(searchText)
        );

        updateDashboard(result);
    });


// -----------------------------
// Fuel Filter
// -----------------------------

document.getElementById("fuelFilter")
    .addEventListener("change", function () {

        const fuel = this.value;

        if (fuel === "all") {
            updateDashboard(cars);
            return;
        }

        const result = cars.filter(car =>
            car.fuel === fuel
        );

        updateDashboard(result);
    });


// -----------------------------
// Find Car
// -----------------------------

function viewCar(id) {

    const car = cars.find(car => car.id === id);

    alert(`
Car Details

Brand: ${car.brand}
Model: ${car.model}
Price: $${car.price}
Fuel: ${car.fuel}
Year: ${car.year}
Owner: ${car.owner?.name ?? "Unknown"}
City: ${car.owner?.city ?? "Unknown"}
Status: ${car.available ? "Available" : "Not Available"}
    `);
}


// -----------------------------
// Object Methods
// -----------------------------

console.log("Keys:", Object.keys(cars[0]));

console.log("Values:", Object.values(cars[0]));

console.log("Entries:", Object.entries(cars[0]));


// -----------------------------
// some()
// -----------------------------

console.log(
    "Electric car:",
    cars.some(car => car.fuel === "Electric")
);


// -----------------------------
// every()
// -----------------------------

console.log(
    "All cars after 2020:",
    cars.every(car => car.year > 2020)
);


// -----------------------------
// findIndex()
// -----------------------------

console.log(
    "BMW index:",
    cars.findIndex(car => car.brand === "BMW")
);


// -----------------------------
// sort()
// -----------------------------

const sortedCars = [...cars].sort(
    (a, b) => a.price - b.price
);

console.log("Sorted cars:", sortedCars);


// Start App
updateDashboard(cars);