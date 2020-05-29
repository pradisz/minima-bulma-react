import React, { useRef, useEffect } from 'react';

import useTheme from '../../hooks/useTheme';

import './navbar-burger.styles.scss';

const NavbarBurger = () => {
  const ref = useRef();
  const matches = window.matchMedia('(max-width: 768px)').matches;

  const { sidebarHidden, toggleSidebar } = useTheme();

  // Handle click inside burger menu
  const handleClickInside = (e) => {
    if (sidebarHidden && matches && ref.current && ref.current.contains(e.target)) {
      return toggleSidebar({ hidden: false });
    }
    return null;
  };

  useEffect(() => {
    document.addEventListener('click', handleClickInside);

    return () => {
      document.removeEventListener('click', handleClickInside);
    };
  });

  return (
    <nav className="navbar-admin" role="navigation">
      <div className="container">
        <div className="navbar-end">
          <div
            ref={ref}
            className={`navbar-admin navbar-burger burger ${sidebarHidden ? '' : 'is-active has-text-centered'}`}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBurger;
