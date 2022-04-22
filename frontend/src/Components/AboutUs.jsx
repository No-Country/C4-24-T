import React from "react";
import styled from "styled-components";
import { MainLayout } from "../styles/Layouts";
import img1 from '../image/aboutUsAssets/img1.jpeg'
import img2 from '../image/aboutUsAssets/img2.jpeg';
import img3 from '../image/aboutUsAssets/img3.jpeg';
import img4 from '../image/aboutUsAssets/img4.jpeg';



function AboutUs() {
    return (
        <MainLayout>
            <StyledAboutUsFirst>
                <div className="firstContainer">
                    <img src={img1} alt='quienes somos img'/>
                    <div className="titleAndParagraph">
                        <h2>¿Quiénes somos?</h2>
                        <h3>Somos una empresa que ayuda a<br></br>generar contactos entre profesionales<br></br>y clientes que se necesitan.</h3>
                    </div>
                </div>

                <div className="secondContainer">
                    <h3>Nuestros profesionales<br></br>brindan servicios de<br></br><span>calidad</span> y <span>eficiencia</span></h3>
                    <img src={img2} alt='calidad y eficiencia'/>
                </div>

                <div className="thirdContainer">
                    <img src={img3} alt='menor tiempo'/>
                    <h3>Brindamos un servicio en<br></br>el <span>menor tiempo</span> posible<br></br> para satisfacer<br></br> las necesidades de nuestra<br></br> clientela</h3>
                </div>

                <div className="fourthContainer">
                    <h3>Generamos un contacto<br></br>entre profesionales y<br></br>clientes para <span>satisfacer la<br></br>necesidad</span>existente</h3>
                    <img src={img4} alt='satisfacer necesidades'/>
                </div>
                
                




                
                
                
            </StyledAboutUsFirst>

        </MainLayout>    

        
    )
}

const StyledAboutUsFirst = styled.div`

    margin:1%;

    h2{
        color:#FF0035;
        font-size:3.5rem;
    }

    h3{
        color:#38405F;
        font-size:2.5rem;
        text-align:center
    }

    span {
        color:#FF0035;
        font-size:2.5rem;
    }

    p{
        text-align:center;
        color:#38405F;
    }

    .firstContainer{

        display:flex;
        align-items:center;
    }

    .titleAndParagraph{
        
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:flex-end;
        z-index:10;
        position:relative;
        left:-11em;
        bottom:4em;
        h3{
            text-align:right;
        }       
       
    }

    .secondContainer{
        display:flex;
        justify-content:space-around;
        align-items:center;
    }
    .thirdContainer{
        display:flex;
        align-items:center;
        justify-content:space-around;
    }

    .fourthContainer{
        display:flex;
        justify-content:space-around;
        align-items:center;
    }
`

export default AboutUs