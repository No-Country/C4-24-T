import React from 'react'
import styled from 'styled-components';
import { MainLayout } from '../../styles/Layouts'
/* import Card from 'react-bootstrap/Card' */
import profesionales from '../../image/cardsASsets/Website builder.png';
import certificacion from '../../image/cardsASsets/Detailed analysis.png'
import experiencia from '../../image/cardsASsets/Feedback.png'
import ayuda from '../../image/cardsASsets/Respond.png'

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
                <img src={profesionales} alt="registra" className='serviciosCardImg'/>
                <p>Profesionales</p> 
                </div>

                <div className='cardContainer'>
                <img src={certificacion} alt="registra" className='serviciosCardImg'/>
                <p>Certificaciones</p>
                </div>

                <div className='cardContainer'>
                <img src={experiencia} alt="registra" className='serviciosCardImg'/>   
                <p>Experiencias</p>
                </div>


                <div className='cardContainer'>
                <img src={ayuda} alt="registra" className='serviciosCardImg'/>
                <p>Ayuda</p>
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

   
    .serviciosCardsContainer{
        margin:5%;
        width:90%;
        heigth:30%;
        display:flex;
        justify-content:space-around;
        align-items:center;
        background-color:#37405F;
        border-radius:2.3em;
    }

    img{
        width:100%;
        margin:1em;
        
    }

    .cardContainer{
        margin-top:1em;
        margin-bottom:1em;
        background-color:#C4C4C4 ;
        display:flex;
        flex-direction:column;
        
        align-items:center;
        width:18%;
        border-radius:2.3em;

        
    }

    .cardContainer:hover{    
  

      transform: translateX(10px) rotate(10deg) translateY(5px) ;
      transition: 0.1s;
      cursor:pointer;
     

  }
    


   
    

`;
export default ServiciosHome



