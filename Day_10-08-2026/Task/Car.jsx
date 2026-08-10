function Car({ name, brand, price, available }) {
  return (
    <div className="car">
      <h2>{name}</h2>
      <p>Brand: {brand}</p>
      <p>Price: ₹{price}</p>

      {/* Conditional Rendering */}
      {available ? (
        <p className="available">Available</p>
      ) : (
        <p className="sold">Sold Out</p>
      )}
    </div>
  );
}

export default Car;