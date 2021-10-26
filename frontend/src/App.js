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
    <div className="Page">
      <h2>Customers Entity</h2>
      <p>records details of Customers who order cakes</p>
    </div>
  );
}

function Orders() {
  return (
    <div className="Page">
      <h2>Orders Entity</h2>
      <p>records details of Orders placed by Customers</p>
    </div>
  );
}

function OrderedCakes() {
  return (
    <div className="Page">
      <h2>OrderedCakes Entity</h2>
      <p>records details of Cakes ordered by Customers</p>
    </div>
  );
}

function Cakes() {
  return (
    <div className="Page">
      <h2>Cakes Entity</h2>
      <p>Cakes available for Customers to Order</p>
    </div>
  );
}

function OrderReviews() {
  return (
    <div className="Page">
      <h2>OrderReviews Entity</h2>
      <p>metrics captured on completed orders</p>
    </div>
  );
}