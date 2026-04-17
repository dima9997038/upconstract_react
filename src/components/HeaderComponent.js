import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from '../img/logo/logoTrest.jpg'
import {Link} from "react-router-dom";
import choise from '../img/logo/img.png'

function HeaderComponent(props) {
    return (
        <header id="header" className="header d-flex align-items-center">
            <Container className="container-fluid container-xl d-flex align-items-center justify-content-between">
                <a href="index.html" className="logo d-flex align-items-center">
                    <img src={logo} alt="" className="img-fluid" height="150" width='150'/>
                </a>
                <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li>
                            <a href="/" className="active"> Главная </a>
                        </li>
                        <li>
                            <a href="#projects">О нас</a>
                        </li>
                        <li>
                            <a href="#services">Наши услуги</a>
                        </li>
                        <li>
                            <a href="#projects">Наши объекты</a>
                        </li>
                        <li>
                            <Link to="/contacts">Контакты</Link>
                        </li>
                        <li className="dropdown">
                            <a href="#">
                                <span>Информация</span>{" "}
                                <i className="bi bi-chevron-down dropdown-indicator"></i>
                            </a>
                            <ul>
                                <li>
                                    <Link to="/sertificate">Сертификаты</Link>
                                </li>
                                <li>
                                    <Link to="/fin">Финансовая отчетность</Link>
                                </li>
                                <li>
                                    <Link to="/coruption">Борьба с корупцией</Link>
                                </li>
                                <li>
                                    <Link to="/profUnion">Профсоюзная жизнь</Link>
                                </li>
                                <li>
                                    <Link to="/Actioner">Для акционеров</Link>
                                </li>
                                <li>
                                    <a href="https://bsc.by/ru/page/ideologicheskaya-i-obshchestvennaya-rabota">
                                        Идеологическая работа
                                    </a>
                                </li>
                                <li>
                                    <a href="https://minsk.gov.by/ru/actual/view/209/2026.shtml">
                                        Единый день информирования
                                    </a>
                                </li>

                            </ul>
                        </li>

                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default HeaderComponent;