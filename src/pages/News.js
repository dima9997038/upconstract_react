import React from 'react';
import NavBarComponent from "../components/NavBarComponent";
import FooterComponent from "../components/FooterComponent";
import {Button, Col, Row, Table} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function News(props) {
    const  navigate=useNavigate()
    function news1() {
        navigate("/news1")
    }
    function news2() {
        navigate("/news2")
    }
    function news3() {
        navigate("/news3")
    }
    // function getAudit2019() {
    //     navigate("/audit2019")
    // }
    // function getAudit2022() {
    //     navigate("/audit2022")
    // }
    // function getAudit2020() {
    //     navigate("/audit2020")
    // }
    // function report2021() {
    //     navigate("/report2021")
    // }

    return (
        <>
            <NavBarComponent/>

            <Row>

                <Col sm={2}>
                </Col>
                <Col sm={1}></Col>
                <Col sm={7}>
                    <h2 style={{color: "blue"}}>Наши новости</h2>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Название новости</th>
                            <th>Дата</th>
                            <th>Просмотреть</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Акция «Приди и поклонись»</td>
                            <td>22 марта 2026г.</td>
                            <td><Button variant="link" className="me-3" onClick={news1}>Новость</Button></td>
                        </tr>
                        <tr>
                            <td>«Раритеты музея»</td>
                            <td>12 марта 2026г.</td>
                            <td><Button variant="link" className="me-3" onClick={news2}>Новость</Button></td>
                        </tr>
                        <tr>
                            <td>«С праздником весны»</td>
                            <td>8 марта 2026г.</td>
                            <td><Button variant="link" className="me-3" onClick={news3}>Новость</Button></td>
                        </tr>
                        {/*<tr>*/}
                        {/*    <td>Аудиторское заключение</td>*/}
                        {/*    <td>2023</td>*/}
                        {/*    <td><Button variant="link" className="me-3" onClick={getAudit2023} >Заключение</Button></td>*/}
                        {/*</tr>*/}
                        {/*<tr>*/}
                        {/*    <td>Аудиторское заключение</td>*/}
                        {/*    <td>2023</td>*/}
                        {/*    <td><Button variant="link" className="me-3" onClick={getAudit2023} >Заключение</Button></td>*/}
                        {/*</tr>*/}
                        {/*<tr>*/}
                        {/*    <td>Аудиторское заключение</td>*/}
                        {/*    <td>2022</td>*/}
                        {/*    <td><Button variant="link" className="me-3"onClick={getAudit2022} >Заключение</Button></td>*/}
                        {/*</tr>*/}
                        {/*<tr>*/}
                        {/*    <td>Аудиторское заключение</td>*/}
                        {/*    <td>2020</td>*/}
                        {/*    <td><Button variant="link" className="me-3" onClick={getAudit2020}>Заключение</Button></td>*/}
                        {/*</tr>*/}
                        {/*<tr>*/}
                        {/*    <td>Аудиторское заключение</td>*/}
                        {/*    <td>2019</td>*/}
                        {/*    <td><Button variant="link" className="me-3" onClick={getAudit2019}>Заключение</Button></td>*/}
                        {/*</tr>*/}
                        {/*<tr>*/}
                        {/*    <td>Годовой отчет</td>*/}
                        {/*    <td>2021</td>*/}
                        {/*    <td><Button variant="link" className="me-3" onClick={report2021} >Отчет</Button></td>*/}
                        {/*</tr>*/}

                        </tbody>
                    </Table>


                </Col>
            </Row>

            <FooterComponent/>
        </>
    );
}

export default News;