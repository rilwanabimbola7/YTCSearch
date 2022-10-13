import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import { useState, useEffect } from "react";
import axios from 'axios';


function SearchBody({error, loading, filteredNames}) {


  if (error){
    return <>{error.message}</>;
  }else if (!loading){
    return <>Loading...</>;
  }else {
  return (
    <div>
      {filteredNames.map((item) => (
      <div key = {item.name} className='search-body'>
        <div>{item.name} <button className='btn-para'>:</button></div>
        <h3><a href = {item.web_pages}>{item.name} </a></h3>
        <div> Welcome to {item.name}</div>
      </div>
      ))}
    </div>
    
    
    
  );
}
}

export default SearchBody;

/*
<div className='search-body'>
      <div>www.yahoomail.com <button className='btn-para'>:</button></div>
      <h3><a href = 'www.yahoomail.com'>yahoo mail inbox </a></h3>
      <div> welcome to yahoomail your gfhgfjhjhv b</div>
    </div>


      <Header/>
      <Search
      items = {items}
      loading = {loading}
      error = {error}
      placeholder= {'Enter a country name'}
      />
      <Footer/>
    */