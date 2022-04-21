import React from 'react';
import styled from 'styled-components';


const Resultados =()=>{
    return(
        <ResultadosStyled>
            <div className='resultadosBox shadow p-3 mb-5'>
            
                <div className='resultadosCard'>
                    <h2>50+</h2>
                    <p>Clientes felices</p>
                </div>
                <div className='resultadosCard'>
                    <h2>130+</h2>
                    <p>Trabajos culminados</p>
                </div>
                <div className='resultadosCard'>
                    <h2>30+</h2>
                    <p>Profesionales</p>
                </div>
            </div>
        </ResultadosStyled>
    )
}


const ResultadosStyled = styled.div`

    width:90%;
    margin-left:5%;
    

    .resultadosBox{
        display:flex;
        justify-content:space-around;  
        align-items:center;     
        border-radius:2em; 
    }

    .resultadosCard{
        display:flex;
        flex-direction:column;
        align-items:center;

        h2{
            color:#FF0033;
        }

        p{
            color:#38405F;
        }
    }
`

export default Resultados