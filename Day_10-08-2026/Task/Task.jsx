import { useState } from "react";
import Car from "./Car";

function Task() {
  // State
  const [showCars, setShowCars] = useState(true);
  const [search, setSearch] = useState("");

  // List of cars
  const cars = [
    {
      id: 1,
      name: "Swift",
      brand: "Maruti Suzuki",
      price: "8,00,000",
      available: true,
    },
    {
      id: 2,
      name: "Creta",
      brand: "Hyundai",
      price: "12,00,000",
      available: true,
    },
    {
      id: 3,
      name: "Nexon",
      brand: "Tata",
      price: "10,00,000",
      available: false,
    },
    {
      id: 4,
      name: "City",
      brand: "Honda",
      price: "13,00,000",
      available: true,
    },
  ];

  // Search filtering
  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Car Showroom</h1>

      <input
        type="text"
        placeholder="Search car..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br/>
      <br/>

      {/* State */}
      <button onClick={() => setShowCars(!showCars)}>
        {showCars ? "Hide Cars" : "Show Cars"}
      </button>

      <br />
      <br />

      {/* Conditional Rendering */}
      {showCars ? (
        filteredCars.length > 0 ? (
          <div>
            {/* List Rendering */}
            {filteredCars.map((car) => (
              <Car
                key={car.id}
                name={car.name}
                brand={car.brand}
                price={car.price}
                available={car.available}
              />
            ))}
          </div>
        ) : (
          <h3>No cars found </h3>
        )
      ) : (
        <h3>Search for best cars</h3>
      )}
    </div>
  );
}
export default Task;