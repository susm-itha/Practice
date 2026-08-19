import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addToCart,
  removeFromCart,
  clearCart,
} from "./Cart";

function Management() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      price: 55000,
    },
    {
      id: 2,
      name: "Mobile",
      category: "Electronics",
      price: 25000,
    },
    {
      id: 3,
      name: "Headphones",
      category: "Accessories",
      price: 3000,
    },
    {
      id: 4,
      name: "Keyboard",
      category: "Accessories",
      price: 1500,
    },
    {
      id: 5,
      name: "Smart Watch",
      category: "Wearables",
      price: 5000,
    },
    {
      id: 6,
      name: "Tablet",
      category: "Electronics",
      price: 22000,
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* Sidebar */}

      <aside
        style={{
          width: "220px",
          background: "#222",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>ShopDash</h2>

        <hr />

        <p>Dashboard</p>
        <p>Products</p>
        <p>Orders</p>
        <p>Wishlist</p>
        <p>Settings</p>

        <hr />

        <h3>Cart</h3>

        <p>Items: {cartItems.length}</p>

        <p>Total: ₹{totalAmount}</p>
      </aside>

      {/* Main Dashboard */}

      <main style={{ flex: 1, padding: "25px" }}>
        <h1>Shopping Dashboard</h1>

        <p>Welcome to your shopping dashboard</p>

        {/* Dashboard Cards */}

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              width: "180px",
            }}
          >
            <h3>Products</h3>
            <h2>{products.length}</h2>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              width: "180px",
            }}
          >
            <h3>Cart Items</h3>
            <h2>{cartItems.length}</h2>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              width: "180px",
            }}
          >
            <h3>Cart Value</h3>
            <h2>₹{totalAmount}</h2>
          </div>
        </div>

        {/* Search */}

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "12px",
            width: "300px",
            marginBottom: "25px",
          }}
        />

        {/* Products */}

        <h2>Products</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                padding: "20px",
              }}
            >
              <h3>{product.name}</h3>

              <p>
                Category: {product.category}
              </p>

              <h3>₹{product.price}</h3>

              <button
                onClick={() =>
                  dispatch(addToCart(product))
                }
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Cart */}

        <hr style={{ margin: "30px 0" }} />

        <h2>My Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  borderBottom:
                    "1px solid #ddd",
                  padding: "12px",
                }}
              >
                <span>
                  {item.name} - ₹{item.price}
                </span>

                <button
                  onClick={() =>
                    dispatch(
                      removeFromCart(item.id)
                    )
                  }
                >
                  Remove
                </button>
              </div>
            ))}

            <h2>Total: ₹{totalAmount}</h2>

            <button
              onClick={() =>
                dispatch(clearCart())
              }
            >
              Clear Cart
            </button>
          </>
        )}
      </main>
    </div>
  );
}
export default Management;