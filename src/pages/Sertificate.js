import React from 'react';
import FooterComponent from "../components/FooterComponent";
import { Col, Container, Image, Row} from "react-bootstrap";
import NavBarComponent from "../components/NavBarComponent";
import isoImg from '../img/sertificate/iso.jpg'
import isoEngImg from '../img/sertificate/Sert_page-0001.jpg'
import attestat1 from '../img/sertificate/Sert_page-0002.jpg'
import attestat2 from '../img/sertificate/Sert-0003.jpg'
import attestat3 from '../img/sertificate/Sert_page-0004.jpg'
import attestat4 from '../img/sertificate/Sert-0005.jpg'
import attestat5 from '../img/sertificate/Sert-0006.jpg'

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
                    <Col md="auto">
                        <Image src={attestat5} height="500"/>
                    </Col>
                </Row>
            </Container>
            <FooterComponent/>


        </>

    );
}

export default Sertificate;