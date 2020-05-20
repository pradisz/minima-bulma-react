import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './pages/landing/landing.component';
import LoginPage from './pages/login/login.component';
import SignUpPage from './pages/signup/signup.component';
import HomePage from './pages/home/home.component';
import AccountPage from './pages/account/account.component';
import OrdersPage from './pages/orders/orders.component';
import ProductsPage from './pages/products/products.component';

import AdminLayout from './components/admin/admin.component';
import NavbarBurger from './components/navbar-burger/navbar-burger.component';
import Sidebar from './components/sidebar/sidebar.component';

import './App.scss';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/admin" component={AdminPages} />
    </Switch>
  );
}

const AdminPages = ({ match }) => (
  <Switch>
    <AdminLayout>
      <NavbarBurger />
      <Sidebar />
      <Route exact path={`${match.path}`} component={HomePage} />
      <Route path={`${match.path}/account`} component={AccountPage} />
      <Route path={`${match.path}/orders`} component={OrdersPage} />
      <Route path={`${match.path}/products`} component={ProductsPage} />
    </AdminLayout>
  </Switch>
);

export default App;
