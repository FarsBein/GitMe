import './Navbar.css';
// import {Link} from 'react-router-dom'; 
import * as ReactBootStrap from "react-bootstrap"
// import {AiFillGithub} from 'react-icons/ai';


function Navbar() {
  return (
        <ReactBootStrap.Navbar collapseOnSelect expand="md" variant="dark" className="navbar">
            <ReactBootStrap.Container >
                <ReactBootStrap.Navbar.Brand href="/"><div className="logo-font">GitMe</div></ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav" className="space-between">
                    <ReactBootStrap.Nav className="mr-auto">
                        <ReactBootStrap.Nav.Link href="#features">Home</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="#pricing">Showcase</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="#pricing">Doc</ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>

                    <ReactBootStrap.Nav>
                        <ReactBootStrap.Nav.Link href="#deets">About us</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link eventKey={2} href="#memes">Source Code</ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
  );
}

export default Navbar;

// import * as ReactBootStrap from "react-bootstrap"
// import React, {useState} from 'react'
// import './Navbar.css';
// import {Link} from 'react-router-dom'; 
// import {FaBars, FaTimes, AiFillGithub} from 'react-icons/fa'

// function Navbar() {
//     const [click,setClick] = useState(false)

//     const menuClickHandler = () => {
//         setClick(!click)
//     }

//     return (
//         <div className='navbar'>
//             <div className="navbar-container container">
//                 <Link to='/' className='logo'>
//                     GITME
//                 </Link>
//                 <div className="menu-icon" onClick={menuClickHandler}>
//                     {click ? <FaBars/> : <FaTimes/>}
//                 </div>
//                 <ul className={click ? 'nav-menu active': 'nav-menu'}>
//                     <li className='nav-item'>
//                         <Link to='/' className="nav-item link">
//                             Home
//                         </Link>
//                     </li>
//                     <li className='nav-item'>
//                         <Link to='/' className="nav-item link">
//                             Contact
//                         </Link>
//                     </li>
//                     <li className='nav-item'>
//                         <Link to='/' className="nav-item link">
//                             About us
//                         </Link>
//                     </li>
//                     <li className='nav-item'>
//                         <Link to='/' className="nav-item link">
//                             Source Code
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default Navbar;
