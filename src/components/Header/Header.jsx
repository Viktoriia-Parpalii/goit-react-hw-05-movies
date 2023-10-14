import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledHeader from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <header>
        <nav>
          <NavLink className="link" to="/">
            Home
          </NavLink>
          <NavLink className="link" to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
    </StyledHeader>
  );
};

export default Header;
