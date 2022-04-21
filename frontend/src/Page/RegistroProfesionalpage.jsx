import React from 'react';
import { MainLayout } from '../styles/Layouts';
import { RegistroProfesional } from '../Components/registroProfesional/RegistroComp';

function RegistroProfesionalpage() {
    return (
        <MainLayout className="contenedor">
            
            <RegistroProfesional />
        </MainLayout>
    );
}

export default RegistroProfesionalpage;
