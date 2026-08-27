const car = {
    brand: "BMW",
    model: "X5",
    speed: 80,
    fuel: 60
};


// setTimeout()
function checkEngine() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Engine checked");
        }, 2000);
    });
}


// Promise
function checkFuel() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Fuel checked: " + car.fuel + "%");
        }, 1000);
    });
}


// Async/Await
async function startDashboard() {

    const output = document.getElementById("output");

    console.log("Start Dashboard");

    output.innerHTML = "Starting car";

    console.log("Checking engine");

    const engine = await checkEngine();

    console.log("" + engine);

    output.innerHTML += "<br>" + engine;

    console.log("Checking fuel...");

    const fuel = await checkFuel();

    console.log("" + fuel);

    output.innerHTML += "<br>" + fuel;

    console.log("Car Details");

    output.innerHTML += `
        <br><br>
        Brand: ${car.brand}
        <br>
        Model: ${car.model}
        <br>
        Speed: ${car.speed} km/h
    `;

    console.log("Dashboard Completed");
}