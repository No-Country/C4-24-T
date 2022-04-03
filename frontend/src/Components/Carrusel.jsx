import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import ItemCarrusel from "./itemCarrusel";
import "../styles/styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 1, itemsToShow: 2 },
  { width: 1, itemsToShow: 3 },
  { width: 1, itemsToShow: 4 },
];

function Carrusel() {
    return (
    <CarruselStyled>
        <h1 style={{ textAlign: "center" }}>Nuestros Profesionales</h1>
        <h2 style={{ textAlign: "center" }}>Nuestros especialistas están calificados y cuentan <br></br> con experiencia para dar el mejor servicio</h2>
        <div className="Carrusel">
        <Carousel breakPoints={breakPoints}>
          <ItemCarrusel>One</ItemCarrusel>
          <ItemCarrusel>Two</ItemCarrusel>
          <ItemCarrusel>Three</ItemCarrusel>
          <ItemCarrusel>Four</ItemCarrusel>
          <ItemCarrusel>Five</ItemCarrusel>
          <ItemCarrusel>Six</ItemCarrusel>
          <ItemCarrusel>Seven</ItemCarrusel>
          <ItemCarrusel>Eight</ItemCarrusel>
        </Carousel>
      </div>
    </CarruselStyled>
  );
}
const CarruselStyled = styled.div`

    h2{
        margin-top: 5rem ;
    }
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<Carrusel />, rootElement);

export default Carrusel