import React, { useRef, createRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import useTheme from '../../hooks/useTheme';

import { AppLogo } from '../svg/svg.component';
import './sidebar.styles.scss';

import SidebarMenu from './sidebar.menu';

const Sidebar = () => {
  const navRef = useRef();
  const navItemRefs = useRef(SidebarMenu.map(() => createRef()));
  const matches = window.matchMedia('(max-width: 768px)').matches;

  const { sidebarHidden, toggleSidebar } = useTheme();

  // Handle click inside sidebar
  const handleClickInside = (e) => {
    navItemRefs.current.map((navItemRef) => {
      if (matches && navItemRef.current && navItemRef.current.contains(e.target)) toggleSidebar();
      return null;
    });
  };

  // Handle click outside sidebar
  const handleClickOutside = (e) => {
    if (matches && navRef.current && !navRef.current.contains(e.target)) {
      if (!sidebarHidden) toggleSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickInside);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickInside);
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <div ref={navRef} className={`sidebar ${sidebarHidden ? '' : 'is-active'}`}>
      <nav className="sidebar-nav">
        <div className="logo">
          <NavLink to="/">
            <AppLogo />
          </NavLink>
        </div>

        {SidebarMenu.map((item, index) => {
          if (item.type === 'nav-item') {
            return (
              <NavLink
                exact
                key={item.id}
                to={item.linkUrl}
                ref={navItemRefs.current[index]}
                className="nav-item"
                activeClassName="active"
              >
                <span className="link-text">{item.linkText}</span>
              </NavLink>
            );
          } else {
            return (
              <div key={item.id} className="nav-title">
                {item.title}
              </div>
            );
          }
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
