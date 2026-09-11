const API_URL = "https://fakestoreapi.com/products";

let products = [];
let cart = [];

let searchText = "";
let selectedCategory = "all";


// DOM SELECTION

const productContainer =
    document.querySelector("#productContainer");

const cartContainer =
    document.querySelector("#cartContainer");

const totalPrice =
    document.querySelector("#totalPrice");

const searchInput =
    document.querySelector("#searchInput");

const categoryFilter =
    document.querySelector("#categoryFilter");

const clearCart =
    document.querySelector("#clearCart");


//LOAD CART FROM LOCAL STORAGE

const savedCart = localStorage.getItem("superMarketCart");

if (savedCart) {
    cart = JSON.parse(savedCart);
}

// FETCH PRODUCTS FROM API

async function fetchProducts() {

    try {

        productContainer.innerHTML =
            `<div class="loading">Loading products...</div>`;

        const response = await fetch(API_URL);

        // Error handling
        if (!response.ok) {
            throw new Error("Unable to fetch products");
        }

        products = await response.json();

        displayCategories();

        displayProducts();

    } catch (error) {

        productContainer.innerHTML = `
            <div class="error">
                ❌ ${error.message}
            </div>
        `;

    } finally {

        console.log("API request completed");

    }
}

//DISPLAY CATEGORIES

function displayCategories() {

    // Set removes duplicate categories
    const categories = [
        ...new Set(
            products.map(product => product.category)
        )
    ];

    categories.forEach(category => {

        const option = document.createElement("option");

        option.value = category;
        option.textContent = category;

        categoryFilter.appendChild(option);

    });
}

//DISPLAY PRODUCTS

function displayProducts() {

    const filteredProducts = products
        .filter(product => {

            const matchesSearch =
                product.title
                    .toLowerCase()
                    .includes(searchText.toLowerCase());

            const matchesCategory =
                selectedCategory === "all" ||
                product.category === selectedCategory;

            return matchesSearch && matchesCategory;

        });

    productContainer.innerHTML = "";

    if (filteredProducts.length === 0) {

        productContainer.innerHTML = `
            <div class="error">
                No products found
            </div>
        `;

        return;
    }


    // forEach loop
    filteredProducts.forEach(product => {

        const card = document.createElement("div");

        card.className = "product";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">

            <h3>${product.title}</h3>

            <p>
                ${product.description.substring(0, 80)}...
            </p>

            <p class="price">
                ₹${product.price}
            </p>

            <p>
                Category: ${product.category}
            </p>

            <button
                class="add-btn"
                data-id="${product.id}">
                Add to Cart
            </button>
        `;

        productContainer.appendChild(card);

    });
}


//ADD PRODUCT TO CART

function addToCart(productId) {

    const product = products.find(
        product => product.id === productId
    );

    if (!product) {

        alert("Product not found");

        return;
    }


    const existingProduct = cart.find(
        item => item.id === productId
    );


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }


    saveCart();

    displayCart();
}



//DISPLAY CART

function displayCart() {

    cartContainer.innerHTML = "";


    if (cart.length === 0) {

        cartContainer.innerHTML =
            "<p>Cart is empty</p>";

        totalPrice.textContent = "0";

        return;
    }


    cart.forEach(item => {

        const cartItem =
            document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.innerHTML = `

            <div>
                <strong>${item.title}</strong>

                <p>
                    ₹${item.price} × ${item.quantity}
                </p>
            </div>

            <div class="cart-buttons">

                <button
                    data-action="decrease"
                    data-id="${item.id}">
                    -
                </button>

                <span>${item.quantity}</span>

                <button
                    data-action="increase"
                    data-id="${item.id}">
                    +
                </button>

                <button
                    data-action="remove"
                    data-id="${item.id}">
                    Remove
                </button>

            </div>

        `;

        cartContainer.appendChild(cartItem);

    });


    calculateTotal();
}

//CALCULATE TOTAL

function calculateTotal() {

    const total = cart.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );

    totalPrice.textContent =
        total.toFixed(2);
}

//  LOCAL STORAGE

function saveCart() {

    localStorage.setItem(
        "superMarketCart",
        JSON.stringify(cart)
    );
}

// EVENT DELEGATION


productContainer.addEventListener(
    "click",
    function (event) {

        if (
            event.target.classList.contains("add-btn")
        ) {

            const productId =
                Number(event.target.dataset.id);

            addToCart(productId);
        }

    }
);

//CART EVENT DELEGATION

cartContainer.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest("button");

        if (!button) {
            return;
        }

        const productId =
            Number(button.dataset.id);

        const action =
            button.dataset.action;


        const item =
            cart.find(item => item.id === productId);


        if (!item) {
            return;
        }


        // Conditional statements

        if (action === "increase") {

            item.quantity++;

        }

        else if (action === "decrease") {

            item.quantity--;

            if (item.quantity <= 0) {

                cart =
                    cart.filter(
                        item => item.id !== productId
                    );
            }

        }

        else if (action === "remove") {

            cart =
                cart.filter(
                    item => item.id !== productId
                );
        }


        saveCart();

        displayCart();

    }
);

//SEARCH EVENT


searchInput.addEventListener(
    "input",
    function (event) {

        searchText = event.target.value;

        displayProducts();

    }
);

//CATEGORY FILTER

categoryFilter.addEventListener(
    "change",
    function (event) {

        selectedCategory =
            event.target.value;

        displayProducts();

    }
);

// CLEAR CART

clearCart.addEventListener(
    "click",
    function () {

        if (cart.length === 0) {

            alert("Cart is already empty");

            return;
        }


        const confirmation =
            confirm("Are you sure you want to clear the cart?");


        if (confirmation) {

            cart = [];

            localStorage.removeItem(
                "superMarketCart"
            );

            displayCart();

        }

    }
);


//START APPLICATION


fetchProducts();

displayCart();