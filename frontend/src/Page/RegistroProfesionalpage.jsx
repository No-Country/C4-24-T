import React from 'react';
import { MainLayout } from '../styles/Layouts';
import { RegistroComp } from '../Components/registroProfesional/RegistroComp';

function RegistroProfesionalpage() {
    return (
        <MainLayout className="contenedor">
            
            <RegistroComp />
        </MainLayout>
    );
}

export default RegistroProfesionalpage;
