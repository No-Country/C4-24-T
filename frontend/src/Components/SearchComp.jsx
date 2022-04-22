import React, { useState } from 'react';
import {
    Navbar,
    Form,
    FormControl,
    Button,
    Nav,
    Container,
} from 'react-bootstrap';
import { Categorias } from '../libs/search.lib';

function SearchComp(props) {
    const { loadEmprendedores } = props;

    const [actividad, setActividad] = useState('Categorias');
    const [nombre, setNombre] = useState('');

    // Boton Buscar
    const load = () => {
        const param1 = actividad === 'Categorias' ? '' : actividad;
        
        const param = {
            actividad: param1,
            
            nombre,
        };
        loadEmprendedores(param);
    };

    

    // Creacion de options para selects
    const options = (item, i) => (
        <option key={i} value={item}>
            {item}
        </option>
    );
    return (
        <>
            <Navbar className='fondo-nav'
                collapseOnSelect
                expand="lg"
                variant="dark"
                sticky="top"
                style={{top: '105px'}}
            >
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <select
                                className="form-select m-1"
                                value={actividad}
                                onChange={(e) => setActividad(e.target.value)}
                            >
                                {Categorias.map((item, i) => options(item, i))}
                            </select>
                            
                        </Nav>
                        <Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Buscar"
                                    className="me-2"
                                    aria-label="Buscar"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                                <Button
                                    variant="outline-primary"
                                    onClick={load}
                                >
                                    Search
                                </Button>
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default SearchComp;
