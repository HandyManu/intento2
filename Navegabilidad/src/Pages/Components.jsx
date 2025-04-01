import React, { useState } from 'react';
import '../Pages/Components.css'
import Boton from '../Components/Boton.jsx';
import Dividers from '../Components/Dividers.jsx';
import Acordeon from '../Components/Acordeon.jsx';
import Verde from '../Components/Verde.jsx';


const Components = () => {
    return (
        <>
        <h1>20 Components </h1>
       <Boton/>
       <br/>
       <Dividers/>
       <br/>
       <Acordeon/>
       <br/>
       <Verde/>
       <br/>
        </>
        
    );
};

export default Components;
