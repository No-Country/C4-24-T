import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CardsComp from '../components/CardsComp';
import { ProgressBar } from 'react-bootstrap';
import FooterComp from '../components/FooterComp';


function HomeView() {
    const [emprendedores, setEmprendedores] = useState(null);

    const [imagenes, setImagenes] = useState(null);


    useEffect(() => {
        async function getEmprendedores() {
            if (!emprendedores) {
                try {
                    const response = await Axios({
                        method: 'get',
                        url: `/user`,
                        responseType: 'json',
                    });
                    setEmprendedores(response.data.emprendedores);

                    setImagenes(imagenes ?? response.data.emprendedores);

                    return emprendedores;
                } catch (error) {
                    console.log(error);
                }
            }
        }
        getEmprendedores();
    });

    if (emprendedores && imagenes) {
        return (
            <>
                
                
                <div style={{ minHeight: '500px' }}>
                    <CardsComp data={emprendedores} />
                </div>
            </>
        );
    }
    return (
        <>
            
            <div className="container" style={{ height: '500px' }}>
                <ProgressBar animated now={45} />
            </div>
            <FooterComp />
        </>
    );
}

HomeView.propTypes = {};

export default HomeView;
