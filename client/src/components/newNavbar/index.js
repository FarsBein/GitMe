import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLinkLogo,
  NavLinkA
} from './NavbarElements.js';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLinkLogo to='/'>
          {/* <img src={require('../../images/')} alt='logo' /> */}
          <h1>GITME</h1>
        </NavLinkLogo>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/showcase' activeStyle>
            Showcase
          </NavLink>
          <NavLink to='/' activeStyle>
            Doc
          </NavLink>
          <NavLink to='/aboutUs' activeStyle>
            About Us
          </NavLink>
        </NavMenu>
        <NavBtn>
            <NavLink to='/contactUs' activeStyle>
                Support
            </NavLink>
            <NavLinkA href="https://github.com/FarsBein/GITME" target='blank_' activeStyle>
                Source Code
            </NavLinkA>
            {/* <NavBtnLink to='/signin'>Sign In</NavBtnLink> */}
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;