import './Navbar.css';
import {Link} from 'react-router-dom'; 
import * as ReactBootStrap from "react-bootstrap"

function Navbar() {
  return (
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar">
            <ReactBootStrap.Navbar.Brand href="#home">React-Bootstrap</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav" className="">
                <ReactBootStrap.Nav className="mr-auto">
                    <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
  );
}

export default Navbar;
