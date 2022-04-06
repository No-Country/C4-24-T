import React from 'react'
import styled from 'styled-components';
import { MainLayout } from '../styles/Layouts'
import Card from 'react-bootstrap/Card'
import registra from '../image/profesional.png'
import certificacion from '../image/certificacion.png'
import experiencia from '../image/experiencia.png'
import Button from 'react-bootstrap/esm/Button';
import CardGroup from 'react-bootstrap/CardGroup'


const ServiciosHome = () => {
    return (
        <MainLayout>
            <ServicioStyled>
            <div className='servici'>
                <h1>Servicios</h1>
            </div>
            <div className='parrafo'>
                <h2>Nuestros profesioneales estan verificados por diferentes entidades para que tengas servicio de Calidad</h2>
            </div>
            <div className='card-gruop'>
            <CardGroup>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Img variant="top" src={registra} />
                    
                        <Card.Text>
                            Profesionales
                        </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Img variant="top" src={certificacion} />
                    
                        <Card.Text>
                            Certificaciones
                        </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Img variant="top" src={experiencia} />
                    
                        <Card.Text>
                            Experiencias
                        </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Img variant="top" src={experiencia} />
                <Card.Title>Ayuda</Card.Title>
                        <Card.Text>
                            ¿Tiene alguna duda, queja o sugerencia?
                        </Card.Text>
                        <Button variant="primary">➨</Button>
                </Card.Body>
            </Card>
            </CardGroup>
            </div>
            
            </ServicioStyled>
        </MainLayout>
    )
};
const ServicioStyled = styled.div`
    
    
    .servici{
        display: flex ;
        margin: 1rem ;
        justify-content: space-around ;
    }
    .parrafo{
        display: flex ;
        
    }
    h1{
        font-size: 50px;
        font-weight: bold;
    }
    

`;
export default ServiciosHome