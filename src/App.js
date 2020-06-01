import React from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { logout } from './firebase';

import useAuth from './hooks/useAuth';
import { UserProvider } from './hooks/useSession';

import LandingPage from './pages/landing/landing.component';
import LoginPage from './pages/login/login.component';
import SignUpPage from './pages/signup/signup.component';
import HomePage from './pages/home/home.component';
import AccountPage from './pages/account/account.component';
import OrdersPage from './pages/orders/orders.component';
import ProductsPage from './pages/products/products.component';

import Spinner from './components/spinner/spinner.component';
import AdminLayout from './components/admin/admin.component';
import NavbarBurger from './components/navbar-burger/navbar-burger.component';
import Sidebar from './components/sidebar/sidebar.component';

import './App.scss';

function App() {
  const { currentUser, loading } = useAuth();
  const history = useHistory();

  if (loading) {
    return <Spinner />;
  }

  const onLogout = async () => {
    await logout();
    history.push('/login');
  };

  return (
    <UserProvider>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" render={() => (currentUser ? <Redirect to="/admin" /> : <LoginPage />)} />
        <Route path="/signup" render={() => (currentUser ? <Redirect to="/admin" /> : <SignUpPage />)} />
        <Route
          path="/logout"
          render={() => {
            onLogout();
          }}
        />
        <Route path="/admin" component={AdminPages} />
      </Switch>
    </UserProvider>
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
