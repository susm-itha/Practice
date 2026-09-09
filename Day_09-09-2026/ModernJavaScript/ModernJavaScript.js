const car = {
    brand: "Toyota",
    model: "Fortuner",
    year: 2024,
    price: 3500000,
    owner: {
        name: "Susmitha",
        city: "Hyderabad"
    }
};

//Destructuring
const { brand, model, year } = car;

console.log("Brand:", brand);
console.log("Model:", model);
console.log("Year:", year);


//Spread Operator
// Create a new car object by copying the old object
const newCar = {
    ...car,
    color: "Black"
};

console.log("New Car:", newCar);


//Rest Operator
// Get brand separately and remaining properties in otherDetails
const { brand: carBrand, ...otherDetails } = car;

console.log("Brand:", carBrand);
console.log("Other Details:", otherDetails);


//Optional Chaining
// Safely access a property
console.log("Owner City:", car.owner?.city);
console.log("Owner Phone:", car.owner?.phone);


//Nullish Coalescing
// If value is null or undefined, use default value
const color = car.color ?? "White";
const fuel = car.fuelType ?? "Petrol";

console.log("Color:", color);
console.log("Fuel:", fuel);


// Display in webpage
document.getElementById("output").innerHTML = `
    <p><b>Brand:</b> ${brand}</p>
    <p><b>Model:</b> ${model}</p>
    <p><b>Year:</b> ${year}</p>
    <p><b>Price:</b> ₹${car.price}</p>
    <p><b>Owner:</b> ${car.owner?.name}</p>
    <p><b>City:</b> ${car.owner?.city}</p>
    <p><b>Color:</b> ${color}</p>
    <p><b>Fuel:</b> ${fuel}</p>
`;