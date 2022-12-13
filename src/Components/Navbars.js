import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './navbar.css'
const Navbars = () => {
    const Navigate = useNavigate ()
  return (

    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className='movie' onClick={() => Navigate('/')}> <span><img className='logo' src='https://previews.123rf.com/images/ylivdesign/ylivdesign1211/ylivdesign121100088/16526995-blue-movie-logo-on-a-black-background.jpg' alt = 'logo'/></span>Movie<span className='Ap'>App</span> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => Navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => Navigate('/Contactus')}>Contact-Us </Nav.Link>
            <Nav.Link onClick={() => Navigate('/descritpion')}>Description </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbars