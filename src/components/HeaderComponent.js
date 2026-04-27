import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from '../img/logo/logoTrest.jpg'
import {Link} from "react-router-dom";
import choise from '../img/logo/img.png'
import CompanyInfo from "../pages/CompanyInfo";

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
                        <li className="dropdown">
                            <a href="/">
                                <span>О компании</span>{" "}
                                <i className="bi bi-chevron-down dropdown-indicator active"></i>
                            </a>
                            <ul>


                                <li>
                                    <Link to="/organizationsInfo">Вышестоящие организации</Link>
                                </li>
                                <li>
                                    <Link to="/managment">Руководство организации</Link>
                                </li>
                                <li>
                                    <Link to="/contacts">Структура</Link>
                                </li>
                                <li>
                                    <Link to="/companyInfo">Направления деятельности</Link>
                                </li>
                                <li>
                                    <Link to="/Actioner">Для акционеров</Link>
                                </li>
                                <li>
                                    <Link to="/profUnion">Профсоюзная жизнь</Link>
                                </li>
                                <li>
                                    <Link to="/idealog">Идеологическая работа</Link>
                                </li>
                                <li>
                                    <Link to="/coruption">Борьба с корупцией</Link>
                                </li>

                                <li>
                                    <a href="https://minsk.gov.by/ru/actual/view/209/2026.shtml">
                                        Единый день информирования
                                    </a>
                                </li>

                            </ul>
                        </li>
                        {/*<li>*/}
                        {/*    <a href="/" className="active"> Главная </a>*/}
                        {/*</li>*/}
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
                                    <Link to="/news">Новости</Link>
                                </li>
                                <li>
                                    <Link to="/sertificate">Сертификаты</Link>
                                </li>
                                <li>
                                    <Link to="/fin">Финансовая отчетность</Link>
                                </li>

                                <li>
                                    <Link to="/Actioner">Для акционеров</Link>
                                </li>
                                <li>
                                    <a href="https://ptm.by/storage/041225/%D0%94%D0%B8%D1%80%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D0%B0%20%E2%84%96%201.pdf">
                                        Директива №1
                                    </a>
                                </li>
                                <li>
                                    <a href="https://president.gov.by/ru/documents/ukaz-no-1-ot-1-anvara-2026-g">
                                        Год женщины
                                    </a>
                                </li>
                                <li>
                                    <a href="https://president.gov.by/ru/documents/ukaz-no-31-ot-17-anvara-2025-g">
                                        Пятилетка качества
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