import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';

export default function Main() {
  return (
    <Router>
      <div>
        <h3 className='centered'>Select an entity below to view and/or modify records:</h3>
        <div className='navigation'>
          <Link to='/customers' className='tab'>
            Customers
          </Link>
          <Link to='/orders' className='tab'>
            Orders
          </Link>
          <Link to='/ordered-cakes' className='tab'>
            OrderedCakes
          </Link>
          <Link to='/cakes' className='tab'>
            Cakes
          </Link>
          <Link to='/order-reviews' className='tab'>
            OrderReviews
          </Link>
        </div>
        <hr></hr>
        <Switch>
          <Route exact path='/index'>
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
      <h1>Customers</h1>
      <p>Records details of Customers who order cakes.</p>
      <div className='container'>
        <table>
          <caption>Customers Table</caption>
          <thead>
            <tr>
              <th>customer_ID</th>
              <th>customer_first_name</th>
              <th>customer_last_name</th>
              <th>customer_DOB</th>
              <th>customer_street_address</th>
              <th>customer_city</th>
              <th>customer_state</th>
              <th>customer_zip</th>
              <th>customer_phone</th>
              <th>customer_email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='container'>
        <h3>Add New Record</h3>
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
    </div>
  );
}

function Orders() {
  return (
    <div className='Page'>
      <h1>Orders</h1>
      <p>Records details of Orders placed by Customers.</p>
      <div className='container'>
        <table>
          <caption>Orders Table</caption>
          <thead>
            <tr>
              <th>order_ID</th>
              <th>customer_ID</th>
              <th>order_total_USD</th>
              <th>order_date_time</th>
              <th>credit_card_number</th>
              <th>credit_card_expiration</th>
              <th>order_fill_date</th>
              <th>order_pickup_date</th>
              <th>review_ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='container'>
        <h3>Add New Record</h3>
        <form>
          <div className='rows'>
            <div className='labels'>
              <label for='customer_ID'>Customer ID: </label>
              <label for='order_total_USD'>Order Total (USD): </label>
              <label for='order_date_time'>Order Date: </label>
              <label for='credit_card_number'>Credit Card Number: </label>
              <label for='credit_card_expiration'>Credit Card Expiration: </label>
              <label for='order_fill_date'>Order Fill Date: </label>
              <label for='order_pickup_date'>Order Pickup Date: </label>
              <label for='review_ID'>Review ID: </label>
            </div>
            <div className='inputs'>
              <input type='text' id='customer_ID' name='customer_ID'></input>
              <input type='text' id='order_total_USD' name='order_total_USD' required></input>
              <input type='datetime-local' id='order_date_time' name='customer_DOB'></input>
              <input type='text' id='credit_card_number' name='credit_card_number' required></input>
              <input type='text' id='credit_card_expiration' name='credit_card_expiration' required></input>
              <input type='date' id='order_fill_date' name='order_fill_date' required></input>
              <input type='date' id='order_pickup_date' name='order_pickup_date' required></input>
              <input type='text' id='review_ID' name='review_ID'></input>
            </div>
          </div>
          <input type='submit' value='Submit'></input>
        </form>
      </div>
    </div>
  );
}

function OrderedCakes() {
  return (
    <div className='Page'>
      <h1>OrderedCakes</h1>
      <p>Records details of Cakes ordered by Customers.</p>
      <div className='container'>
        <table>
          <caption>OrderedCakes Table</caption>
          <thead>
            <tr>
              <th>order_ID</th>
              <th>cake_ID</th>
              <th>cake_sale_price_USD</th>
              <th>cake_qty</th>
              <th>order_status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='container'>
        <h3>Add New Record</h3>
        <form>
          <div className='rows'>
            <div className='labels'>
              <label for='order_ID'>Order ID: </label>
              <label for='cake_ID'>Cake ID: </label>
              <label for='cake_sale_price_USD'>Cake Sale Price (USD): </label>
              <label for='cake_qty'>Quantity: </label>
              <label for='order_status'>Order Status: </label>
            </div>
            <div className='inputs'>
              <input type='text' id='order_ID' name='order_ID' required></input>
              <input type='text' id='order_total_USD' name='order_total_USD' required></input>
              <input type='text' id='cake_sale_price_USD' name='cake_sale_price_USD'></input>
              <input type='text' id='cake_qty' name='cake_qty' required></input>
              <input type='text' id='order_status' name='order_status' required></input>
            </div>
          </div>
          <input type='submit' value='Submit'></input>
        </form>
      </div>
    </div>
  );
}

function Cakes() {
  return (
    <div className='Page'>
      <h1>Cakes</h1>
      <p>Cakes available for Customers to Order.</p>
      <div className='container'>
        <table>
          <caption>Cakes Table</caption>
          <thead>
            <tr>
              <th>cake_ID</th>
              <th>cake_name</th>
              <th>cake_size</th>
              <th>cake_retail_price_USD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='container'>
        <h3>Add New Record</h3>
        <form>
          <div className='rows'>
            <div className='labels'>
              <label for='cake_name'>Cake Name: </label>
              <label for='cake_size'>Cake Size (inches): </label>
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
    </div>
  );
}

function OrderReviews() {
  return (
    <div className='Page'>
      <h1>OrderReviews</h1>
      <p>Metrics captured on completed orders.</p>
      <div className='container'>
        <table>
          <caption>OrderReviews Table</caption>
          <thead>
            <tr>
              <th>review_ID</th>
              <th>order_ID</th>
              <th>overall_rating</th>
              <th>product_quality_rating</th>
              <th>service_rating</th>
              <th>comment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='container'>
        <h3>Add New Record</h3>
        <form>
          <div className='rows'>
            <div className='labels'>
              <label for='order_ID'>Order ID: </label>
              <label for='overall_rating'>Overall Rating (1-10): </label>
              <label for='product_quality_rating'>Product Quality Rating (1-10): </label>
              <label for='service_rating'>Service Rating (1-10): </label>
              <label for='comment'>Comment: </label>
            </div>
            <div className='inputs'>
              <input type='text' id='order_ID' name='order_ID' required></input>
              <input type='text' id='overall_rating' name='overall_rating'></input>
              <input type='text' id='product_quality_rating' name='product_quality_rating'></input>
              <input type='text' id='service_rating' name='service_rating'></input>
              <textarea id='comment' name='comment'>
                {' '}
              </textarea>
            </div>
          </div>
          <input type='submit' value='Submit'></input>
        </form>
      </div>
    </div>
  );
}
