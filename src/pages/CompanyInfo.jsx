import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import NavBarComponent from "../components/NavBarComponent";
import FooterComponent from "../components/FooterComponent";

const CompanyInfo = () => {
    // Список услуг
    const services = [
        'Строительство железнодорожных путей и автомобильных дорог',
        'Установка страховочных пакетов для защиты железнодорожных путей от просадок',
        'Комплекс землеройных работ (отрывка котлована, транспортировка грунта, планировка, уплотнение)',
        'Возведение сооружений промышленного и гражданского назначения',
        'Строительство зданий и сооружений',
        'Демонтаж зданий и сооружений',
        'Дробление и переработка строительных отходов',
        'Аренда строительных машин и механизмов (грузоподъёмная, землеройная и другая техника)',
        'Услуги автотранспортной техникой'
    ];

    // Сильные стороны
    const strengths = [
        'Широкие производственные возможности',
        'Качество выполняемых работ и оказываемых услуг',
        'Возможность получения экономии от роста объемов производства',
        'Положительная репутация на рынке оказываемых услуг',
        'Конкурентоспособность на внутреннем рынке работ и услуг',
        'Обеспечение максимально возможного цикла «эксплуатация – ремонт» (включая капремонт) СДМ и автотранспорта'
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
        contactBox: {
            backgroundColor: '#f8fafc',
            padding: '1rem',
            borderRadius: '12px',
            marginTop: '1rem',
            border: '1px solid #e2e8f0'
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
                <h1 style={styles.pageTitle}>ОАО «Управление СтройМеханизации»</h1>

                {/* Опыт и специализация */}
                <Row>
                    <Col>
                        <div style={styles.highlightBox}>
                            <p style={{ fontSize: '1.05rem', marginBottom: 0 }}>
                                <strong>Многолетний опыт в строительной области:</strong> 10 лет, более 50 проектов в Беларуси.
                                Специализация — выполнение многопрофильных механизированных и строительно-монтажных работ.
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* Услуги */}
                <Row>
                    <Col>
                        <h2 style={styles.sectionTitle}>Услуги</h2>
                        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                            {services.map((service, idx) => (
                                <li key={idx} style={{ marginBottom: '8px' }}>
                                    <span style={styles.listIcon}>✓</span> {service}
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>

                {/* Производственный потенциал и подход */}
                <Row>
                    <Col>
                        <h2 style={styles.sectionTitle}>Производственный потенциал</h2>
                        <p>
                            ОАО «Управление СтройМеханизации» максимально использует свой производственный потенциал на рынке
                            оказания строительно-монтажных услуг, услуг строительных машин, механизмов и автомобильной техники.
                            Это достигается за счет приобретенных знаний и возможностей, расширения взаимодействия между клиентами
                            и исполнителями, оперативного участия в тендерах и высоких коммерческих качеств топ-менеджеров.
                        </p>
                    </Col>
                </Row>

                {/* Качество и контроль */}
                <Row>
                    <Col>
                        <h2 style={styles.sectionTitle}>Качество и безопасность</h2>
                        <p>
                            Обеспечение показателей качества и безопасности оказываемых услуг — один из важнейших приоритетов.
                            Качество производимой продукции и проводимых работ соответствует требованиям социальных стандартов
                            и нормативно-технической документации.
                        </p>
                        <p>
                            Для повышения контроля производства строительно-монтажных работ предприятие имеет все необходимые
                            контрольно-измерительные средства и испытательное оборудование, а также квалифицированный персонал
                            с опытом в системе контроля качества.
                        </p>
                        <div style={styles.highlightBox}>
                            <strong>Политика в области качества</strong>, разработанная и внедренная в ОАО «Управление СтройМеханизации»,
                            гарантирует максимальное удовлетворение запросов потребителей, ориентируется на динамику и развитие
                            требований, и является обязанностью каждого работника предприятия.
                        </div>
                    </Col>
                </Row>

                {/* Сильные стороны */}
                <Row>
                    <Col>
                        <h2 style={styles.sectionTitle}>Сильные стороны</h2>
                        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                            {strengths.map((item, idx) => (
                                <li key={idx} style={{ marginBottom: '8px' }}>
                                    <span style={styles.listIcon}>★</span> {item}
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>

                {/* Условия сотрудничества */}
                <Row>
                    <Col>
                        <Card style={styles.card}>
                            <Card.Body>
                                <Card.Title style={styles.subTitle}>Условия сотрудничества</Card.Title>
                                <p><strong>Срок исполнения работ по договору:</strong> от 1 месяца</p>
                                <p><strong>Оплата:</strong> 30% аванс, 50% поэтапно, 20% по акту</p>
                                <p><strong>Гарантия:</strong> 3–5 лет на работы</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Контакты и приглашение */}
                <Row>
                    <Col>
                        <div style={styles.contactBox}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>Приглашение к сотрудничеству</h3>
                            <p>
                                Приглашаем вас к взаимовыгодному сотрудничеству! Мы уверены, что наше предложение станет надежным
                                фундаментом для вашего успеха, а индивидуальный подход и оперативная поддержка сделают каждый ваш
                                проект по-настоящему выдающимся. Свяжитесь с нами сегодня — вместе мы создадим нечто большее!
                            </p>
                            <hr />
                            <p>
                                <strong>Юридический адрес:</strong> 220075, г. Минск, ул. Промышленная, 11а<br />
                                <strong>Форма собственности:</strong> Открытое акционерное общество<br />
                                <strong>Электронный адрес:</strong> <a href="mailto:usm_info@mail.ru">usm_info@mail.ru</a><br />
                                <strong>Сайт:</strong> <a href="http://усм.бел" target="_blank" rel="noopener noreferrer">усм.бел</a>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <FooterComponent />
        </>
    );
};

export default CompanyInfo;