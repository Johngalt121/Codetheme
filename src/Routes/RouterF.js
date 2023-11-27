import React from 'react';
import { Routes, Route } from "react-router-dom"; 
import Home from '../Pages/Home';
import Project from '../Pages/Project';
import Header from '../Pages/Header';
import Company from '../Pages/Company';

const RouterF=()=>{
    return (
        <>
         <Header/>
          <Routes>
        <Route element={<Home/>} path='/' exact={true}/>
        <Route element={<Project/>} path="/project" />
        <Route element={<Company/>} path="/company" />
     </Routes>
        
        </>
      
    )
    
}


export default RouterF;