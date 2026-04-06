import React from 'react';
import NavBarComponent from "../components/NavBarComponent";
import { Col, Row, Card } from "react-bootstrap";

function AnnualMeetingNotice() {
    return (
        <>
            <NavBarComponent />

            <div style={{ fontSize: '1.25rem' }}>
                <Row className="mb-4">
                    <Col md={12} className="text-center">
                        <h2 className="display-4">ГОДОВОЕ ОБЩЕЕ СОБРАНИЕ АКЦИОНЕРОВ</h2>
                        <h3 className="display-5">ОАО «УПРАВЛЕНИЕ СТРОЙМЕХАНИЗАЦИИ»</h3>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col md={10}>
                        <Card className="shadow-sm border-primary">
                            <Card.Body>
                                <Card.Title className="text-center mb-4">
                                    <h4>Уважаемый акционер!</h4>
                                </Card.Title>

                                <div className="alert alert-info text-center" role="alert">
                                    <strong>Приглашаем Вас принять участие в годовом общем собрании акционеров</strong>
                                </div>

                                <p className="lead">
                                    Открытое акционерное общество «Управление СтройМеханизации» (далее по тексту – Общество),
                                    расположенное по адресу: <strong>220024, г. Минск, ул. Серова, 28 корп. 2</strong>, приглашает Вас
                                    принять участие в годовом общем собрании акционеров Общества (далее – Собрание Общества)
                                    <strong className="d-block mt-2 text-center">31 марта 2026 г. в 14:00 часов</strong>
                                    которое созывается по адресу: <strong>Республика Беларусь, 220024, г. Минск, ул. Серова, 28 корп. 2, конференц-зал</strong>.
                                </p>

                                <h3 className="mt-4 mb-3">Повестка дня:</h3>
                                <ol className="list-group list-group-numbered">
                                    <li className="list-group-item">
                                        <strong>Отчет директора об итогах работы Общества в 2025 году и задачах по обеспечению выполнения ключевых показателей прогноза социально-экономического развития и иных доведенных показателей (заданий) на 2026 год, согласно разработанному в установленном порядке бизнес-плану развития ОАО «Управление СтройМеханизации».</strong>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>О работе Наблюдательного совета в 2025 году. Оценка деятельности директора Общества Наблюдательным советом.</strong>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>О результатах проверки ревизионной комиссией финансово-хозяйственной деятельности Общества за 2025 год и проведения обязательного аудита достоверности годовой бухгалтерской (финансовой) отчетности Общества.</strong>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Утверждение годового отчета за 2025 год, бухгалтерского баланса, отчета о прибылях и убытках за 2025 год. Распределение прибыли и убытков за 2025 год.</strong>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>О распределении прибыли и выплате дивидендов по результатам деятельности Общества за 2025 год.</strong>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Об утверждении направлений использования прибыли Общества в 2026 году. О выплате дивидендов за 2026 год.</strong>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Избрание членов наблюдательного совета ОАО «Управление СтройМеханизации».</strong>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Избрание ревизионной комиссии ОАО «Управление СтройМеханизации».</strong>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Утверждение размеров вознаграждений членам наблюдательного совета и членам ревизионной комиссии.</strong>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Об утверждении Положения о Наблюдательном совете ОАО «Управление СтройМеханизации».</strong>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Об утверждении Положения о ревизионной комиссии ОАО «Управление СтройМеханизации».</strong>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Об утверждении Регламента работы с реестром владельцев ценных бумаг ОАО «Управление СтройМеханизации».</strong>
                                    </li>
                                </ol>

                                <Card className="mt-4 bg-light">
                                    <Card.Body>
                                        <Row>
                                            <Col md={6}>
                                                <p><strong>Дата формирования реестра акционеров:</strong><br />
                                                    1 марта 2026 г.</p>
                                                <p><strong>Форма проведения Собрания:</strong><br />
                                                    Очная</p>
                                                <p><strong>Основание:</strong><br />
                                                    Протокол наблюдательного совета от 25.02.2026 № 04-26</p>
                                            </Col>
                                            <Col md={6}>
                                                <p><strong>Форма голосования:</strong><br />
                                                    Решение органа, осуществляющего владельческий надзор</p>
                                                <p><strong>Регистрация участников:</strong><br />
                                                    31 марта 2026 г. с 13:00 до 14:00</p>
                                                <p><strong>Место регистрации:</strong><br />
                                                    По месту проведения Собрания</p>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>

                                <h4 className="mt-4 mb-3">Порядок регистрации участников:</h4>
                                <ul className="list-group mb-4">
                                    <li className="list-group-item">
                                        <strong>Для акционера – юридического лица:</strong> паспорт и доверенность
                                    </li>
                                </ul>

                                <div className="alert alert-warning" role="alert">
                                    <h5 className="alert-heading">Ознакомление с документами:</h5>
                                    <p className="mb-2">
                                        <strong>с 11 марта 2026 г.</strong> с 09:00 до 16:00 в рабочие дни<br />
                                        Место: планово-экономический отдел по месту нахождения Общества
                                    </p>
                                    <p className="mb-0">
                                        <strong>31 марта 2026 года</strong> – по месту проведения собрания
                                    </p>
                                    <hr />
                                    <p className="mb-0">Подготовленные документы:</p>
                                    <ul className="mt-2">
                                        <li>✓ Повестка дня Собрания Общества</li>
                                        <li>✓ Проект решения по вопросам повестки дня</li>
                                        <li>✓ Информация о деятельности Общества за отчетный период</li>
                                    </ul>
                                </div>

                                <blockquote className="blockquote mt-4 p-3 border-start border-primary bg-light">
                                    <p className="mb-0">
                                        Данная информация носит официальный характер и доводится до сведения
                                        всех акционеров в соответствии с требованиями законодательства
                                        и устава предприятия.
                                    </p>
                                    <footer className="blockquote-footer mt-2">
                                        Наблюдательный совет ОАО «Управление СтройМеханизации»
                                    </footer>
                                </blockquote>
                            </Card.Body>
                            <Card.Footer className="text-muted text-center">
                                Дата публикации: 26 февраля 2026 года
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default AnnualMeetingNotice;