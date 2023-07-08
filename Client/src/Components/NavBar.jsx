import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {MdLocalOffer} from 'react-icons/md'
const NavBar = () => {
  return (
    <>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <h6 className="text-light"> 
                <MdLocalOffer className="text-warning" /> &nbsp;&nbsp;
                Free Home Delivery on Order above 500/- Rupees</h6>
            <Nav className="ms-auto">
            <LinkContainer to="/"  activeclassName>
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" activeclassName>
                <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" activeclassName>
                <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/policy" activeclassName>
                <Nav.Link>Terms and Policy</Nav.Link>
            </LinkContainer>
            </Nav>
        </Container>
        </Navbar>
    </>
  )
}

export default NavBar