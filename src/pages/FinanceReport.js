import React from 'react';
import NavBarComponent from "../components/NavBarComponent";
import FooterComponent from "../components/FooterComponent";
import {Button, Col, Row, Table} from "react-bootstrap";

function FinanceReport(props) {
    return (
        <>
            <NavBarComponent/>

            <Row>

                <Col sm={2}>
                </Col>
                <Col sm={1}></Col>
                <Col sm={7}>
                    <h2 style={{color: "blue"}}>Финансовая документация</h2>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Название документа</th>
                            <th>Год</th>
                            <th>Просмотреть</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Аудиторское заключение</td>
                            <td>2023</td>
                            <td><Button variant="link" className="me-3" >Заключение</Button></td>
                        </tr>
                        <tr>
                            <td>Аудиторское заключение</td>
                            <td>2023</td>
                            <td><Button variant="link" className="me-3" >Заключение</Button></td>
                        </tr>
                        <tr>
                            <td>Аудиторское заключение</td>
                            <td>2022</td>
                            <td><Button variant="link" className="me-3" >Заключение</Button></td>
                        </tr>
                        <tr>
                            <td>Аудиторское заключение</td>
                            <td>2020</td>
                            <td><Button variant="link" className="me-3" >Заключение</Button></td>
                        </tr>
                        <tr>
                            <td>Аудиторское заключение</td>
                            <td>2019</td>
                            <td><Button variant="link" className="me-3" >Заключение</Button></td>
                        </tr>
                        <tr>
                            <td>Годовой отчет</td>
                            <td>2021</td>
                            <td><Button variant="link" className="me-3" >Отчет</Button></td>
                        </tr>

                        </tbody>
                    </Table>


                </Col>
            </Row>

            <FooterComponent/>
        </>
    );
}

export default FinanceReport;