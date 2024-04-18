import React from 'react';
import FooterComponent from "../components/FooterComponent";
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import NavBarComponent from "../components/NavBarComponent";
import logo from '../img/logo/logoTrest.jpg'
import isoImg from '../img/sertificate/iso.jpg'
import isoEngImg from '../img/sertificate/isoEng.jpg'
import {Link} from "react-router-dom";

function Sertificate(props) {
    return (
        <>

            <NavBarComponent/>
            <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
                <Row>

                    <Col md="auto">
                        <Image src={isoImg} height='500' />
                    {/*    <Card style={{width: '18rem', height: '26rem', marginTop: '2px'}}>*/}
                    {/*        <Card.Img variant='top' src={logo}/>*/}
                    {/*        <Card.Body>*/}
                    {/*            <Card.Title>Title</Card.Title>*/}
                    {/*            <Card.Text>description</Card.Text>*/}
                    {/*            /!*<Link style={{color: 'green'}} to={"/"}> <Button variant='primary'>Details</Button>*!/*/}
                    {/*            /!*</Link>*!/*/}
                    {/*        </Card.Body>*/}
                    {/*    </Card>*/}
                    </Col>
                    <Col md="auto">
                        <Image src={isoEngImg} height="500"/>
                        {/*<Card style={{width: '30rem', height: '26rem', marginTop: '2px'}}>*/}
                        {/*    <Card.Img  variant='top' src={isoImg} />*/}
                        {/*    <Card.Body>*/}
                        {/*        <Card.Title>Title</Card.Title>*/}
                        {/*        <Card.Text>description</Card.Text>*/}
                        {/*        /!*<Link style={{color: 'green'}} to={"/"}> <Button variant='primary'>Details</Button>*!/*/}
                        {/*        /!*</Link>*!/*/}
                        {/*    </Card.Body>*/}
                        {/*</Card>*/}
                    </Col>

                </Row>
            </Container>
            <FooterComponent/>


        </>

    );
}

export default Sertificate;