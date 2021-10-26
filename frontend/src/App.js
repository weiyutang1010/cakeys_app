import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';

export default function Main() {
  return (
    <Router>
      <div>
        <h2>Entities</h2>

        <ul>
          <li>
            <Link to='/customers'>Customers</Link>
          </li>
          <li>
            <Link to='/orders'>Orders</Link>
          </li>
          <li>
            <Link to='/ordered-cakes'>OrderedCakes</Link>
          </li>
          <li>
            <Link to='/cakes'>Cakes</Link>
          </li>
          <li>
            <Link to='/order-reviews'>OrderReviews</Link>
          </li>
        </ul>
        <hr></hr>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/customers'>
            <Customers />
          </Route>
          <Route path='/orders'>
            <Orders />
          </Route>
          <Route path='/ordered-cakes'>
            <OrderedCakes />
          </Route>
          <Route path='/cakes'>
            <Cakes />
          </Route>
          <Route path='/order-reviews'>
            <OrderReviews />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <div></div>;
}

function Customers() {
  return (
    <div className='Page'>
      <h2>Customers Entity</h2>
      <p>records details of Customers who order cakes</p>
      <form>
        <label for='customer_first_name'>First Name: </label>
        <input type='text' id='customer_first_name' name='customer_first_name' required></input>
        <br />

        <label for='customer_last_name'>Last Name: </label>
        <input type='text' id='customer_last_name' name='customer_last_name' required></input>
        <br />

        <label for='customer_DOB'>Date of Birth: </label>
        <input type='date' id='customer_DOB' name='customer_DOB'></input>
        <br />

        <label for='customer_street_address'>Street Address: </label>
        <input type='text' id='customer_street_address' name='customer_street_address' required></input>
        <br />

        <label for='customer_city'>City: </label>
        <input type='text' id='customer_city' name='customer_city' required></input>
        <br />

        <label for='customer_state'>State: </label>
        <input type='text' id='customer_state' name='customer_state' required></input>
        <br />

        <label for='customer_zip'>Zip Code: </label>
        <input type='text' id='customer_zip' name='customer_zip' required></input>
        <br />

        <label for='customer_phone'>Phone: </label>
        <input type='text' id='customer_phone' name='customer_phone' required></input>
        <br />

        <label for='customer_email'>Email: </label>
        <input type='text' id='customer_email' name='customer_email' required></input>
        <br />

        <input type='submit' value='Submit'></input>
      </form>
    </div>
  );
}

function Orders() {
  return (
    <div className='Page'>
      <h2>Orders Entity</h2>
      <p>records details of Orders placed by Customers</p>
    </div>
  );
}

function OrderedCakes() {
  return (
    <div className='Page'>
      <h2>OrderedCakes Entity</h2>
      <p>records details of Cakes ordered by Customers</p>
    </div>
  );
}

function Cakes() {
  return (
    <div className='Page'>
      <h2>Cakes Entity</h2>
      <p>Cakes available for Customers to Order</p>
    </div>
  );
}

function OrderReviews() {
  return (
    <div className='Page'>
      <h2>OrderReviews Entity</h2>
      <p>metrics captured on completed orders</p>
    </div>
  );
}
