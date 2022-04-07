import React from 'react'
import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from '../../image/circulo.png'
import registrar from '../../image/registra.png'


const Navbarview = () => {
    return (
        <header>
        <Navbar className='color-nav' collapseOnSelect expand="lg"  fixed="top" variant="dark">
            <Container>
            <LinkContainer to="/">
                <Navbar.Brand> <img src={logo} alt="logo" /> </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                <Nav.Link href="#features">Servicios</Nav.Link>
                </Nav>
                <Nav className="mx-auto">
                <Nav.Link href="#pricing">Profesionales</Nav.Link>
                </Nav>
                <Nav className="mx-auto">
                <Nav.Link href="#deets">Nosotros</Nav.Link>
                </Nav>
                <Nav className="mx-auto">
                <Nav.Link href="/logincliente">Ingresar</Nav.Link>
                </Nav>
            <LinkContainer to="/CategoriaRegistro">
                <Navbar.Brand > <img src={registrar} alt="logo" /> </Navbar.Brand>
            </LinkContainer>
            
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
    )
}

export default Navbarview