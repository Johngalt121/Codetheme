import React from "react";
import  logo  from "../Assets/download.png"

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
  } from 'reactstrap';

const Header=()=>{
 return (
    <Navbar  style={{boxShadow: `0px 4px 4px 2px #AAAAAA40`,border: '1px solid #FFFFFF',
    height: '75px'
    }}>
            <NavbarBrand style={{ marginLeft:"5%"}}>
            <img
            alt="logo"
            src={logo}
            style={{
              height: 80,
              width: 180,
              marginTop:"-10%"
            }}
          />
            </NavbarBrand>
            <NavbarText  style={{color:'#238DC9', fontFamily:"Poppins",fontSize:"30px",fontWeight:"500",lineHeight:"30px",  width: "386px",
        height: "42px",
      
        left: "906px", marginRight:"5%"}}  > Budget Allocation System</NavbarText>
            </Navbar>
 )

}

export default Header;