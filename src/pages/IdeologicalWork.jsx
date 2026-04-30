import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import NavBarComponent from "../components/NavBarComponent";
import FooterComponent from "../components/FooterComponent";

const IdeologicalWork = () => {
    // Список направлений / ссылок
    const quickLinks = [
        { name: "Директива №12", url: "https://pravo.by/document/?guid=12551&p0=P02500012" },
        { name: "Единый день информирования", url: "https://minsk.gov.by/ru/actual/view/209/2026.shtml" },
        { name: "Государственная символика", url: "https://pravo.by/gosudarstvo-i-pravo/gosudarstvennaya-simvolika/gosudarstvennye-\n" +
                "simvoly/" },
        { name: "Год белорусской женщины", url: "https://pravo.by/document/?guid=12551&p0=C22600069" },
        { name: "Пятилетка качества", url: "https://president.gov.by/ru/documents/ukaz-no-31-ot-17-anvara-2025-g" },
        // { name: "Молодежная политика", url: "#" },
        { name: "РОО «Белая Русь»", url: "https://1br.by/" },
        { name: "ОО «Белорусский союз женщин»", url: "https://oobsg.by/" },
        { name: "ОО «БРСМ»", url: "https://brsm.by/by" }
    ];

    const styles = {
        pageTitle: {
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#1e3a8a',
            textAlign: 'center'
        },
        sectionTitle: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginTop: '1.5rem',
            marginBottom: '1rem',
            color: '#0b5e9e',
            borderLeft: '4px solid #1e3a8a',
            paddingLeft: '12px'
        },
        subTitle: {
            fontSize: '1.25rem',
            fontWeight: 'bold',
            marginTop: '1rem',
            marginBottom: '0.75rem',
            color: '#2c3e50'
        },
        card: {
            marginBottom: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            height: '100%'
        },
        highlightBox: {
            backgroundColor: '#f0f9ff',
            padding: '1rem',
            borderRadius: '12px',
            marginBottom: '1.5rem',
            borderLeft: '4px solid #1e3a8a'
        },
        linkItem: {
            display: 'inline-block',
            margin: '0.25rem 0.5rem',
            padding: '0.3rem 0.8rem',
            backgroundColor: '#eef2ff',
            borderRadius: '20px',
            textDecoration: 'none',
            color: '#1e3a8a',
            fontWeight: '500',
            transition: 'all 0.2s'
        },
        listIcon: {
            marginRight: '8px',
            color: '#1e3a8a'
        }
    };

    return (
        <>
            <NavBarComponent />
            <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                <h1 style={styles.pageTitle}>Идеологическая работа</h1>

                {/* Вводный абзац */}
                <Row>
                    <Col>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                            <strong>Идеологическая работа в трудовом коллективе</strong> — это системная деятельность,
                            направленная на формирование гражданской позиции работников, уважения к
                            истории и традициям белорусского народа, а также на создание условий для
                            получения достоверной информации о жизни страны и региона.
                        </p>
                    </Col>
                </Row>

                {/* Директива Президента */}
                <Row>
                    <Col>
                        <div style={styles.highlightBox}>
                            <p style={{ marginBottom: 0 }}>
                                В основе идеологической работы на предприятии — <strong>Директива Президента
                                Республики Беларусь от 09.04.2025 № 12 «О реализации основ идеологии
                                белорусского государства»</strong>. Документ определяет стратегические приоритеты
                                идеологической политики страны, задает четкие ориентиры для работы в трудовых
                                коллективах, органах власти и общественных объединениях.
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* Что помогает */}
                <Row>
                    <Col>
                        <h2 style={styles.sectionTitle}>Идеологическая работа — неотъемлемая часть корпоративной культуры</h2>
                        <p>Она помогает:</p>
                        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                            <li style={{ marginBottom: '8px' }}><span style={styles.listIcon}>✓</span> формировать у работников активную жизненную позицию и чувство сопричастности к судьбе страны;</li>
                            <li style={{ marginBottom: '8px' }}><span style={styles.listIcon}>✓</span> сохранять историческую память и уважение к государственным символам, традициям и культуре;</li>
                            <li style={{ marginBottom: '8px' }}><span style={styles.listIcon}>✓</span> обеспечивать открытый диалог между руководством и коллективом;</li>
                            <li style={{ marginBottom: '8px' }}><span style={styles.listIcon}>✓</span> поддерживать общественные инициативы и волонтерские проекты;</li>
                            <li style={{ marginBottom: '8px' }}><span style={styles.listIcon}>✓</span> создавать условия для профессионального и личностного развития молодежи.</li>
                        </ul>
                    </Col>
                </Row>

                {/* Направления работы */}
                <Row>
                    <Col>
                        <h2 style={styles.sectionTitle}>Направления работы</h2>
                        <p>
                            Реализация идеологической политики ведется по нескольким ключевым направлениям:
                            <strong> информационная работа</strong> (Единые дни информирования, встречи с экспертами),
                            <strong> патриотическое воспитание</strong> (мероприятия к памятным датам, сохранение исторической памяти),
                            <strong> взаимодействие с общественными объединениями</strong> (РОО «Белая Русь», ОО «БРСМ», ОО «Белорусский союз женщин», профсоюзная организация),
                            <strong> поддержка молодежных инициатив</strong> и формирование кадрового резерва.
                        </p>
                        <p>
                            Деятельность предприятия в сфере идеологической работы строится на принципах
                            <strong> открытости, системности и преемственности</strong>, обеспечивая реализацию
                            конституционных прав работников на получение объективной информации и участие в общественной жизни.
                        </p>
                    </Col>
                </Row>

                {/* Общественные объединения + быстрые ссылки */}
                <Row>
                    <Col>
                        <h2 style={styles.sectionTitle}>Общественные объединения</h2>
                        <p>
                            На предприятии активно действуют первичные организации общественных объединений,
                            которые объединяют работников по интересам, помогают реализовать гражданские инициативы
                            и участвуют в формировании корпоративной культуры.
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card style={styles.card}>
                            <Card.Body>
                                <Card.Title style={styles.subTitle}>Информационные материалы</Card.Title>
                                <div style={{ marginTop: '0.5rem' }}>
                                    {quickLinks.map((link, idx) => (
                                        <a
                                            key={idx}
                                            href={link.url}
                                            style={styles.linkItem}
                                            onMouseEnter={(e) => (e.target.style.backgroundColor = '#e0e7ff')}
                                            onMouseLeave={(e) => (e.target.style.backgroundColor = '#eef2ff')}
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


            </Container>
            <FooterComponent />
        </>
    );
};

export default IdeologicalWork;