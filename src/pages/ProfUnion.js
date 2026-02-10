import React from 'react';
import NavBarComponent from "../components/NavBarComponent";
import { Col, Image, Row, Button, Card } from "react-bootstrap";
import img from '../img/profunion/image001.png';

function ProfUnion(props) {
    return (
        <>
            <NavBarComponent />
            <Row className="mb-4">
                <Col md={12} className="text-center">
                    <Image src={img} alt="Профсоюз" fluid />
                </Col>
            </Row>

            <Row className="mb-4">
                <Col md={12} className="text-center">
                    <h2 className="display-4">Деятельность профсоюза</h2>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <p className="lead">
                                Руководящий орган — профсоюзный комитет, в который избрано 7 членов. Профком ОАО «Управление СтройМеханизации» в своей работе руководствуется законодательством РБ, Уставом профсоюза и Положением о первичной профсоюзной организацией.
                            </p>

                            <h3 className="mt-4 mb-3">Главная задача профсоюза</h3>
                            <p>
                                Защита профессиональных, трудовых, социально-экономических прав и законных интересов членов профсоюза. Залогом успешной работы коллектива является его сплоченность. Немаловажную роль в этом играют общественные организации.
                            </p>

                            <h3 className="mt-4 mb-3">Приоритетные направления</h3>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <strong>Создание условий:</strong> Одно из приоритетных направлений руководства коллектива и профсоюзной организации – создание нормальных трудовых и социально-экономических условий для работников ОАО «Управление СтройМеханизации».
                                </li>
                                <li className="mb-2">
                                    <strong>Участие в жизни предприятия:</strong> Профсоюзный комитет принимает активное участие в культурно-воспитательной, экскурсионной, профилактическо-оздоровительной, спортивной жизни предприятия.
                                </li>
                                <li className="mb-2">
                                    <strong>Коллективный договор:</strong> Одним из важнейших направлений работы профсоюзной организации является подготовка, принятие и контроль за выполнением коллективного договора. Коллективный договор содержит ряд дополнительных льгот и гарантий.
                                </li>
                            </ul>

                            <h3 className="mt-4 mb-3">Материальная помощь</h3>
                            <p>
                                Выплачивается материальная помощь:
                            </p>
                            <ul>
                                <li>На оздоровление работников</li>
                                <li>К юбилейным датам</li>
                                <li>В связи с бракосочетанием</li>
                                <li>В связи с рождением ребенка</li>
                                <li>В связи с продолжительной болезнью</li>
                                <li>На ритуальные услуги</li>
                            </ul>

                            <blockquote className="blockquote mt-4">
                                <p className="mb-0">
                                    Профсоюз – это не только материальная помощь. Профсоюз (профессиональный союз) — это общественная организация, объединяющая работников для решения насущных и важных проблем.
                                </p>
                                <footer className="blockquote-footer mt-2">
                                    Мы – объединяем! Мы - вместе!
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Ссылки внизу страницы */}
            <Row className="mt-5 mb-4 text-center">
                <Col md={4}>
                    <Button variant="outline-primary" size="lg" href="https://stroy.1prof.by/oficialnye-dokumenty/">Документы</Button>
                </Col>
                <Col md={4}>
                    <Button variant="outline-primary" size="lg" href="https://stroy.1prof.by/kontakty/">Контакты</Button>
                </Col>
                <Col md={4}>
                    <Button variant="outline-primary" size="lg" href="https://stroy.1prof.by/news/">Новости</Button>
                </Col>
            </Row>
        </>
    );
}

export default ProfUnion;