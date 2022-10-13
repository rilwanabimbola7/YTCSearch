import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";

import SearchBody from '../components/SearchBody'
import Footer from '../components/Footer'

import { useParams } from "react-router-dom";
import { GrApps } from 'react-icons/gr';
import {Container, Navbar, Nav, Button} from 'react-bootstrap';
import logo from '../images/ytc.jpg'
import Applications from '../components/Applications'
import Profile from '../components/Profile'
import { AiOutlineSearch, AiOutlineSetting } from 'react-icons/ai';
import {BsMicFill} from 'react-icons/bs'



function SearchResult({items,loading,error}) {
  const { searchtext } = useParams();

  const [list, setList] = useState(false);
  const [isApp, setIsApp] = useState(false);
  const [isBio, setIsBio] = useState(false);
  
  const toggleApp = () => {
    setIsBio(false)
    setIsApp(!isApp);
  }
  const toggleBio = () => {
    setIsApp(false)
    setIsBio(!isBio)
  }
  
  const [searchField, setSearchField]= useState(searchtext);
  const [bodysearch, setBodysearch]= useState(searchField)
  

 
  const filteredNames = items.filter(
    data => {
        if (searchField ==""){
            return data
        }else if (data.name.toLowerCase().includes(searchField.toLowerCase())){
            return data
        }
        
      }
  );

  const handleClick = () =>{
    setSearchField('')
    setSearchField(bodysearch)

  }


  const handleChange = (event) =>{
    const input = event.target.value;
    setBodysearch(input)

  }



  function searchList(){
    return (
        <div>
            <SearchBody 
            filteredNames = {filteredNames}
            loading = {loading}
            error = {error}
            
            />
        </div>
    );
  }
  
  return (
    
    <div>
      <div>
        <Navbar fixed = "top" className= 'nav-bar'>
          <Container>
            <Navbar.Brand href="#home">
                <img
                src={logo}
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="ytc logo"
                />
            </Navbar.Brand>
            <Nav>
              <div className="searchHeader-div" style={{borderRadius: list ? '20px 20px 0px 0px':'20px 20px 20px 20px'}}>
                <AiOutlineSearch/>
                <input className="search-input" defaultValue={searchField}  onChange={handleChange}></input>
                                
                <button className='btn-update'><BsMicFill/></button>
                <button className='btn-update' onClick={handleClick} ><AiOutlineSearch/></button>
              </div>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
              <Button className = "btn-setting"><AiOutlineSetting/></Button>
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
      {searchList()}
        
        <Footer/>
    </div>
  );
}

export default SearchResult;
