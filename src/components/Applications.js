import React from 'react';
import '../index.css';
import twitter from '../images/twitter.jpg'
import gmail from '../images/email.jpg'
import facebook from '../images/facebook.png'
import github from '../images/github.png'
import instagram from '../images/instagram.jpg'
import linkedinn from '../images/linkedinn.png'
import world from '../images/world.png'


function Applications() {

  return (
    <main className='apps-container'>
        <div>
            <img src = {twitter} className = "apps"/>
            <img src = {gmail} className = "apps"/>
            <img src = {facebook} className = "apps"/>
            <img src = {github} className = "apps"/>
            <img src = {instagram} className = "apps"/>
            <img src = {linkedinn} className = "apps"/>
            <img src = {world} className = "apps"/>
            <img src = {twitter} className = "apps"/>
            <img src = {gmail} className = "apps"/>
            <img src = {facebook} className = "apps"/>
            <img src = {github} className = "apps"/>
            <img src = {instagram} className = "apps"/>
        </div>
    </main>

  );
}

export default Applications;