import React from 'react';

import { signInWithGoogle } from '../../firebase.js';

import { OAuthTitle, OAuthButton } from '../../components/auth/auth.component';
import { GoogleIcon, FacebookIcon } from '../../components/svg/svg.component';

const OAuth = () => {
  return (
    <>
      <OAuthTitle>OR</OAuthTitle>
      <OAuthButton google onClick={signInWithGoogle} className="button is-rounded is-fullwidth">
        <GoogleIcon />
        Continue with Google
      </OAuthButton>
      <OAuthButton facebook className="button is-rounded is-fullwidth">
        <FacebookIcon /> Continue with Facebook
      </OAuthButton>
    </>
  );
};

export default OAuth;
