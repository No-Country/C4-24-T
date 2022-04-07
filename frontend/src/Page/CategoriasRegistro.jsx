import React from 'react'
import styled from 'styled-components';
import { MainLayout } from '../styles/Layouts';
import resume from '../image/circulo.png'
import { Link } from 'react-router-dom';


const CategoriasRegistro = () => {
    return (
        <>
        <MainLayout>
        <ImageSectionStyled>
            <div className='contenido'>
                <h1>Registro</h1>
            <h2>¿Cuál de estas categorias se acomoda mejor a tus necesidades?</h2>
            </div>
            <div className='alineacion'>
            <div className="left-content">
                
                <p><span>Cliente</span></p>
                <Link to='/registrocliente'>
                <img src={resume} alt="" to='/registrocliente'/>
                </Link>
            </div>
            <div className="right-content">
                
            <p><span>Profesional</span></p>

                <Link to='/registroprofesional'>
                <img src={resume} alt="" to='/registrocliente' />
                </Link>
                

                
            </div>
            </div>
            
        </ImageSectionStyled>
        </MainLayout>
        
        </>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    
    
    
    .alineacion{
        display: flex ;
    }
    .contenido{
        display: flex ;
        margin-bottom: 10rem;
    flex-direction: column;
    align-content: stretch;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;;
    }
    .left-content{
        width: 100%;
        display:flex ;
        justify-content: space-around;
        align-content: space-around;
        flex-wrap: wrap;
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: center;
        a{
            display:flex ;
        justify-content: space-around;
        align-content: space-around;
        flex-wrap: wrap;
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: center; 
        }
        img{
            width: 30%;
            border-radius: 50% ;

        }
    }
    .right-content{
        width: 100%;
        display:flex ;
        justify-content: space-around;
        align-content: space-around;
        flex-wrap: wrap;
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: center;
        img{
            width: 30%;
            border-radius: 50% ;

        }
        a{
            display:flex ;
        justify-content: space-around;
        align-content: space-around;
        flex-wrap: wrap;
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: center; 
        }
    }
    
`;

export default CategoriasRegistro