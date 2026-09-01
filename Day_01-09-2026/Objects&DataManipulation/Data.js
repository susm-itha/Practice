const car = {

    brand: "BMW",
    model: "X5",
    year: 2024,
    color: "Black",

    engine: {
        type: "Petrol",
        power: "335 HP"
    },

    owner: {
        name: "Susmitha",
        city: "Hyderabad"
    },

    features: {
        sunroof: true,
        automatic: true
    }

};

const {
    brand,
    model,
    year,
    color
} = car;

const updatedCar = {
    ...car,
    status: "Available"
};


const {
    brand: carBrand,
    ...otherDetails
} = car;

const carKeys = Object.keys(car);

console.log("Keys:", carKeys);


const carValues = Object.values(car);

console.log("Values:", carValues);

const carEntries = Object.entries(car);

console.log("Entries:", carEntries);

const enginePower = car.engine?.power;

console.log("Engine Power:", enginePower);


const fuel = car.fuel ?? "Petrol";

console.log("Fuel:", fuel);



function showDetails() {

    const details = document.getElementById("details");

    details.innerHTML = `

        <h2>Complete Car Details</h2>

        <div class="detail-row">
            <span>Brand</span>
            <span>${brand}</span>
        </div>

        <div class="detail-row">
            <span>Model</span>
            <span>${model}</span>
        </div>

        <div class="detail-row">
            <span>Year</span>
            <span>${year}</span>
        </div>

        <div class="detail-row">
            <span> Color</span>
            <span>${color}</span>
        </div>

        <div class="detail-row">
            <span>Engine</span>
            <span>${car.engine?.type ?? "Not Available"}</span>
        </div>

        <div class="detail-row">
            <span> Power</span>
            <span>${car.engine?.power ?? "Not Available"}</span>
        </div>

        <div class="detail-row">
            <span> Owner</span>
            <span>${car.owner?.name ?? "Unknown"}</span>
        </div>

        <div class="detail-row">
            <span> City</span>
            <span>${car.owner?.city ?? "Unknown"}</span>
        </div>

        <div class="detail-row">
            <span> Fuel</span>
            <span>${fuel}</span>
        </div>

        <div class="detail-row">
            <span> Sunroof</span>
            <span>${car.features?.sunroof ? "Yes" : "No"}</span>
        </div>

        <div class="detail-row">
            <span>Status</span>
            <span>${updatedCar.status}</span>
        </div>

    `;
}