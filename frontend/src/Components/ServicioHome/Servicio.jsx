import React from 'react'
import styled from 'styled-components'
import cert1 from '../../image/cert1.jpeg';
import cert2 from '../../image/cert2.jpeg';
import cert3 from '../../image/cert3.jpeg';
import cert4 from '../../image/cert4.jpeg'; 



const Servicio = () => {
    return (
    <ServicioStyled>  

    <div className='certNavBar shadow p-3 mb-5 rounded'>
        <div className='certCtn'><img src={cert1} alt='certificacionProf'/></div>
        <div className='certCtn'><img src={cert2} alt='certificacionProf'/></div>
        <div className='certCtn'><img src={cert3} alt='certificacionProf'/></div>
        <div className='certCtn'><img src={cert4} alt='certificacionProf'/></div>
    </div>

    </ServicioStyled>
    )
}
const ServicioStyled = styled.div`     

    .certNavBar{
        margin-left:5%;
        width:90%;
        display:flex; 
        justify-content:space-around;  
        background-color: #f7f7f7;     
        
    }
   

    img{
        width:10em;
        height:9em;
    }


`;

export default Servicio