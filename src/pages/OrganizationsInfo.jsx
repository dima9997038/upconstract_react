import React from 'react';
import { Container } from 'react-bootstrap';
import NavBarComponent from "../components/NavBarComponent";
import FooterComponent from "../components/FooterComponent";

const OrganizationsInfo = () => {
    // Данные организаций
    const organizations = [
        {
            id: 1,
            name: 'Минстройархитектуры Республики Беларусь',
            address: 'улица Мясникова, 39, Минск, Беларусь',
            schedule: {
                week: 'Пн-Пт: 09:00-13:00, 13:00-18:00',
                weekend: 'Сб, Вс: выходные'
            },
            email: 'mas@mas.by',
            website: 'https://mas.gov.by/ru',
            phone: '+375 (17) 200-02-68',
            fax: '+375 (17) 200 74 24'
        },
        {
            id: 2,
            name: 'РУП «Белстройцентр»',
            address: 'улица Розы Люксембург, 101, Минск, Беларусь',
            schedule: {
                week: 'Пн-Чт: 08:30-11:45, 12:30-17:30',
                friday: 'Пт: 08:30-11:45, 12:15-16:00',
                weekend: 'Сб, Вс: выходные'
            },
            email: 'bsc@bsc.by',
            website: 'https://bsc.by/ru/',
            phone: '(017) 363-78-32',
            fax: null
        }
    ];

    const renderSchedule = (org) => {
        if (org.id === 1) {
            return (
                <>
                    <div>{org.schedule.week}</div>
                    <div>{org.schedule.weekend}</div>
                </>
            );
        } else {
            return (
                <>
                    <div>{org.schedule.week}</div>
                    <div>{org.schedule.friday}</div>
                    <div>{org.schedule.weekend}</div>
                </>
            );
        }
    };

    const styles = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            justifyContent: 'center',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
        },
        card: {
            flex: '1 1 400px',
            maxWidth: '500px',
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            padding: '24px',
            transition: 'transform 0.2s, box-shadow 0.2s',
            cursor: 'pointer'
        },
        cardHover: {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
        },
        title: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '16px',
            color: '#1e3a8a',
            borderBottom: '2px solid #e5e7eb',
            paddingBottom: '8px'
        },
        section: {
            marginBottom: '16px'
        },
        label: {
            fontWeight: 'bold',
            color: '#374151',
            marginRight: '8px',
            display: 'inline-block',
            minWidth: '120px'
        },
        text: {
            color: '#4b5563',
            lineHeight: '1.5'
        },
        link: {
            color: '#2563eb',
            textDecoration: 'none',
            wordBreak: 'break-all'
        },
        scheduleBlock: {
            marginTop: '4px',
            marginLeft: '8px'
        }
    };

    const [hoveredId, setHoveredId] = React.useState(null);

    return (
        <>
            <NavBarComponent />
            <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                <div style={styles.container}>
                    {organizations.map((org) => (
                        <div
                            key={org.id}
                            style={{
                                ...styles.card,
                                ...(hoveredId === org.id ? styles.cardHover : {})
                            }}
                            onMouseEnter={() => setHoveredId(org.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <h2 style={styles.title}>{org.name}</h2>

                            <div style={styles.section}>
                                <span style={styles.label}>📍 Место нахождения:</span>
                                <span style={styles.text}>{org.address}</span>
                            </div>

                            <div style={styles.section}>
                                <span style={styles.label}>🕒 Режим работы:</span>
                                <div style={styles.scheduleBlock}>{renderSchedule(org)}</div>
                            </div>

                            <div style={styles.section}>
                                <span style={styles.label}>📧 E-mail:</span>
                                <a
                                    href={`mailto:${org.email}`}
                                    style={styles.link}
                                    onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
                                    onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
                                >
                                    {org.email}
                                </a>
                            </div>

                            <div style={styles.section}>
                                <span style={styles.label}>🌐 Официальный сайт:</span>
                                <a
                                    href={org.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.link}
                                    onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
                                    onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
                                >
                                    {org.website}
                                </a>
                            </div>

                            <div style={styles.section}>
                                <span style={styles.label}>📞 Тел./факс:</span>
                                <div style={styles.text}>
                                    <a href={`tel:${org.phone.replace(/[^0-9+]/g, '')}`} style={styles.link}>
                                        {org.phone}
                                    </a>
                                    {org.fax && (
                                        <>
                                            {' / '}
                                            <a href={`tel:${org.fax.replace(/[^0-9+]/g, '')}`} style={styles.link}>
                                                {org.fax}
                                            </a>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
            <FooterComponent />
        </>
    );
};

export default OrganizationsInfo;