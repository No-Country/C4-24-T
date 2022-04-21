import React from 'react'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'
import resume from '../image/paisa.jpg';
import { InnerLayout, MainLayout } from '../styles/Layouts';
import Carrusel from '../Components/Carrusel/Carrusel';
import ServiciosHome from '../Components/ServicioHome/ServiciosHome';
import Servicio from '../Components/ServicioHome/Servicio';
import FooterComp from '../Components/footer/FooterComp';
import Resultados from '../Components/ServicioHome/Resultados';





function Home() {
    return (
        <>
        <MainLayout>
        <ImageSectionStyled>
            
            <div className="right-content">
                <h4><span>¿Necesitas ayuda</span> y estás en <span>busca</span> de un profesional? </h4>
                <p className="paragraph">
                    Contáctate con nuestros especialistas. <br></br> Están certificados y te van a brindar el <br></br> mejor servicio.                    
                </p>
                <div className='boton'>
                <Button variant="primary" size="sm" className='styledButton shadow-sm p-3 mb-5'>Explorar Servicios</Button>
                </div>
            </div>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            
        </ImageSectionStyled>
        </MainLayout>
        <InnerLayout>
        <Servicio/>
        </InnerLayout>
        <MainLayout>
        <InnerLayout>
        <Carrusel/>
        </InnerLayout>
        </MainLayout>
        <ServiciosHome/>
        <Resultados/>
        <FooterComp/>
        </>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    width:90%;
    margin-left:10%;
    
    @media screen and (max-width:1000px){
        flex-direction: column-reverse;
        .left-content{
            margin-bottom: 2rem;
        }
    }

    .left-content{
        width: 100%;
        display:flex ;
        justify-content: space-around;
        align-content: space-around;
        flex-wrap: wrap;
        
        img{
            width: 100%;
            
            position:relative;
            left:-20%;
            z-index:-10;  

        }
    }
    .right-content{
        width: 80%;
        
        
        
        h4{
            
            font-size: 4rem;
            margin-top: 5rem;
            
            @media screen and (max-width:1400px){
                font-size: 3.5rem;
            }
            @media screen and (max-width:1200px){
                font-size: 3.2rem;
            }
            @media screen and (max-width:1000px){
                font-size: 3rem;
                margin-top: 2rem;
            }
            @media screen and (max-width:800px){
                font-size: 2.5rem;
                margin-top: 1.5rem;
            }
            @media screen and (max-width:650px){
                font-size: 2rem;
                margin-top: 1rem;
            }
            @media screen and (max-width:522px){
                font-size: 1.8rem;
                margin-top: .9rem;
            }
        }

        span{
            color:#FF0035;
            font-size: 4rem;
            margin-top: 5rem;
             }

      

        .paragraph{
            padding: 1rem 0;
            font-size: 1.5rem ;
            @media screen and (max-width:800px){
                font-size: 1.2rem;
            }
            @media screen and (max-width:650px){
                font-size: 1rem;
            }
            @media screen and (max-width:522px){
                font-size: .8rem;
            }
        }      

        .styledButton{
            border-radius:2em;
            background-color:#38405F;
            width:50%;
            
        }
    }
    
`;
export default Home;
