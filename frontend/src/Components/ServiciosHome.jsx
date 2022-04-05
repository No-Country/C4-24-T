import React from 'react'
import styled from 'styled-components';
import { MainLayout } from '../styles/Layouts'

const ServiciosHome = () => {
    return (
        <MainLayout>
            <ServicioStyled>
            <div className='servici'>
                <h1>Servicios</h1>
            </div>
            <div className='parrafo'>
                <h1>Nuestros profesioneales estan verificados por diferentes entidades para que tengas servicio de Calidad</h1>
            </div>
            </ServicioStyled>
        </MainLayout>
    )
};
const ServicioStyled = styled.div`
    display: flex ;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;

`;
export default ServiciosHome