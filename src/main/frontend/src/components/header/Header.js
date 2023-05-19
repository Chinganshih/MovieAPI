import './Header.css';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar ng="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href='/' style={{"color":"black"}}>
                <img 
                    src="https://sominchw.sirv.com/Images/Clothes/candy.jpg" 
                    width="50" 
                    height="50" 
                    alt=""
                   ></img> 
                AnnaThriftShop
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbarScroll' /> 
            <Navbar.Collapse id="navbarScroll">
             <Nav
                    className='me-auto'
                    color='black'
                    style={{maxHeight: '100px'}}
                    navbarScroll
            >
                <NavLink className="nav-link" to= "/About" style={{"color":"black"}}>About</NavLink>
                <NavLink className="nav-link" to= "/Cloth" style={{"color":"grey"}}>Women's Cloth</NavLink>
                <NavLink className="nav-link" to= "/MenCloth" style={{"color":"black"}}>Men's Cloth</NavLink>
                <NavLink className="nav-link" to= "/Accessory" style={{"color":"grey"}}>Accessory</NavLink>
                <NavLink className="nav-link" to= "/Shoes" style={{"color":"black"}}>Shoes</NavLink>
                <NavLink className="nav-link" to= "/Other" style={{"color":"grey"}}>Other</NavLink>
                <NavLink className="nav-link" to= "/ContactUs" style={{"color":"black"}}>Contact us</NavLink>
            </Nav>
                <Button >Login</Button>
                <Button >Register</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header