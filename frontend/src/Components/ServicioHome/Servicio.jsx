import React from 'react'
import styled from 'styled-components'


const Servicio = () => {
    return (
    <ServicioStyled>  
<ul className="nav">
  <li><a href="/home"><span>●</span>Servicio</a></li>
  <li><a href="/home"><span>●</span>Seguridad</a></li>
  <li><a href="/blog"><span>●</span>Confiabilidad</a></li>
</ul>

    </ServicioStyled>
    )
}
const ServicioStyled = styled.div`
    background-color: #DE834D;
    display: flex ;
    align-content: space-around;
    flex-direction: column;
    flex-wrap: wrap;
    
ul.nav {
  padding-left: 0px;
  text-align: center;
}
ul.nav > li {
  
    padding: 10px 60px;
}

ul.nav > li > a {
    color: white;
    text-decoration: none;
    font-size: 3rem ;
}
img{
    padding: 10px 30px;
    
}
span{
    font-size:4rem ;

}
`;

export default Servicio