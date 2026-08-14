import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1> My Bank Dashboard</h1>

      <table border="1" cellPadding="15">
        <tbody>
          <tr>
            <td>
              <h3>Total Balance</h3>
              <h2>₹1,25,000</h2>
            </td>

            <td>
              <h3> Savings</h3>
              <h2>₹80,000</h2>
            </td>

            <td>
              <h3>Current</h3>
              <h2>₹45,000</h2>
            </td>
          </tr>
        </tbody>
      </table>

      <br />

      <table border="1" cellPadding="15">
        <tbody>
          <tr>
            <td>
              <h3>Quick Actions</h3>

              <Link to="/accounts">My Accounts</Link>
              <br /><br />

              <Link to="/transactions">Transactions</Link>
            </td>

            <td>
              <h3>Recent Transactions</h3>

              <p>₹5,000 - Money Received</p>
              <p>₹2,000 - Shopping</p>
              <p>₹1,500 - Electricity Bill</p>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

function Accounts() {
  return (
    <>
      <h1>My Accounts</h1>

      <p>Savings Account - ₹80,000</p>
      <Link to="/account/101">View Account</Link>

      <p> Current Account - ₹45,000</p>
      <Link to="/account/102">View Account</Link>

      <br /><br />
      <Link to="/">⬅ Dashboard</Link>
    </>
  );
}

function AccountDetails() {
  return (
    <>
      <h1>Account Details</h1>

      <p>Account Holder: Susmitha</p>
      <p>Account Balance: ₹80,000</p>

      <Link to="/accounts">⬅ Accounts</Link>
    </>
  );
}

function Transactions() {
  return (
    <>
      <h1>Transactions</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Transaction</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Money Received</td>
            <td>+ ₹5,000</td>
          </tr>

          <tr>
            <td>Shopping</td>
            <td>- ₹2,000</td>
          </tr>

          <tr>
            <td>Electricity Bill</td>
            <td>- ₹1,500</td>
          </tr>
        </tbody>
      </table>

      <br />

      <Link to="/">⬅ Dashboard</Link>
    </>
  );
}

function Rout() {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/accounts" element={<Accounts />} />

        <Route
          path="/account/:id"
          element={<AccountDetails />}
        />

        <Route
          path="/transactions"
          element={<Transactions />}
        />
      </Routes>
  );
}

export default Rout;
