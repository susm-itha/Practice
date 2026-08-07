import { createContext, useContext, useEffect, useState } from "react";

// Create Context
const ProductContext = createContext();

function ProductForm() {
  const [name, setName] = useState("");
  const { addProduct } = useContext(ProductContext);

  const handleAdd = () => {
    if (name === "") return;

    addProduct(name);
    setName("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>

      <hr />
    </div>
  );
}

function ProductCard({ item }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px 0",
        width: "250px",
      }}
    >
      <h3>{item.title}</h3>
      <p>Price : ₹{item.price}</p>
    </div>
  );
}

function ProductList() {
  const { products } = useContext(ProductContext);

  return (
    <div>
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}

function PracticalAssignment() {
  const [products, setProducts] = useState([]);

  // API Integration
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=3")
      .then((res) => res.json())
      .then((data) => {
        const customProducts = [
          {
            id: data[0].id,
            title: "Susmitha",
            price: data[0].price,
          },
          {
            id: data[1].id,
            title: "Mansu",
            price: data[1].price,
          },
          {
            id: data[2].id,
            title: "Teju",
            price: data[2].price,
          },
        ];

        setProducts(customProducts);
      });
  }, []);

  // Add Product
  const addProduct = (name) => {
    const newProduct = {
      id: Date.now(),
      title: name,
      price: 500,
    };

    setProducts([...products, newProduct]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      <div style={{ padding: "20px" }}>
        <h1>Product Store</h1>

        {/* Parent → Child */}
        <ProductForm />

        {/* Parent → Child */}
        <ProductList />
      </div>
    </ProductContext.Provider>
  );
}

export default PracticalAssignment;