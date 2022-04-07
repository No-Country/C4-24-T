import React from 'react';
import { MainLayout } from '../styles/Layouts';
import {RegistroClientComp} from '../Components/registroCliente/RegistroClientComp'

function RegistroClientesPage() {
    return (
        <MainLayout className="contenedor">
            <RegistroClientComp/>
        </MainLayout>
    );
}

export default RegistroClientesPage;
