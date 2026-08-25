// Car Object
const car = {
  brand: "BMW",
  model: "X5",
  year: 2024,
  color: "Black",
  price: 7500000,

  // Object Method
  start() {
    return "Car Started";
  },

  owner: {
    name: "Susmitha"
  }
};


// 1. Object Destructuring
const { brand, model, year } = car;


// 2. Spread Operator
const newCar = {
  ...car,
  fuel: "Petrol"
};


// 3. Object.assign()
const carDetails = {
  status: "Available"
};

Object.assign(newCar, carDetails);


// 4. Rest Operator
const { price, ...basicDetails } = car;


// Car Information
function showCarInfo() {

  // Optional Chaining
  const ownerName = car.owner?.name;

  // Nullish Coalescing
  const fuel = car.fuel ?? "Not Available";

  document.getElementById("output").innerHTML = `
    <h2>Car Information</h2>

    <p><b>Brand:</b> ${brand}</p>
    <p><b>Model:</b> ${model}</p>
    <p><b>Year:</b> ${year}</p>
    <p><b>Color:</b> ${car.color}</p>
    <p><b>Price:</b> ₹${price}</p>
    <p><b>Owner:</b> ${ownerName}</p>
    <p><b>Fuel:</b> ${fuel}</p>

    <h3>${car.start()}</h3>
  `;
}


// Object.keys()
function showKeys() {

  const keys = Object.keys(car);

  document.getElementById("output").innerHTML = `
    <h2>Car Keys</h2>
    <p>${keys.join(", ")}</p>
  `;
}


// Object.values()
function showValues() {

  const values = Object.values(car);

  document.getElementById("output").innerHTML = `
    <h2>Car Values</h2>
    <p>${values.slice(0, 5).join(", ")}</p>
  `;
}


// Object.entries()
function showEntries() {

  const entries = Object.entries(car);

  let result = "";

  entries.slice(0, 5).forEach(([key, value]) => {
    result += `<p><b>${key}:</b> ${value}</p>`;
  });

  document.getElementById("output").innerHTML = `
    <h2>Car Details</h2>
    ${result}
  `;
}