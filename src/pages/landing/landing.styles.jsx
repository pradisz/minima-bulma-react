import styled from 'styled-components';

export const Navbar = styled.div`
  background-color: white;
  padding: 1em;

  /* From Desktop */
  @media only screen and (min-width: 1024px) {
    padding: 1em 1.5em;
  }
`;

export const NavbarBurger = styled.button`
  &:hover,
  &:focus {
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

export const AuthButton = styled.button`
  height: 40px;
  font-weight: bold;

  &:hover {
    background-color: #1e76e3 !important;
  }
`;

export const Hero = styled.section`
  min-height: 100vh;
`;
