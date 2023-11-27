import React, { useState } from 'react';
import "../Styles/dropdown.css";
import  logo  from "../Assets/download.png"

import {
  
  Container,
  Col,Row, Button, Modal, ModalHeader, ModalBody, ModalFooter 
} from 'reactstrap';
import Select from 'react-select'
import { useNavigate } from 'react-router-dom';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
const Dropdownlist =()=>{
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const navigate = useNavigate();
  return (
    <>   
    <Container >
    <Row   style={{ padding:"2%", marginLeft:"55%"}}>
    <Col > 
     
     <button type="button" class="btn btn-info" onClick={toggle} >
  Add Budget <i class="bi bi-trash"></i> 
 </button>
       </Col>
      <Col > 
     
      
      
 <button type="button" class="btn btn-info" onClick={()=>{ navigate("/project")}} >
 Add Project <i class="bi bi-trash"></i> 
</button>

    </Col>
    <Col > 
    <button type="button" class="btn btn-info" onClick={()=>{ navigate("/Company")}} >
 Add Company <i class="bi bi-trash"></i> 
</button>
  
    </Col>
   

     </Row>


      <div  style={{marginLeft:"25%", marginRight:"25%"}}>
    <Row   className='d-flex' style={{padding:"5%"}}>
      <Col  className='d-flex'> 
     <label>Location </label>
    <Select options={options} className='Dropdown'  />
    </Col>
    <Col  className='d-flex'><label >Initiative </label>
    <Select options={options} className='Dropdown'/></Col>

     </Row>
     <Row  className='d-flex' style={{paddingLeft:"5%"}}>
      <Col  className='d-flex'> 
     <label>Project{'  '} </label>
    <Select options={options} className='Dropdown' />
    </Col>
    <Col className='d-flex'><label >Period{''} </label>
    <Select options={options} className='Dropdown' /></Col>

     </Row>
     
     <Row   style={{ padding:"5%"}}>
      <Col style={{display:"flex", alignItems:"center", justifyContent:"center"}}> 
     
   <Button className='bg bg-primary'>Run Budget</Button>
    </Col>
   

     </Row>


     </div>
    </Container>
    <Modal isOpen={modal} toggle={toggle} centered={true} >
        <ModalHeader toggle={toggle} >Add Budget</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )



}

export default Dropdownlist