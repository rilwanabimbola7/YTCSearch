import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Search from './Search';
import Footer from './Footer';
import { useState, useEffect } from "react";
import axios from 'axios';



function Ytcsearch({items,loading,error, toggleBio, toggleApp, isBio, isApp}) {


  return (
    <div>
      <Header
      toggleBio = {toggleBio}
      toggleApp = {toggleApp}
      isBio = {isBio}
      isApp = {isApp}
      />
      <Search
      items = {items}
      loading = {loading}
      error = {error}
      placeholder= {'Enter a country name'}
      
      />
      <Footer/>
    </div>
  );
}

export default Ytcsearch;

