import React, { useEffect, useState } from "react";

// Higher Order Component
const withLoading = (Component) => {
  return function NewComponent(props) {
    if (props.loading) {
      return <h2>Loading...</h2>;
    }
    return <Component {...props} />;
  };
};

// Gold List Component
function GoldList({ goldItems }) {
  return (
    <div>
      <h2>Gold Shop Items</h2>

      {goldItems.length === 0 ? (
        <h3>No Gold Items</h3>
      ) : (
        goldItems.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid gray",
              margin: "10px",
              padding: "10px",
            }}
          >
            <img src={item.image} width="100" alt={item.title} />
            <h3>{item.title}</h3>
            <p>Price : ₹ {item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

const GoldData = withLoading(GoldList);

function Miniproject() {
  // Login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [loginError, setLoginError] = useState("");

  // API
  const [goldItems, setGoldItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Form
  const [goldName, setGoldName] = useState("");
  const [price, setPrice] = useState("");
  const [formError, setFormError] = useState("");

  // Login Function
  const handleLogin = () => {
    if (username === "sus" && password === "1920") {
      setLogin(true);
    } else {
      setLoginError("Invalid Username or Password");
    }
  };

  // API
  useEffect(() => {
    if (login) {
      setLoading(true);

      fetch("https://fakestoreapi.com/products/category/jewelery")
        .then((res) => res.json())
        .then((data) => {
          setGoldItems(data);
          setLoading(false);
        })
        .catch(() => {
          setError("Failed to Load Data");
          setLoading(false);
        });
    }
  }, [login]);

  // Add Item
  const addGold = () => {
    if (goldName === "" || price === "") {
      setFormError("All Fields Required");
      return;
    }

    const newItem = {
      title: goldName,
      price: price,
      image: "https://via.placeholder.com/100",
    };

    setGoldItems([...goldItems, newItem]);

    setGoldName("");
    setPrice("");
    setFormError("");
  };

  // Login Page
  if (!login) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Gold Shop Login</h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />

        <button onClick={handleLogin}>Login</button>

        <p style={{ color: "red" }}>{loginError}</p>
      </div>
    );
  }

  // Dashboard
  return (
    <div style={{ textAlign: "center" }}>
      <h1>SAI SUSMITHA GOLD SHOP</h1>

      <h2>Welcome susmitha</h2>

      <hr />

      <h2>Add Gold Item</h2>

      <input
        type="text"
        placeholder="Gold Name"
        value={goldName}
        onChange={(e) => setGoldName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <br />
      <br />

      <button onClick={addGold}>Add Item</button>

      <p style={{ color: "red" }}>{formError}</p>

      <hr />

      {error ? (
        <h2>{error}</h2>
      ) : (
        <GoldData loading={loading} goldItems={goldItems} />
      )}
    </div>
  );
}

export default Miniproject;