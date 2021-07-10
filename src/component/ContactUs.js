import React from 'react'
import { Container,NavDropdown,Navbar,Nav,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const ContactUs = () => {
    return (
        <>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
  <Navbar.Brand href="#home">Think of It Foundation</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto m-auto">
      <Nav.Link href="#">   <Link to="/">Home</Link></Nav.Link>
      <Nav.Link href="#">Youth Led-TOI</Nav.Link>
      <NavDropdown title="Join The Movement" id="collasible-nav-dropdown">
        <NavDropdown.Item href="">TOI-Youth Leadership Program</NavDropdown.Item>
        <NavDropdown.Item href="">Reach To Teach(R2T)</NavDropdown.Item>
        <NavDropdown.Item href="#">Raise A Dream</NavDropdown.Item>
        <NavDropdown.Divider />
     
      </NavDropdown>
    </Nav> 
    <Nav>
     <Button className="btn btn-primary" style={{borderRadius:"40px"}}>Donate</Button>
     <Nav.Link href="#home">
                <Link to="/contact">Contact Us</Link>
            </Nav.Link>
      <Nav.Link eventKey={2} href="" className="mx-4">
      <Link to="/login">Login</Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar> 

<div className="container  mt-5" style={{textAlign:"center"}}><h1>Welcome To Contact Us  Page</h1></div>


        </>
    )
}

export default ContactUs
