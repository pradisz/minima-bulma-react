import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { signInWithCredentials, signInWithGoogle } from '../../firebase.js';

import { Hero, Title, AuthInput, AuthButton, OAuthTitle, OAuthButton } from '../../components/auth/auth.component';
import { AppLogo, GoogleIcon, FacebookIcon } from '../../components/svg/svg.component';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(undefined);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithCredentials(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
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
                {error ? <div class="notification is-danger is-light">{error}</div> : null}
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <div className="control has-icons-right">
                      <AuthInput
                        type="email"
                        className="input"
                        placeholder="Email"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                        required
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control has-icons-right">
                      <AuthInput
                        type="password"
                        className="input"
                        placeholder="Password"
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                        required
                      />
                    </div>
                  </div>

                  <div className="control">
                    <AuthButton type="submit" className="button is-dark is-fullwidth has-text-weight-semibold">
                      Log in
                    </AuthButton>
                  </div>
                </form>
                <Link to="/signup">Don't have an account?</Link>
                <OAuthTitle>OR</OAuthTitle>
                <OAuthButton google onClick={signInWithGoogle} className="button is-rounded is-fullwidth">
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
};

export default LoginPage;
