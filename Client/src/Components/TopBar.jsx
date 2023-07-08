import React from 'react'
import {Navbar,Nav,Container,Image} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const TopBar = () => {
  return (
   <>
   <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >
            <Image  style={{height:'60px' ,width:'60px'}} src="/images/Pizza_logo.png"></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/login">
            <Nav.Link >Login</Nav.Link>   
            </LinkContainer>
            <LinkContainer to="/Cart">
            <Nav.Link >Cart</Nav.Link>   
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}
export default TopBar
