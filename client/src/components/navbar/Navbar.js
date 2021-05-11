import './Navbar.css';
import * as ReactBootStrap from "react-bootstrap"
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
        <ReactBootStrap.Navbar collapseOnSelect expand="md" variant="dark" className="navbar">
            <ReactBootStrap.Container >
                <ReactBootStrap.Navbar.Brand href="/"><div className="logo-font">GitMe</div></ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav" className="space-between">
                    <ReactBootStrap.Nav className="mr-auto">
                        <NavLink to="/" className='link' style={{ paddingLeft: 13 }}>            Home        </NavLink>
                        <NavLink to="/showcase" className='link' style={{ paddingLeft: 13 }}>    Showcase    </NavLink>
                        <NavLink to="/do" className='link' style={{ paddingLeft: 13 }}>          Doc         </NavLink>
                        <NavLink to="/aboutUs" className='link' style={{ paddingLeft: 13 }}>     About us    </NavLink>
                    </ReactBootStrap.Nav>

                    <ReactBootStrap.Nav>
                        <a href='https://github.com/FarsBein/GitMe' target="_blank" className='link' style={{ paddingLeft: 13 }}>Source Code</a>  
                        <NavLink to="/contactUs" className='link' style={{ paddingLeft: 13 }}>Support</NavLink>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
  );
}

export default Navbar;