import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;

  .main.container {
    background-color: #ffffff;
    padding: 2.75em 1.5em;
    min-height: 100vh;
    overflow-x: auto;

    /* From Tablet */
    @media only screen and (min-width: 768px) {
      margin-left: 16.188em; /* sidebar width */
    }

    /* Tablet only */
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
      margin-left: 14.938em; /* sidebar width */
    }

    /* Mobile */
    @media only screen and (max-width: 768px) {
      padding-bottom: 5em; /* Navbar burger height */
    }
  }
`;
