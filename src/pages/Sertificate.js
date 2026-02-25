import React from 'react';
import FooterComponent from "../components/FooterComponent";
import { Col, Container, Image, Row} from "react-bootstrap";
import NavBarComponent from "../components/NavBarComponent";
import isoImg from '../img/sertificate/iso.jpg'
import isoEngImg from '../img/sertificate/isoEng.jpg'
import attestat1 from '../img/sertificate/attestat1.jpg'
import attestat2 from '../img/sertificate/attestat2.jpg'
import attestat3 from '../img/sertificate/attestat3.jpg'
import attestat4 from '../img/sertificate/attestat4.jpg'

function Sertificate(props) {
    return (
        <>

            <NavBarComponent/>
            <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
                <Row>

                    <Col md="auto">
                        <Image src={isoImg} height='500' />
                    </Col>
                    <Col md="auto">
                        <Image src={isoEngImg} height="500"/>
                    </Col>
                    <Col md="auto">
                        <Image src={attestat1} height="500"/>
                    </Col>
                    <Col md="auto">
                        <Image src={attestat2} height="500"/>
                    </Col>
                    <Col md="auto">
                        <Image src={attestat3} height="500"/>
                    </Col>
                    <Col md="auto">
                        <Image src={attestat4} height="500"/>
                    </Col>

                </Row>
            </Container>
            <FooterComponent/>


        </>

    );
}

export default Sertificate;