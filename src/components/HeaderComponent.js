import React from 'react';
import {Container} from "react-bootstrap";
import logo from '../img/logo/logoTrest.jpg'
import {Link} from "react-router-dom";

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
                            <a href="#footer">О нас</a>
                        </li>
                        <li>
                            <a href="#services">Наши услуги</a>
                        </li>
                        <li>
                            <a href="#projects">Наши объекты</a>
                        </li>
                        <li>
                            <a href="#footer">Контакты</a>
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
                                    <a href="#">Борьба с корупцией</a>
                                </li>
                                <li>
                                    <Link to="/profUnion">Профсоюзная жизнь</Link>
                                </li>
                                <li>
                                    <a href="#">Техника безопасности</a>
                                </li>
                            </ul>
                        </li>
                        {/*<li>*/}
                        {/*    <a href="contact.html">Contact</a>*/}
                        {/*</li>*/}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default HeaderComponent;