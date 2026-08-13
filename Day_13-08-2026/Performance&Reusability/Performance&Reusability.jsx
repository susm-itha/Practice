import React, {
  useState,
  useMemo,
  useCallback,
  lazy,
  Suspense,
} from "react";

// Custom Hook

function useCars() {
  const [search, setSearch] = useState("");

  const cars = [
    { id: 1, name: "BMW", price: 50000, type: "Luxury" },
    { id: 2, name: "Audi", price: 45000, type: "Luxury" },
    { id: 3, name: "Toyota", price: 30000, type: "SUV" },
    { id: 4, name: "Honda", price: 25000, type: "Sedan" },
  ];

  // useMemo
  const filteredCars = useMemo(() => {
    console.log("Filtering cars...");

    return cars.filter((car) =>
      car.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return {
    search,
    setSearch,
    filteredCars,
  };
}

// React.memo()
const CarCard = React.memo(function CarCard({ car, onSelect }) {
  console.log("CarCard rendered:", car.name);

  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        width: "220px",
        display: "inline-block",
        textAlign: "center",
      }}
    >
      <h2>{car.name}</h2>

      <p>Price: ${car.price}</p>

      <p>Type: {car.type}</p>

      <button onClick={() => onSelect(car)}>
        View Details
      </button>
    </div>
  );
});

// Car Details Component

function CarDetails({ car }) {
  if (!car) {
    return (
      <div>
        <h3>Select a car to see details</h3>
      </div>
    );
  }

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        marginTop: "20px",
        width: "300px",
      }}
    >
      <h2>Car Details</h2>

      <p>
        <b>Name:</b> {car.name}
      </p>

      <p>
        <b>Price:</b> ${car.price}
      </p>

      <p>
        <b>Type:</b> {car.type}
      </p>
    </div>
  );
}

// Lazy Loading


// For a simple single-file 
// lazy loading is demonstrated using a
// dynamically resolved component.

const LazyCarDetails = lazy(() =>
  Promise.resolve({
    default: CarDetails,
  })
);
// Main App

function Perform() {
  const { search, setSearch, filteredCars } = useCars();

  const [selectedCar, setSelectedCar] = useState(null);

  // useCallback
  const handleSelect = useCallback((car) => {
    setSelectedCar(car);
  }, []);

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      {/* Dashboard Heading */}
      <h1>Car Dashboard</h1>

      <p>
        Manage and view your available cars
      </p>

      <hr />

      {/* Search */}
      <input
        type="text"
        placeholder="Search car..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          marginTop: "20px",
        }}
      />

      {/* Car List */}
      <h2>Available Cars</h2>

      <div>
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onSelect={handleSelect}
            />
          ))
        ) : (
          <p>No cars found.</p>
        )}
      </div>

      <hr />

      {/* Lazy Loaded Car Details */}
      <Suspense fallback={<h3>Loading Car Details...</h3>}>
        <LazyCarDetails car={selectedCar} />
      </Suspense>
    </div>
  );
}

export default Perform;