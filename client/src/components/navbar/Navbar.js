import './Navbar.css';
import {useState} from 'react'
import * as ReactBootStrap from "react-bootstrap"
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [expanded, setExpanded] =  useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded)
    }

    return (
            <ReactBootStrap.Navbar collapseOnSelect expanded={expanded} expand="md" variant="dark" className="navbar">
                <ReactBootStrap.Container >
                    <ReactBootStrap.Navbar.Brand href="/"><div className="logo-font">GITME</div></ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle onClick={() => toggleExpand()} aria-controls="responsive-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav" className="space-between">
                        <ReactBootStrap.Nav className="mr-auto">
                            <NavLink to="/"         onClick={() => toggleExpand()} className='link' style={{ paddingLeft: 13 }}>Home        </NavLink>
                            {/* <NavLink to="/showcase" onClick={() => toggleExpand()} className='link' style={{ paddingLeft: 13 }}>Showcase    </NavLink> */}
                            <NavLink to="/"         onClick={() => toggleExpand()} className='link' style={{ paddingLeft: 13 }}>Doc         </NavLink>
                            <NavLink to="/aboutUs"  onClick={() => toggleExpand()} className='link' style={{ paddingLeft: 13 }}>About us    </NavLink>
                        </ReactBootStrap.Nav>

                        <ReactBootStrap.Nav>
                            <a href='https://github.com/FarsBein/GitMe' onClick={() => toggleExpand()} target="_blank" className='link' style={{ paddingLeft: 13 }}>Source Code</a>  
                            <NavLink to="/contactUs" className='link' onClick={() => toggleExpand()} style={{ paddingLeft: 13 }}>Support</NavLink>
                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Container>
            </ReactBootStrap.Navbar>
    );
}

export default Navbar;