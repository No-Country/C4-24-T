import React from 'react';
import Footer from './FooterItem';
import Ensayo from '../../image/ensayo.jpg'
import { Icon } from '../../styles/icons';


function FooterComp() {
    return (
        <Footer className="sl-footer">
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                    <Footer.Il><img src={Ensayo} alt=""/></Footer.Il>
                        <Footer.Title>Servicios Profesionales</Footer.Title>
                        <Footer.Title>Nuestras redes</Footer.Title>
                        <Footer.Link href="https://www.facebook.com/" target="_blank" ><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                        <Footer.Link href="https://www.instagram.com/" target="_blank" ><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Nosotros</Footer.Title>
                        <Footer.Link href="https://github.com/EzSan/GiphoS" target="_blank">Mision</Footer.Link>
                        <Footer.Link href="https://github.com/EzSan/GiphoS" target="_blank">Vision</Footer.Link>
                        <Footer.Link href="https://github.com/EzSan/GiphoS" target="_blank">Valores</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Title>Soporte</Footer.Title>
                        <Footer.Link href="/ayuda">Ayuda</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Title>FAQ </Footer.Title>
                        <Footer.Il>Preguntas frecuentes</Footer.Il>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Title>Contáctanos</Footer.Title>
                        <Footer.Link href="tel:+573132482811">+57 313-248-2811</Footer.Link>
                        <Footer.Link href="mailto:f@gmail.com">f@gmail.com</Footer.Link>
                        <Footer.Il>calle 3 # 2b-25 Colombia</Footer.Il>
                    </Footer.Column>
                </Footer.Row>
                <Footer.Il className="footer-copyright text-center py-3">
                    &copy; {new Date().getFullYear()} Copyright
                </Footer.Il>
            </Footer.Wrapper>
        </Footer>
    );
}

export default FooterComp;
