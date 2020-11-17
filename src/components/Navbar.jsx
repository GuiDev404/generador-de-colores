import React from "react";
import styled from 'styled-components';
import { Link, NavLink } from "react-router-dom";

const Menu = styled.nav`
  background: #eeeeee;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: var(--sm-radius);  
`
const MenuItem = styled.a`
  text-decoration: none;
  color: #0e1b2f;
  padding: 0 5px;
  margin: 0 5px;

  text-decoration: none;
  color: #0e1b2f;

  &.active {
    text-decoration: underline wavy var(--dark-flour-green-color);
  }
`
const Navbar = () => {
  return (
    <Menu>
      <MenuItem to="/" as={Link}>
        Home
      </MenuItem>
      <MenuItem as={NavLink}
        to="/colors-simple"
        activeClassName="active"
      >
        Colores Simples
      </MenuItem>
      <MenuItem to="/colors-deg" as={NavLink} activeClassName="active">
        Colores Degradados
      </MenuItem>
    </Menu>
  );
};

export default Navbar;
