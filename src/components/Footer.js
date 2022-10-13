import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import ytc from '../images/ytcwhite.jpg';
import { AiOutlineSearch } from 'react-icons/ai';
import {BsMicFill} from 'react-icons/bs'



function Footer () {
    return(
        <div className="footerc">
            
            <Navbar  className= 'nav-bar' fixed= "bottom">
                <Container>
                  <Nav>
                    <Nav.Link href="#login" className = 'nav-text'>
                        Advertising
                    </Nav.Link>
                    <Nav.Link href="#login" className = 'nav-text'>
                        Business
                    </Nav.Link>
                    <Nav.Link href="#login" className = 'nav-text'>
                        How Search works
                    </Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#login" className = 'nav-text'> Carbon neutral since 2007</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Nav.Link href="#login" className = 'nav-text' >
                        Privacy
                    </Nav.Link>
                    <Nav.Link href="#login" className = 'nav-text'>
                        Terms
                    </Nav.Link>
                    <Nav.Link href="#login" className = 'nav-text'>
                        Settings
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default Footer;