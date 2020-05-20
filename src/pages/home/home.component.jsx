import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="main container">
    <h1 className="title is-4">
      Welcome, <span className="has-text-weight-normal">Devina!</span>
    </h1>
    <div className="columns">
      <div className="column is-half-tablet is-one-third-desktop">
        <Link to="/admin/orders">
          <div className="box is-clearfix">
            <p className="subtitle is-size-7">TODAY</p>
            <p className="title is-5">Orders</p>
            <div className="title is-pulled-right">0</div>
          </div>
        </Link>
      </div>
      <div className="column is-half-tablet is-one-third-desktop">
        <Link to="/admin/products">
          <div className="box is-clearfix">
            <p className="subtitle is-size-7">TOTAL</p>
            <p className="title is-5">Products</p>
            <p className="title is-pulled-right">8</p>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default HomePage;
