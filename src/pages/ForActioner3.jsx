import React from 'react';
import NavBarComponent from "../components/NavBarComponent";
import { Col, Row, Card } from "react-bootstrap";


function ForActioner3(props) {
    return (
        <>
            <NavBarComponent />

            <Row className="mb-4">
                <Col md={12} className="text-center">
                    <h2 className="display-4">ОПЕРАТИВНАЯ ИНФОРМАЦИЯ ПО ДЕЯТЕЛЬНОСТИ</h2>
                    <h3 className="display-5">ОАО «УПРАВЛЕНИЕ СТРОЙМЕХАНИЗАЦИИ»</h3>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md={10}>
                    <Card className="shadow-sm border-primary">
                        <Card.Body>
                            <Card.Title className="text-center mb-4">
                                <h4>Важное сообщение для акционера</h4>
                            </Card.Title>

                            <div className="alert alert-info" role="alert">
                                <strong>Актуальная информация на октябрь 2026 года</strong>
                            </div>

                            <p className="lead">
                                В&nbsp;связи с&nbsp;необходимостью приведения в&nbsp;соответствие с&nbsp;нормами
                                действующего законодательства Устава ОАО&nbsp;«Управление СтройМеханизации»,
                                Положения о&nbsp;наблюдательном совете, Положения о&nbsp;ревизионной комиссии,
                                а&nbsp;также утверждения Положения о&nbsp;выплате вознаграждения членам
                                наблюдательного совета ОАО&nbsp;«Управление СтройМеханизации»,
                                <strong> 28&nbsp;октября 2026&nbsp;года</strong> состоится внеочередное общее
                                собрание акционеров ОАО&nbsp;«Управление СтройМеханизации» со&nbsp;следующей
                                повесткой дня.
                            </p>

                            <div className="alert alert-warning mt-4" role="alert">
                                <h4 className="alert-heading">ВНИМАНИЕ: Внеочередное общее собрание акционеров</h4>
                                <hr />
                                <p className="mb-0">
                                    <strong>28 октября 2026 года</strong> состоится внеочередное общее собрание
                                    акционеров ОАО&nbsp;«Управление СтройМеханизации»
                                </p>
                            </div>

                            <h3 className="mt-4 mb-3">Повестка дня собрания:</h3>
                            <ol className="list-group list-group-numbered">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">О внесении изменений в Устав</div>
                                        ОАО «Управление СтройМеханизации»
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">О внесении изменений в Положение о наблюдательном совете</div>
                                        ОАО «Управление СтройМеханизации»
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">О внесении изменений в Положение о ревизионной комиссии</div>
                                        ОАО «Управление СтройМеханизации»
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Об утверждении Положения о выплате вознаграждения</div>
                                        членам наблюдательного совета ОАО «Управление СтройМеханизации»
                                    </div>
                                </li>
                            </ol>

                            <h3 className="mt-4 mb-3">Порядок проведения собрания:</h3>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <strong>Основание созыва:</strong> решение наблюдательного совета Общества
                                    (протокол от 19.10.2026 № 19-26)
                                </li>
                                <li className="list-group-item">
                                    <strong>Форма проведения:</strong> очная
                                </li>
                                <li className="list-group-item">
                                    <strong>Место проведения:</strong> ул. Серова, 28/2, г. Минск
                                </li>
                                <li className="list-group-item">
                                    <strong>Время проведения:</strong> 12.00
                                </li>
                                <li className="list-group-item">
                                    <strong>Начало регистрации участника:</strong> 11.30
                                </li>
                                <li className="list-group-item">
                                    <strong>Форма голосования:</strong> решение единственного участника открытого акционерного общества «Управление СтройМеханизации» - РУП «БЕЛСТРОЙЦЕНТР»

                                </li>
                            </ul>


                            <blockquote className="blockquote mt-4 p-3 border-start border-primary bg-light">
                                <p className="mb-0">
                                    Данная информация носит официальный характер и подлежит доведению до сведения
                                    всех заинтересованных сторон в соответствии с требованиями законодательства
                                    и устава Общества.
                                </p>
                                <footer className="blockquote-footer mt-2">
                                    Наблюдательный совет Общества
                                </footer>
                            </blockquote>
                        </Card.Body>
                        <Card.Footer className="text-muted text-center">
                            Дата публикации: 19 октября 2026 года
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default ForActioner3;