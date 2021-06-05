import './Navbar.css';
import {useEffect, useState} from 'react'
import * as ReactBootStrap from "react-bootstrap"
import { NavLink } from 'react-router-dom';
import axios from 'axios';
// import lightmoon from '../../images/lightmoon.svg';

function Navbar() {
    const [expanded, setExpanded] =  useState(false);
    const [loggedIn, setLoggedIn] =  useState(false);

    const isLoggedinCheck = async () => {
        try {
          const user = await axios.get('https://git-me-to.herokuapp.com/user',{ withCredentials: true})
          setLoggedIn(true)
        } catch(err) {
          setLoggedIn(false)
          console.log('err.message', err.message)
        }
      }
    
    useEffect(() => {
        isLoggedinCheck()
    }, [])

    const toggleExpand = () => {
        setExpanded(!expanded)
    }

    return (
            <ReactBootStrap.Navbar collapseOnSelect expanded={expanded} expand="md" variant="dark" className="navbar">
                <ReactBootStrap.Container >
                    <ReactBootStrap.Navbar.Brand href="/">
                        <div className="logo-font">
                            {/* <img src={lightmoon} className='logo'/>&nbsp; */}
                            GITME
                        </div>
                    </ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle onClick={() => toggleExpand()} aria-controls="responsive-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav" className="space-between">
                        <ReactBootStrap.Nav className="mr-auto">
                            <NavLink to="/"         onClick={() => toggleExpand()} className='link' style={{ paddingLeft: 13 }}>Home        </NavLink>
                            <NavLink to="/aboutUs"  onClick={() => toggleExpand()} className='link' style={{ paddingLeft: 13 }}>About us    </NavLink>
                            
                            {/* temporary removed until the creation of these pages are done */}
                            {/* <NavLink to="/doc"         onClick={() => toggleExpand()} className='link' style={{ paddingLeft: 13 }}>Doc      </NavLink> */}
                            {/* <NavLink to="/showcase" onClick={() => toggleExpand()} className='link' style={{ paddingLeft: 13 }}>Showcase</NavLink> */}

                            {/* can only see it if you are loggedin */}
                            {loggedIn ? <NavLink to="/dashboard" onClick={() => toggleExpand()} className='link' style={{ paddingLeft: 13}}>Dashboard</NavLink>: ''}

                        </ReactBootStrap.Nav>

                        <ReactBootStrap.Nav>
                            <NavLink to="/contactUs" className='link' onClick={() => toggleExpand()} style={{ paddingLeft: 13 }}>Support</NavLink>
                            <a href='https://github.com/FarsBein/GITME' onClick={() => toggleExpand()} target="_blank" className='link' style={{ paddingLeft: 13 }}>Source Code</a>  
                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Container>
            </ReactBootStrap.Navbar>
    );
}

export default Navbar;