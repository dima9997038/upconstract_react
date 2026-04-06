import React from 'react';
import NavBarComponent from "../components/NavBarComponent";
import FooterComponent from "../components/FooterComponent";
import {Button, Col, Row, Table} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function Actioner(props) {
    const  navigate=useNavigate()
    function info1() {
        navigate("/forActioner")
    }
    function info2() {
        navigate("/forActioner2")
    }
    function report2025() {
        navigate("/report_for_actioner2025")
    }

    return (
        <>
            <NavBarComponent/>

            <Row>

                <Col sm={2}>
                </Col>
                <Col sm={1}></Col>
                <Col sm={7}>
                    <h2 style={{color: "blue"}}>Информация для акционеров</h2>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Название документа</th>
                            <th>Дата размещения</th>
                            <th>Просмотреть</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Информация о акционерном обществе</td>
                            <td>2 февраля 2026 года</td>
                            <td><Button variant="link" className="me-3" onClick={info1}>Внеочередное собрание
                                акционеров</Button></td>
                        </tr>
                        <tr>
                            <td>Информация о акционерном обществе</td>
                            <td>26 февраля 2026 года</td>
                            <td><Button variant="link" className="me-3" onClick={info2}>O годовом общем собрании акционеров</Button></td>
                        </tr>
                        <tr>
                            <td>Информация о акционерном обществе</td>
                            <td>6 апреля 2026 года</td>
                            <td><Button variant="link" className="me-3" onClick={report2025}>Годовой отчет 2025 г</Button></td>
                        </tr>


                        </tbody>
                    </Table>


                </Col>
            </Row>

            <FooterComponent/>
        </>
    );
}

export default Actioner;