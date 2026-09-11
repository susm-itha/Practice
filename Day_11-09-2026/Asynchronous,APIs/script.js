import {
    Painting,
    paintingGenerator,
    paintingIterator
} from "./Painting.js";


const API_URL = "https://jsonplaceholder.typicode.com/posts";


// DOM Elements
const paintingContainer =
    document.getElementById("paintingContainer");

const loading =
    document.getElementById("loading");

const error =
    document.getElementById("error");

const totalPaintings =
    document.getElementById("totalPaintings");

const availablePaintings =
    document.getElementById("availablePaintings");

const averagePrice =
    document.getElementById("averagePrice");

const addBtn =
    document.getElementById("addBtn");

const promiseBtn =
    document.getElementById("promiseBtn");

const callbackBtn =
    document.getElementById("callbackBtn");

const generatorBtn =
    document.getElementById("generatorBtn");

const result =
    document.getElementById("result");


// Store paintings
let paintings = [];


// ==========================================
// GET REQUEST
// ==========================================

async function getPaintings() {

    try {

        loading.textContent = "Loading paintings...";
        error.textContent = "";

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch paintings");
        }

        const data = await response.json();

        // Convert API data into painting objects
        paintings = data.slice(0, 8).map((item, index) => {

            return new Painting(
                item.id,
                "Painting " + item.id,
                "Artist " + (index + 1),
                (index + 1) * 5000
            );

        });

        displayPaintings();

    } catch (err) {

        error.textContent = err.message;

    } finally {

        loading.textContent = "";

    }
}


// ==========================================
// DISPLAY PAINTINGS
// ==========================================

function displayPaintings() {

    paintingContainer.innerHTML = "";

    paintings.forEach((painting) => {

        const card =
            document.createElement("div");

        card.className = "painting-card";

        card.innerHTML = `
            <h3>🎨 ${painting.name}</h3>

            <p>
                <strong>Artist:</strong>
                ${painting.artist}
            </p>

            <p>
                <strong>Price:</strong>
                ₹${painting.price}
            </p>

            <p>
                <strong>Status:</strong>
                ${painting.available ? "Available" : "Sold"}
            </p>

            <button
                class="update"
                onclick="updatePainting(${painting.id})">
                PUT
            </button>

            <button
                class="patch"
                onclick="patchPainting(${painting.id})">
                PATCH Price
            </button>

            <button
                class="delete"
                onclick="deletePainting(${painting.id})">
                DELETE
            </button>
        `;

        paintingContainer.appendChild(card);

    });

    updateDashboard();

}


// ==========================================
// DASHBOARD STATISTICS
// ==========================================

function updateDashboard() {

    totalPaintings.textContent =
        paintings.length;

    availablePaintings.textContent =
        paintings.filter(
            painting => painting.available
        ).length;

    if (paintings.length > 0) {

        const total =
            paintings.reduce(
                (sum, painting) =>
                    sum + painting.price,
                0
            );

        const average =
            total / paintings.length;

        averagePrice.textContent =
            "₹" + Math.round(average);

    }

}


// ==========================================
// POST REQUEST
// ==========================================

async function addPainting() {

    const name =
        document.getElementById("paintingTitle").value;

    const artist =
        document.getElementById("artistName").value;

    const price =
        Number(
            document.getElementById("paintingPrice").value
        );


    if (!name || !artist || !price) {

        alert("Please enter all details");

        return;
    }


    try {

        loading.textContent = "Adding painting...";


        const newPainting = {

            title: name,

            body: artist,

            price: price

        };


        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(newPainting)

        });


        if (!response.ok) {

            throw new Error(
                "Unable to add painting"
            );

        }


        const data =
            await response.json();


        const painting =
            new Painting(
                data.id,
                name,
                artist,
                price
            );


        paintings.unshift(painting);


        displayPaintings();


        document.getElementById("paintingTitle").value = "";
        document.getElementById("artistName").value = "";
        document.getElementById("paintingPrice").value = "";


        alert("Painting added successfully!");

    } catch (err) {

        error.textContent =
            err.message;

    } finally {

        loading.textContent = "";

    }

}


// ==========================================
// PUT REQUEST
// ==========================================

async function updatePainting(id) {

    try {

        loading.textContent =
            "Updating painting...";


        const response = await fetch(
            `${API_URL}/${id}`,
            {

                method: "PUT",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({

                    title: "Updated Painting",

                    body: "Updated Artist",

                    price: 25000

                })

            }
        );


        if (!response.ok) {

            throw new Error(
                "PUT request failed"
            );

        }


        const painting =
            paintings.find(
                painting => painting.id === id
            );


        if (painting) {

            painting.name =
                "Updated Painting";

            painting.artist =
                "Updated Artist";

            painting.price =
                25000;

        }


        displayPaintings();

        alert("Painting updated using PUT!");

    } catch (err) {

        error.textContent =
            err.message;

    } finally {

        loading.textContent = "";

    }

}


// ==========================================
// PATCH REQUEST
// ==========================================

