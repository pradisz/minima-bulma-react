import styled from 'styled-components';

export const Hero = styled.section`
  background-color: #f5f5f5;
  min-height: 100vh;
`;

export const Title = styled.h1`
  margin: 1em 0;
`;

export const AuthInput = styled.input`
  height: 3.125em;

  &::placeholder {
    font-size: 1rem;
  }
`;

export const AuthButton = styled.button`
  height: 3.125em;
  margin: 1rem 0;
`;

export const OAuthTitle = styled.div`
  text-align: center !important;
  font-size: 0.825rem;
  font-weight: 700;
  margin: 2.5em 0 1em !important;
`;

export const OAuthButton = styled.button`
  height: 3.125em;
  margin: 1em 0;
  color: ${(props) => (props.facebook ? '#ffffff' : null)};
  background-color: ${(props) => (props.facebook ? '#3D5B96' : '#ffffff')};
  border-color: #eeeeee;

  &:hover,
  &:focus {
    color: ${(props) => (props.facebook ? '#ffffff' : null)};
    background-color: ${(props) => (props.facebook ? '#3A61B3' : '#fffff')};
    border-color: #eeeeee;
  }
`;
