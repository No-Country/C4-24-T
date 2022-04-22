import React from 'react'
import styled from 'styled-components';
import { MainLayout } from '../../styles/Layouts'
/* import Card from 'react-bootstrap/Card' */
import profesionales from '../../image/profesionalesCard.jpeg';
import certificacion from '../../image/certificacionesCard.jpeg'
import experiencia from '../../image/ExperienciasCard.jpeg'
import ayuda from '../../image/ayudaCard.jpeg'

/* import CardGroup from 'react-bootstrap/CardGroup' */


const ServiciosHome = () => {
    return (
        <MainLayout>
            <ServicioStyled>
            <div className='servici'>
                <h1>Servicios</h1>
            </div>
            <div className='parrafo'>
                <h2>Nuestros especialistas cuentan con<br></br>certificaciones de ideoneidad y seguridad para<br></br>que tengas un servicio de calidad.</h2>
            </div>

            <div className='serviciosCardsContainer'>
                <div className='cardContainer'>
                <img src={profesionales} alt="registra" className='serviciosCard'/>
                </div>

                <div className='cardContainer'>
                <img src={certificacion} alt="registra" className='serviciosCard'/>
                </div>

                <div className='cardContainer'>
                <img src={experiencia} alt="registra" className='serviciosCard'/>   
                </div>


                <div className='cardContainer'>
                <img src={ayuda} alt="registra" className='serviciosCard'/>
                </div>

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
        color: #FF0035;
        
    }
    .parrafo{
        display: flex ;
        color: #0F131F;
        text-align:center;
        justify-content:center;
        
    }
    h1{
        font-size: 50px;
        font-weight: bold;
    }

    .card-gruop{
        background-color:#37405F;
    }

    .serviciosCardsContainer{
        margin:5%;
        width:90%;
        heigth:30%;
        display:flex;
        justify-content:space-around;
        align-items:center;
        background-color:#37405F;
        border-radius:5em;
    }

    .serviciosCard{
        margin-top:15%;
        margin-bottom:15%;
        border-radius:2em;
    }

    .cardContainer:hover{
      
  

        transform: translateX(10px) rotate(10deg) translateY(5px) ;
        transition: 0.1s;
        cursor:pointer;
       

    }
    

`;
export default ServiciosHome



/* cards funcionales, con bootstrap */


/* <div className='card-gruop'>
            <CardGroup>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Img variant="top" src={registra} />
                    
                        
                    
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Img variant="top" src={certificacion} />
                    
                        
                    
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Img variant="top" src={experiencia} />
                    
                       
                    
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Img variant="top" src={ayuda} />
                                       
                </Card.Body>
            </Card>
            </CardGroup>
</div> */