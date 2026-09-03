const API_URL = "https://fakestoreapi.com/products";

const output = document.getElementById("output");

// GET Request using Fetch + .then() + .catch()
function getProducts() {

    output.innerHTML = "Loading products...";

    fetch(API_URL)
        .then(response => {

            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }

            return response.json();
        })
        .then(products => {

            output.innerHTML = "";

            products.slice(0, 5).forEach(product => {

                output.innerHTML += `
                    <div>
                        <h3>${product.title}</h3>
                        <p> Price: $${product.price}</p>
                        <p>Category: ${product.category}</p>
                    </div>
                    <hr>
                `;
            });
        })
        .catch(error => {

            output.innerHTML = `
                <p> Error: ${error.message}</p>
            `;
        });
}


// POST Request using Async/Await
async function addProduct() {

    const newProduct = {
        title: "Smart Watch",
        price: 99.99,
        category: "Electronics"
    };

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(newProduct)
        });

        if (!response.ok) {
            throw new Error("Failed to add product");
        }

        const product = await response.json();

        output.innerHTML = `
            <h2> Product Added</h2>
            <p>Product: ${product.title}</p>
            <p>Price: $${product.price}</p>
            <p>Category: ${product.category}</p>
        `;

    } catch (error) {

        output.innerHTML = `
            <p> Error: ${error.message}</p>
        `;
    }
}