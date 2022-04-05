import React from 'react'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'
import resume from '../image/paisa.jpg';
import { InnerLayout, MainLayout } from '../styles/Layouts';
import Carrusel from '../Components/Carrusel';
import ServiciosHome from '../Components/ServiciosHome';
import Servicio from '../Components/ServicioHome/Servicio';




function Home() {
    return (
        <>
        <MainLayout>
        <ImageSectionStyled>
            
            <div className="right-content">
                <h4>¿Necesitas ayuda y estás en buscando de un profesional? </h4>
                <p className="paragraph">
                    contáctate con nuestros especialistas. Están certificados y te van a brindar el mejor servicio.
                    
                </p>
                <div className='boton'>
                <Button variant="primary">Explorar Servicios</Button>
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
        </>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    
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
            width: 70%;
            border-radius: 50% ;

        }
    }
    .right-content{
        width: 100%;
        
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
    }
    
`;
export default Home;
