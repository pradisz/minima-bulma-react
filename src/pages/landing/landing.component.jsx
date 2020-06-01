import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../firebase';

import useSession from '../../hooks/useSession';

import { AppLogoAlt } from '../../components/svg/svg.component';

import { Navbar, NavbarBurger, AuthButton, Hero } from './landing.styles';

const LandingPage = () => {
  const { currentUser } = useSession();
  const [isActive, setToggle] = useState(false);
  const history = useHistory();

  const onLogout = async () => {
    await logout();
    history.push('/login');
  };

  return (
    <div className="container is-fullhd">
      <Hero className="hero has-background-light is-fullheight">
        <Navbar>
          <nav className="navbar" role="navigation">
            <div className="container">
              <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                  <AppLogoAlt />
                </Link>
                <NavbarBurger
                  onClick={() => setToggle(!isActive)}
                  className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </NavbarBurger>
              </div>
              <div className="navbar-end">
                <div className={`navbar-menu ${isActive ? 'is-active has-text-right' : ''}`}>
                  <div className="navbar-item">
                    {currentUser ? (
                      <AuthButton onClick={onLogout} className="button is-primary is-rounded">
                        Log out
                      </AuthButton>
                    ) : (
                      <Link to="/login">
                        <AuthButton className="button is-primary is-rounded">Log in</AuthButton>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </Navbar>
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column">
                <h1 className="title is-1">MINIMA BULMA</h1>
                <p className="subtitle">React & Firebase boilerplate with Bulma CSS Framework.</p>
              </div>
              <div className="column is-narrow">
                <Link to="/admin" className="button is-primary is-inverted">
                  <span>DOCS</span>
                  <span className="icon">
                    <span className="material-icons">arrow_right_alt</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Hero>
    </div>
  );
};

export default LandingPage;
