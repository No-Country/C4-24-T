import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./itemCarrusel";
import "../../styles/styles.css";
import styled from "styled-components";
import Button from "react-bootstrap/esm/Button";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

function Carrusel() {
  const [items, /* setItems */] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

/*   const addItem = () => {
    const nextItem = Math.max(1, items.length + 1);
    setItems([...items, nextItem]);
  };

  const removeItem = () => {
    const endRange = Math.max(0, items.length - 1);
    setItems(items.slice(0, endRange));
  }; */

  return (
    <>
      <CarruselStyled>
    <div className="App">
      <div className="controls-wrapper">
        <h1 style={{ textAlign: "center" }}>Nuestros Profesionales</h1>
        <h2 style={{ textAlign: "center" }}>Nuestros especialistas están calificados y cuentan <br></br> con experiencia para dar el mejor servicio</h2>
        <div className="Carrusel">
      </div>
      
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Item key={item}>{item}</Item>
          ))}
        </Carousel>
      </div>
      <div className='boton'>
    <Button variant="primary">Explorar</Button>
    </div>
    </div>
    </div>
    </CarruselStyled>
    </>
  );
}
const CarruselStyled = styled.div`

    margin:1em;
    
    h1{
      color:#FF0035;
    }
    
    h2{
        margin-top: 5rem ;
        color:#0E131F;
    }
    .boton{
      display:flex ;
      justify-content: flex-end;
      
    }
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<Carrusel />, rootElement);

export default Carrusel