import React from 'react';
import { Link } from 'react-router-dom';

import { Hero, Title, AuthInput, AuthButton, OAuthTitle, OAuthButton } from '../../components/auth/auth.component';
import { AppLogo, GoogleIcon, FacebookIcon } from '../../components/svg/svg.component';

const LoginPage = () => (
  <div className="container is-fullhd">
    <Hero className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-4 is-offset-4">
              <Link to="/">
                <AppLogo />
              </Link>
              <Title className="title">Sign in</Title>

              <div className="field">
                <div className="control has-icons-right">
                  <AuthInput className="input" type="email" placeholder="Email" />
                </div>
              </div>

              <div className="field">
                <div className="control has-icons-right">
                  <AuthInput className="input" type="password" placeholder="Password" />
                </div>
              </div>

              <div className="control">
                <AuthButton className="button is-dark is-fullwidth has-text-weight-semibold">Log in</AuthButton>
              </div>

              <Link to="/signup">Don't have an account?</Link>

              <OAuthTitle>OR</OAuthTitle>
              <OAuthButton google className="button is-rounded is-fullwidth">
                <GoogleIcon />
                Continue with Google
              </OAuthButton>
              <OAuthButton facebook className="button is-rounded is-fullwidth">
                <FacebookIcon /> Continue with Facebook
              </OAuthButton>
            </div>
          </div>
        </div>
      </div>
    </Hero>
  </div>
);

export default LoginPage;