async function patchPainting(id) {

    try {

        loading.textContent =
            "Updating price...";


        const response = await fetch(
            `${API_URL}/${id}`,
            {

                method: "PATCH",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({

                    price: 30000

                })

            }
        );


        if (!response.ok) {

            throw new Error(
                "PATCH request failed"
            );

        }


        const painting =
            paintings.find(
                painting => painting.id === id
            );


        if (painting) {

            painting.price =
                30000;

        }


        displayPaintings();

        alert("Price updated using PATCH!");

    } catch (err) {

        error.textContent =
            err.message;

    } finally {

        loading.textContent = "";

    }

}


// ==========================================
// DELETE REQUEST
// ==========================================

async function deletePainting(id) {

    try {

        loading.textContent =
            "Deleting painting...";


        const response = await fetch(
            `${API_URL}/${id}`,
            {

                method: "DELETE"

            }
        );


        if (!response.ok) {

            throw new Error(
                "DELETE request failed"
            );

        }


        paintings =
            paintings.filter(
                painting =>
                    painting.id !== id
            );


        displayPaintings();

        alert("Painting deleted!");

    } catch (err) {

        error.textContent =
            err.message;

    } finally {

        loading.textContent = "";

    }

}


// ==========================================
// PROMISE
// ==========================================

function createPromise() {

    return new Promise(
        (resolve, reject) => {

            const success = true;

            setTimeout(() => {

                if (success) {

                    resolve(
                        "Painting data loaded!"
                    );

                } else {

                    reject(
                        "Unable to load painting"
                    );

                }

            }, 1000);

        }
    );

}


// ==========================================
// .then()
// .catch()
// .finally()
// ==========================================

function promiseExample() {

    createPromise()

        .then(message => {

            result.textContent =
                message;

        })

        .catch(errorMessage => {

            result.textContent =
                errorMessage;

        })

        .finally(() => {

            console.log(
                "Promise completed"
            );

        });

}


// ==========================================
// PROMISE.ALL()
// ==========================================

async function promiseAllExample() {

    const request1 =
        fetch(`${API_URL}/1`);

    const request2 =
        fetch(`${API_URL}/2`);

    const request3 =
        fetch(`${API_URL}/3`);


    const responses =
        await Promise.all([
            request1,
            request2,
            request3
        ]);


    console.log(
        "Promise.all:",
        responses
    );

}


// ==========================================
// PROMISE.RACE()
// ==========================================

async function promiseRaceExample() {

    const request1 =
        fetch(`${API_URL}/1`);

    const request2 =
        fetch(`${API_URL}/2`);


    const result =
        await Promise.race([
            request1,
            request2
        ]);


    console.log(
        "Promise.race:",
        result
    );

}


// ==========================================
// PROMISE.ALLSETTLED()
// ==========================================

async function promiseAllSettledExample() {

    const result =
        await Promise.allSettled([

            fetch(`${API_URL}/1`),

            fetch(`${API_URL}/2`),

            fetch("wrong-url")

        ]);


    console.log(
        "Promise.allSettled:",
        result
    );

}


// ==========================================
// PROMISE.ANY()
// ==========================================

async function promiseAnyExample() {

    const result =
        await Promise.any([

            fetch("wrong-url"),

            fetch(`${API_URL}/3`),

            fetch(`${API_URL}/4`)

        ]);


    console.log(
        "Promise.any:",
        result
    );

}


// ==========================================
// CALLBACK FUNCTION
// ==========================================

function loadPainting(callback) {

    setTimeout(() => {

        callback(
            "Painting loaded using callback"
        );

    }, 1000);

}


function callbackExample() {

    loadPainting((message) => {

        result.textContent =
            message;

    });

}


// ==========================================
// CALLBACK HELL
// ==========================================

function callbackHellExample() {

    setTimeout(() => {

        console.log("Step 1");

        setTimeout(() => {

            console.log("Step 2");

            setTimeout(() => {

                console.log("Step 3");

                setTimeout(() => {

                    console.log("Step 4");

                }, 500);

            }, 500);

        }, 500);

    }, 500);

}


// ==========================================
// GENERATOR
// ==========================================

function generatorExample() {

    const generator =
        paintingGenerator();

    result.textContent =
        generator.next().value
        + " | "
        + generator.next().value
        + " | "
        + generator.next().value;

}


// ==========================================
// EVENT LISTENERS
// ==========================================

addBtn.addEventListener(
    "click",
    addPainting
);


promiseBtn.addEventListener(
    "click",
    () => {

        promiseExample();

        promiseAllExample();

        promiseRaceExample();

        promiseAllSettledExample();

        promiseAnyExample();

    }
);


callbackBtn.addEventListener(
    "click",
    callbackExample
);


generatorBtn.addEventListener(
    "click",
    generatorExample
);


// ==========================================
// START APPLICATION
// ==========================================

getPaintings();


// Make functions available to HTML buttons
window.updatePainting =
    updatePainting;

window.patchPainting =
    patchPainting;

window.deletePainting =
    deletePainting;