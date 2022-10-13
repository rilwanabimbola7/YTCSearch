import React, {useState} from 'react';
import '../index.css';
import { GrApps } from 'react-icons/gr';
import {Container, Navbar, Nav, Button} from 'react-bootstrap';

import Applications from '../components/Applications'
import Profile from '../components/Profile'



function Header({toggleBio, toggleApp, isApp, isBio}) {
 

  

  return (
    <div>
    <Navbar className= 'nav-bar'>
      <Container>
          <Nav>
            <Nav.Link href="#login" className = 'nav-text'>
              About
            </Nav.Link>
            <Nav.Link href="#login" className = 'nav-text'>
              Store
            </Nav.Link>
          </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#login" className = 'nav-text' >
              Universities
            </Nav.Link>
            <Nav.Link href="#login" className = 'nav-text'>
              Categories
            </Nav.Link>
          </Nav>
          <Button className = "btn-apps" onClick= {toggleApp}><GrApps/></Button>
          <Button className='btn-user' onClick={toggleBio} >RA</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      {isApp && <Applications/>}
    </div>
    <div>
      {isBio && <Profile/>}
    </div>
    </div>

  );
}

export default Header;