import logo from '../image/circulo.png';
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavbarComp() {

    const salir = () => {
        sessionStorage.clear();
        window.location.href= '/'
    };

    return (
        <>
            <Navbar className='color-nav'
                collapseOnSelect
                expand="lg"
                variant="dark"
                sticky="top"
            >
                <Container>
                    <Navbar.Brand as={Link} to={'/'}>
                        <img src={logo} width="100" height="80" alt="logo" />
                        
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link as={Link} to={'/'}>
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to={'/servicios'}>
                                Servicios
                            </Nav.Link>
                            <Nav.Link as={Link} to={'/nosotros'}>
                                Nosotros
                            </Nav.Link>
                            {sessionStorage.getItem('rol') ? (
                                <Nav.Link as={Link} to={'/admin/data'}>
                                    Administrador
                                </Nav.Link>
                            ) : null}
                            {sessionStorage.getItem('nombre') ? (
                                <Nav.Link as={Link} to={'/emprendedor'}>
                                    Emprendedor
                                </Nav.Link>
                            ) : null}
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to={'/login'}>
                                Login
                            </Nav.Link>
                            <Nav.Link as={Link} to={'/signup'}>
                                Registrate
                            </Nav.Link>
                            {sessionStorage.getItem('token') ? (
                                <Nav.Link
                                    as={Link}
                                    onClick={() => salir()}
                                    to={''}
                                >
                                    Salir
                                </Nav.Link>
                            ) : null}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
