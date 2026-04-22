import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavBarComponent from "../components/NavBarComponent";
import FooterComponent from "../components/FooterComponent";

const Management = () => {
    // Данные руководства
    const leadership = [
        {
            id: 1,
            title: 'Директор',
            name: 'Савченко Григорий Алексеевич',
            phone: '388 05 95',
            receptionDay: 'первый понедельник месяца',
            receptionTime: 'с 16:00 до 20:00',
        },
        {
            id: 2,
            title: 'Первый заместитель директора - главный инженер',
            name: 'Посудевский Владимир Васильевич',
            phone: '369 24 37',
            receptionDay: 'второй понедельник месяца',
            receptionTime: 'с 16:00 до 20:00'
        },
        {
            id: 3,
            title: 'Заместитель директора по экономике и финансам',
            name: 'Злотник Марина Михайловна',
            phone: '369 24 32',
            receptionDay: 'третий понедельник месяца',
            receptionTime: 'с 16:00 до 20:00'
        },
        {
            id: 4,
            title: 'Заместитель директора',
            name: 'Климович Юрий Валентинович',
            phone: '369 24 32',
            receptionDay: 'четвертый понедельник месяца',
            receptionTime: 'с 16:00 до 20:00'
        }
    ];

    // Стили (можно вынести в CSS, но для простоты оставим inline)
    const styles = {
        pageTitle: {
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: '#1e3a8a',
            textAlign: 'center'
        },
        card: {
            marginBottom: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            height: '100%'
        },
        cardTitle: {
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: '#0b5e9e'
        },
        label: {
            fontWeight: 'bold',
            color: '#374151',
            marginRight: '8px'
        },
        section: {
            marginBottom: '12px'
        },
        note: {
            marginTop: '16px',
            padding: '12px',
            backgroundColor: '#f0f9ff',
            borderRadius: '8px',
            fontSize: '0.9rem',
            color: '#0c4e6e'
        }
    };

    return (
        <>
            <NavBarComponent />
            <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                <h1 style={styles.pageTitle}>Руководство</h1>
                <Row>
                    {leadership.map((person) => (
                        <Col key={person.id} md={6} lg={4} style={{ marginBottom: '1.5rem' }}>
                            <Card style={styles.card}>
                                <Card.Body>
                                    <Card.Title style={styles.cardTitle}>{person.title}</Card.Title>
                                    <Card.Subtitle className="mb-3 text-muted">{person.name}</Card.Subtitle>

                                    <div style={styles.section}>
                                        <span style={styles.label}>📞 Телефон:</span>
                                        <a href={`tel:${person.phone.replace(/\s/g, '')}`} style={{ textDecoration: 'none', color: '#2563eb' }}>
                                            {person.phone}
                                        </a>
                                    </div>

                                    <div style={styles.section}>
                                        <span style={styles.label}>📅 Прием граждан:</span>
                                        <div>{person.receptionDay}</div>
                                        <div>{person.receptionTime}</div>
                                    </div>

                                    {person.note && (
                                        <div style={styles.note}>
                                            <span>ℹ️ </span>
                                            {person.note}
                                        </div>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Дополнительная общая информация о записи */}
                <Row className="mt-3">
                    <Col>
                        <div style={styles.note}>
                            <strong>Предварительная запись на личный прием</strong> осуществляется секретарем приемной директора
                            Куимовой Светланой Александровной по телефону <a href="tel:3880595">388 05 95</a>.
                            <br />
                            Прием проводится по указанным дням с 16:00 до 20:00 только по предварительной записи.
                        </div>
                    </Col>
                </Row>
            </Container>
            <FooterComponent />
        </>
    );
};

export default Management;