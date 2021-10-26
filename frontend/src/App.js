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
        <div className='rows'>
          <div className='labels'>
            <label for='customer_first_name'>First Name: </label>
            <label for='customer_last_name'>Last Name: </label>
            <label for='customer_DOB'>Date of Birth: </label>
            <label for='customer_street_address'>Street Address: </label>
            <label for='customer_city'>City: </label>
            <label for='customer_state'>State: </label>
            <label for='customer_zip'>Zip Code: </label>
            <label for='customer_phone'>Phone: </label>
            <label for='customer_email'>Email: </label>
          </div>
          <div className='inputs'>
            <input type='text' id='customer_first_name' name='customer_first_name' required></input>
            <input type='text' id='customer_last_name' name='customer_last_name' required></input>
            <input type='date' id='customer_DOB' name='customer_DOB'></input>
            <input type='text' id='customer_street_address' name='customer_street_address' required></input>
            <input type='text' id='customer_city' name='customer_city' required></input>
            <input type='text' id='customer_state' name='customer_state' required></input>
            <input type='text' id='customer_zip' name='customer_zip' required></input>
            <input type='text' id='customer_phone' name='customer_phone' required></input>
            <input type='text' id='customer_email' name='customer_email' required></input>
          </div>
        </div>
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
      <form>
        <div className='rows'>
          <div className='labels'>
            <label for='cake_name'>Cake Name: </label>
            <label for='cake_size'>Cake Size: </label>
            <label for='cake_retail_price_USD'>Cake Retail Price (USD): </label>
          </div>
          <div className='inputs'>
            <input type='text' id='cake_name' name='cake_name' required></input>
            <input type='text' id='cake_size' name='cake_size'></input>
            <input type='text' id='cake_retail_price_USD' name='cake_retail_price_USD'></input>
          </div>
        </div>
        <input type='submit' value='Submit'></input>
      </form>
    </div>
  );
}

function OrderReviews() {
  return (
    <div className='Page'>
      <h2>OrderReviews Entity</h2>
      <p>metrics captured on completed orders</p>
      <form>
        <div className='rows'>
          <div className='labels'>
            <label for='order_ID'>Order ID: </label>
            <label for='overall_rating'>Overall Rating: </label>
            <label for='product_quality_rating'>Product Quality Rating: </label>
            <label for='service_rating'>Service Rating: </label>
            <label for='comment'>Comment: </label>
          </div>
          <div className='inputs'>
            <input type='text' id='order_ID' name='order_ID' required></input>
            <input type='text' id='overall_rating' name='overall_rating'></input>
            <input type='text' id='product_quality_rating' name='product_quality_rating'></input>
            <input type='text' id='service_rating' name='service_rating'></input>
            <textarea id='comment' name='comment'> </textarea>
          </div>
        </div>
        <input type='submit' value='Submit'></input>
      </form>
    </div>
  );
}