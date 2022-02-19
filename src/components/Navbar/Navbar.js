import React from 'react'
import './Navbar.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
function entete() {
    return (
        <div className="container">
 
    <Container className="row" >

    <p className="col-6">Med Amine Azzabi</p>


      <a class="col-2" href="/about">About</a>
      <a class="col-2" href="/careers">Project</a>
      <a class="col-2" href="/contact">Contact</a>
   
    </Container>
  
        </div>
    )
}

export default entete;
