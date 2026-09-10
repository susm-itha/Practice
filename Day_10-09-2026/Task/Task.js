 //---------- DOM Selection ----------
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productStock = document.getElementById("productStock");

const addProduct = document.getElementById("addProduct");
const productList = document.getElementById("productList");

const totalProducts = document.getElementById("totalProducts");
const message = document.getElementById("message");

const search = document.getElementById("search");
const clearStorage = document.getElementById("clearStorage");


// ---------- Product Data ----------

let products = JSON.parse(localStorage.getItem("products")) || [

    {
        id: 1,
        name: "Laptop",
        price: 50000,
        stock: 5
    },

    {
        id: 2,
        name: "Mobile",
        price: 25000,
        stock: 10
    },

    {
        id: 3,
        name: "Headphones",
        price: 2000,
        stock: 0
    }

];


// ---------- Display Products ----------

function displayProducts(productArray = products) {

    // Remove old elements
    productList.innerHTML = "";

    productArray.forEach(function(product) {

        // Create product element
        const div = document.createElement("div");

        div.className = "product";

        div.innerHTML = `
            <h3>${product.name}</h3>

            <p>Price: ₹${product.price}</p>

            <p>
                Stock: ${product.stock}
            </p>

            <p class="${product.stock > 0 ? "in-stock" : "out-stock"}">
                ${product.stock > 0 ? "In Stock" : "Out of Stock"}
            </p>

            <button class="deleteBtn" data-id="${product.id}">
                Delete
            </button>
        `;

        // Add element to DOM
        productList.appendChild(div);
    });

    // Update total products
    totalProducts.textContent = products.length;
}


// ---------- Add Product ----------

addProduct.addEventListener("click", function() {

    const name = productName.value.trim();
    const price = Number(productPrice.value);
    const stock = Number(productStock.value);

    if (name === "" || price <= 0 || stock < 0) {

        message.textContent = "Please enter valid product details.";

        return;
    }


    // Create new object
    const newProduct = {

        id: Date.now(),

        name: name,

        price: price,

        stock: stock

    };


    // Add product to array
    products.push(newProduct);


    // Save to Local Storage
    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );


    // Update DOM
    displayProducts();


    // Clear inputs
    productName.value = "";
    productPrice.value = "";
    productStock.value = "";


    message.textContent = "Product added successfully!";

});


// ---------- Event Delegation ----------

productList.addEventListener("click", function(event) {

    if (event.target.classList.contains("deleteBtn")) {

        const id = Number(event.target.dataset.id);


        // Remove product
        products = products.filter(function(product) {

            return product.id !== id;

        });


        // Update Local Storage
        localStorage.setItem(
            "products",
            JSON.stringify(products)
        );


        // Update DOM
        displayProducts();

    }

});


// ---------- Debouncing ----------

function debounce(callback, delay) {

    let timer;

    return function() {

        clearTimeout(timer);

        timer = setTimeout(function() {

            callback();

        }, delay);

    };

}


// Search function
function searchProducts() {

    const value = search.value.toLowerCase();

    const filteredProducts = products.filter(function(product) {

        return product.name
            .toLowerCase()
            .includes(value);

    });

    displayProducts(filteredProducts);
}


// Search with Debouncing
search.addEventListener(
    "input",
    debounce(searchProducts, 500)
);


// ---------- Local Storage ----------

// Save user
localStorage.setItem("storeUser", "Susmitha");


// Read user
const user = localStorage.getItem("storeUser");

document.getElementById("storeUser").textContent = user;


// ---------- Session Storage ----------

// Store current session
sessionStorage.setItem(
    "session",
    "Store Admin Active"
);


// ---------- Clear Storage ----------

clearStorage.addEventListener("click", function() {

    localStorage.clear();

    sessionStorage.clear();

    products = [];

    displayProducts();

    document.getElementById("storeUser").textContent = "Guest";

    message.textContent = "Storage cleared.";

});


// ---------- BOM ----------

// Browser window information
console.log("Window Width:", window.innerWidth);
console.log("Window Height:", window.innerHeight);


// ---------- Throttling ----------

function throttle(callback, delay) {

    let waiting = false;

    return function() {

        if (waiting) {
            return;
        }

        callback();

        waiting = true;

        setTimeout(function() {

            waiting = false;

        }, delay);

    };

}


// Example: window resize
window.addEventListener(
    "resize",
    throttle(function() {

        console.log(
            "Window resized:",
            window.innerWidth
        );

    }, 1000)
);


// ---------- Initial Display ----------

displayProducts();