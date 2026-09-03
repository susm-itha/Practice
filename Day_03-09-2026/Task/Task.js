 const productList = document.getElementById("productList");
 const loading = document.getElementById("loading");
 const error = document.getElementById("error");
 const search = document.getElementById("search");

        let products = [];

        // GET API using async/await
        async function getProducts() {

            try {

                loading.style.display = "block";
                error.textContent = "";

                const response = await fetch(
                    "https://fakestoreapi.com/products"
                );

                // Check API response
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }

                // Convert response to JSON
                products = await response.json();

                loading.style.display = "none";

                displayProducts(products);

            } catch (err) {

                loading.style.display = "none";

                error.textContent =
                    " " + err.message;

            }
        }


        // Display products dynamically
        function displayProducts(data) {

            productList.innerHTML = "";

            if (data.length === 0) {
                productList.innerHTML =
                    "<p>No products found.</p>";
                return;
            }

            data.forEach(function(product) {

                const card = document.createElement("div");

                card.className = "card";

                card.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">

                    <h3>${product.title}</h3>

                    <p>${product.category}</p>

                    <p class="price">
                        $${product.price}
                    </p>

                    <button onclick="buyProduct('${product.title}')">
                        Add to Cart
                    </button>
                `;

                productList.appendChild(card);
            });
        }


        // Search products
        search.addEventListener("input", function() {

            const searchText =
                search.value.toLowerCase();

            const filteredProducts =
                products.filter(function(product) {

                    return product.title
                        .toLowerCase()
                        .includes(searchText);

                });

            displayProducts(filteredProducts);
        });


        // Button function
        function buyProduct(productName) {

            alert(
                productName + " added to cart 🛒"
            );
        }


        // Start application
        getProducts();