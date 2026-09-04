const productsDiv = document.getElementById("products");
const cartDiv = document.getElementById("cart");
const message = document.getElementById("message");
const totalSpan = document.getElementById("total");

let products = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];


// GET API
async function loadProducts() {

    try {

        message.textContent = "Loading products...";

        const response = await fetch(
            "https://fakestoreapi.com/products"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        products = await response.json();

        message.textContent = "";

        displayProducts();

    } catch (error) {

        message.textContent = "❌ " + error.message;

    }
}


// Display products using DOM
function displayProducts() {

    productsDiv.innerHTML = "";

    products.forEach(product => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <img src="${product.image}">
            <h3>${product.title.substring(0, 30)}</h3>
            <p class="price">₹${product.price}</p>
            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        `;

        productsDiv.appendChild(card);
    });
}


// Add product to cart
function addToCart(id) {

    const product = products.find(item => item.id === id);

    if (product) {

        cart.push(product);

        saveCart();

        displayCart();

        alert("Product added to cart!");
    }
}


// Save cart to Local Storage
function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}


// Display cart
function displayCart() {

    cartDiv.innerHTML = "";

    let total = 0;

    cart.forEach((product, index) => {

        total += product.price;

        const item = document.createElement("div");

        item.className = "card";

        item.innerHTML = `
            <h3>${product.title.substring(0, 25)}</h3>
            <p>₹${product.price}</p>

            <button onclick="removeFromCart(${index})">
                Remove
            </button>
        `;

        cartDiv.appendChild(item);
    });

    totalSpan.textContent = total.toFixed(2);
}


// Remove product
function removeFromCart(index) {

    cart.splice(index, 1);

    saveCart();

    displayCart();
}


// Clear cart
document.getElementById("clearBtn").addEventListener(
    "click",
    function () {

        cart = [];

        saveCart();

        displayCart();
    }
);


// Load products button event
document.getElementById("loadBtn").addEventListener(
    "click",
    loadProducts
);


// Display saved cart when page opens
displayCart();