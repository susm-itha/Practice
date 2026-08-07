import { Routes, Route, Link, useParams } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bike Showroom</h1>

      <ul>
        <li>
          <Link to="bike/101">Royal Enfield</Link>
        </li>

        <li>
          <Link to="bike/102">KTM</Link>
        </li>

        <li>
          <Link to="bike/103">Yamaha</Link>
        </li>
      </ul>
    </div>
  );
}

function BikeDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>Bike Details</h2>
      <h3>Bike ID: {id}</h3>

      <Link to="/">Back</Link>
    </div>
  );
}

function Params() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="bike/:id" element={<BikeDetails />} />
    </Routes>
  );
}
export default Params;