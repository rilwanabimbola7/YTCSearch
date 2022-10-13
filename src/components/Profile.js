import React, {useState} from 'react';
import '../index.css';
import { AiOutlineCamera, AiOutlineUserAdd} from 'react-icons/ai';
import {Card, ListGroup, Button} from 'react-bootstrap';
import passport from '../images/passport.jpg'


function Profile() {

  return (
    
    <Card className = "profile">
      <Card.Img variant="top" src={passport} className= 'profile-photo'/>
      <button className = 'upload'><AiOutlineCamera/></button>
      <Card.Body className='bio'>
        <Card.Title className='card-title'>Rilwan Abimbola</Card.Title>
        <Card.Text> rilwanabimbola7@gmail.com</Card.Text>
        <button className='btn-manage'> Manage your Account</button>
      </Card.Body>
      <ListGroup className="list-group-flush ">
        <ListGroup.Item className='list-bg'>
            <AiOutlineUserAdd/>{'   '}Add another account </ListGroup.Item>
        <ListGroup.Item className='bio'><button className='btn-manage'>sign out of all accounts</button></ListGroup.Item>
      </ListGroup>
      <Card.Body className='bio'>
        <Card.Link href="#">Privacy</Card.Link>
        <Card.Link href="#">Terms of Service</Card.Link>
      </Card.Body>
    </Card>
           
        
    

  );
}

export default Profile;