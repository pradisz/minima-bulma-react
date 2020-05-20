import styled from 'styled-components';
import { ReactComponent as MinimaLogo } from '../../assets/minima-logo.svg';
import { ReactComponent as MinimaLogoAlt } from '../../assets/minima-logo-alt.svg';
import { ReactComponent as GoogleLogo } from '../../assets/google-logo.svg';
import { ReactComponent as FacebookLogo } from '../../assets/facebook-logo.svg';

export const AppLogo = styled(MinimaLogo)`
  width: 36px;
  height: 36px;
`;

export const AppLogoAlt = styled(MinimaLogoAlt)`
  width: 36px;
  height: 36px;
`;

export const GoogleIcon = styled(GoogleLogo)`
  width: 20px;
  height: 20.625px;
  margin-right: 0.625em;
`;

export const FacebookIcon = styled(FacebookLogo)`
  width: 10.385px;
  height: 20px;
  margin-right: 0.625em;
`;
