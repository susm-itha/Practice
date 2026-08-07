import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Welcome to Car Showroom</h2>
      <p>Choose your favorite car.</p>
    </div>
  );
}

function Cars() {
  return (
    <div>
      <h2>Available Cars</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Car</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Hyundai Creta</td>
            <td>₹12 Lakhs</td>
          </tr>

          <tr>
            <td>Mahindra Thar</td>
            <td>₹18 Lakhs</td>
          </tr>

          <tr>
            <td>Tata Nexon</td>
            <td>₹11 Lakhs</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Offers() {
  return (
    <div>
      <h2>Today's Offers</h2>

      <ul>
        <li>5% Discount</li>
        <li>Free Insurance</li>
        <li>Free Accessories</li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>Phone : 7884929xxx</p>
      <p>Email : cars@gmail.com</p>
    </div>
  );
}

function Router() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>ABC Car Showroom</h1>

      <nav>
        <Link to="/Router">Home</Link> |{" "}
        <Link to="/Router/cars">Cars</Link> |{" "}
        <Link to="/Router/offers">Offers</Link> |{" "}
        <Link to="/Router/contact">Contact</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cars" element={<Cars />} />
        <Route path="offers" element={<Offers />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Router;