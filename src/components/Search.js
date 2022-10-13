import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image} from 'react-bootstrap';
import ytc from '../images/ytcwhite.jpg';
import { AiOutlineSearch } from 'react-icons/ai';
import {BsMicFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'



function Search ({placeholder, loading, items, error}) {
    const [list, setList] = useState(false);
    const [filteredData, setFilteredData] = useState([])

    const [inputValue, setInputValue] = useState("");
    
    
    function keyHold(event){
        setList(false)
        setInputValue('')
        const value = event.target.textContent
        setInputValue(value)
    }   
   

    function toggle(){
        setList(true);
        
    }

    function handleFilter(event){
        setInputValue('')
        const searchWord = event.target.value;
        setInputValue(searchWord)
        const newFilter = items.filter((item) => {
            return item.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        
        if (searchWord==="marywood") {
            setFilteredData([]);
        }else {
            setFilteredData(newFilter);
        }  
    };
    
    return(
        <div className="search">
            <Image src = {ytc} className = "ytc-logo"/>
            <div className="search-div" style={{borderRadius: list ? '20px 20px 0px 0px':'20px 20px 20px 20px'}}> 
                <AiOutlineSearch/>
                <input className="search-input" value = {inputValue} placeholder={placeholder} onClick = {toggle} onChange={handleFilter}></input>
                <BsMicFill/>
            </div>
             
            {filteredData.length != 0 && list && <div className= "search-dropdown">
                {filteredData.slice(0,5).map((item) => (
                    
                    <p className="dataItem" key = {item.name} onClick={keyHold}>{item.name}</p>
                    
                ))}
            </div>}
            <div >
                <Link to={`/search/${inputValue}`}>
                    <button className="btn-search"> YTC search</button>
                </Link>
                
                <button className="btn-search"> I'm feeling lucky</button>
                
            </div>
        </div>
    );
}
export default Search;
/*
                    <a className="dataItem" key = {item.name} href = {item.web_pages} target ="_blank" >
                        <p>{item.name}</p>
                    </a>

                    */