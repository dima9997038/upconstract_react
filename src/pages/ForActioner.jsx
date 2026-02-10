import React from 'react';
import NavBarComponent from "../components/NavBarComponent";
import { Col, Image, Row, Button, Card } from "react-bootstrap";


function ForActioner(props) {
    return (
        <>
            <NavBarComponent />
            {/*<Row className="mb-4">*/}
            {/*    <Col md={12} className="text-center">*/}
            {/*        <Image src={img} alt="Оперативная информация" fluid />*/}
            {/*    </Col>*/}
            {/*</Row>*/}

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
                                <h4>Важное сообщение для акционеров и сотрудников</h4>
                            </Card.Title>

                            <div className="alert alert-info" role="alert">
                                <strong>Актуальная информация на февраль 2026 года</strong>
                            </div>

                            <p className="lead">
                                В&nbsp;связи с&nbsp;включением Общества <strong>16&nbsp;января 2026&nbsp;года</strong> в&nbsp;состав холдинга
                                «БЕЛСТРОЙЦЕНТР-ХОЛДИНГ», ввиду прекращения полномочий представителя
                                государства Станкевич&nbsp;Т.М. в&nbsp;органах управления ОАО&nbsp;«Управление
                                СтройМеханизации»,
                                (постановление Совета Министров от <strong>29.12.2025&nbsp;№&nbsp;789</strong>),
                                а&nbsp;также в&nbsp;соответствии
                                с&nbsp;приказом РУП&nbsp;«БЕЛСТРОЙЦЕНТР»
                                от <strong>19.01.2026&nbsp;№2</strong> «О&nbsp;назначении представителей
                                управляющей компании холдинга «БЕЛСТРОЙЦЕНТР-ХОЛДИНГ» (исх.&nbsp;№&nbsp;20-01/532
                                от&nbsp;22.01.2026)
                                в&nbsp;органы управления ОАО&nbsp;«Управление СтройМеханизации» назначен представитель
                                управляющей компании холдинга
                                «БЕЛСТРОЙЦЕНТР-ХОЛДИНГ»&nbsp;— <strong>Вербицкая&nbsp;Светлана&nbsp;Владимировна</strong>
                                &nbsp;для избрания в&nbsp;органы управления Общества.
                            </p>>

                            <div className="alert alert-warning mt-4" role="alert">
                                <h4 className="alert-heading">ВНИМАНИЕ: Внеочередное собрание акционеров</h4>
                                <hr />
                                <p className="mb-0">
                                    <strong>20 февраля 2026 года</strong> состоится внеочередное общее собрание акционеров
                                    ОАО «Управление СтройМеханизации»
                                </p>
                            </div>

                            <h3 className="mt-4 mb-3">Повестка дня собрания:</h3>
                            <ol className="list-group list-group-numbered">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">О доизбрании состава наблюдательного совета</div>
                                        ОАО «Управление СтройМеханизации»
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Утверждение размеров вознаграждений</div>
                                        членам наблюдательного совета ОАО «Управление СтройМеханизации»
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Об утверждении Устава</div>
                                        открытого акционерного общества «Управление СтройМеханизации» в новой редакции
                                    </div>
                                </li>
                            </ol>


                            <blockquote className="blockquote mt-4 p-3 border-start border-primary bg-light">
                                <p className="mb-0">
                                    Данная информация носит официальный характер и подлежит доведению до сведения
                                    всех заинтересованных сторон в соответствии с требованиями законодательства
                                    и устава предприятия.
                                </p>
                                <footer className="blockquote-footer mt-2">
                                    Администрация ОАО «Управление СтройМеханизации»
                                </footer>
                            </blockquote>
                        </Card.Body>
                        <Card.Footer className="text-muted text-center">
                            Дата публикации: 2 февраля 2026 года
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>

            {/* Ссылки внизу страницы */}
            {/*<Row className="mt-5 mb-4 text-center">*/}
            {/*    <Col md={4}>*/}
            {/*        <Button variant="outline-primary" size="lg" href="/documents">*/}
            {/*            Официальные документы*/}
            {/*        </Button>*/}
            {/*    </Col>*/}
            {/*    <Col md={4}>*/}
            {/*        <Button variant="outline-primary" size="lg" href="/contacts">*/}
            {/*            Контакты для вопросов*/}
            {/*        </Button>*/}
            {/*    </Col>*/}
            {/*    <Col md={4}>*/}
            {/*        <Button variant="outline-primary" size="lg" href="/news">*/}
            {/*            Все новости*/}
            {/*        </Button>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
        </>
    );
}

export default ForActioner;