import React from 'react';
import {Link} from "react-router-dom";
import years5 from '../img/banners/5years.jpg'
import women from '../img/banners/women.jpg'


function FooterComponent(props) {
    return (
        <footer id="footer" className="footer">
            <div className="footer-content position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-info">
                                <h3>ОАО «Управление СтройМеханизации» </h3>
                                <p>
                                    Республика Беларусь г.Минск <br/>
                                    ул.Серова д.28, корп. 2<br/><br/>
                                    <strong>Телефон:</strong>+375 17 388 05 95<br/>
                                    <strong>Факс:</strong> +375 17 270 76 84 <br/>
                                    <strong>Email:</strong> main@усм.бел <br/>
                                </p>
                                <div className="social-links d-flex mt-3">
                                    <a href="#" className="d-flex align-items-center justify-content-center"><i
                                        className="bi bi-twitter"></i></a>
                                    <a href="#" className="d-flex align-items-center justify-content-center"><i
                                        className="bi bi-facebook"></i></a>
                                    <a href="#" className="d-flex align-items-center justify-content-center"><i
                                        className="bi bi-instagram"></i></a>
                                    <a href="#" className="d-flex align-items-center justify-content-center"><i
                                        className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Официальные интернет ресурсы</h4>
                            <ul>
                                <li><a href="https://mas.gov.by/ru">Министерство архитектуры и строительства</a></li>
                                <li><a href="https://bsc.by">РУП «БЕЛСТРОЙЦЕНТР»</a></li>
                                <li><a href="https://gosstroyportal.by">ГОССТРОЙПОРТАЛ</a></li>
                                <li><a href="https://pravo.by">Национальный правовой портал</a></li>
                                {/*<li> <Link to="/contacts">Контакты</Link></li>*/}
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Наши услуги</h4>
                            <ul>
                                <li><a href="#services">Возведение сооружений</a></li>
                                <li><a href="#services">Строительство</a></li>
                                <li><a href="#services">Демонтаж зданий и сооружений</a></li>
                                <li><a href="#services">Переработка строительных отходов</a></li>
                                <li><a href="#services">Аренда</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Информация</h4>
                            <ul>
                                <li><a href="/sertificate">Сертификаты</a></li>
                                <li><a href="/fin">Финансовая отчетность</a></li>
                                <li>
                                    <Link to="/coruption">Борьба с корупцией</Link>
                                </li>
                                <li>
                                    <Link to="/profUnion">Профсоюзная жизнь</Link>
                                </li>
                                <li>
                                    <Link to="/Actioner">Для акционеров</Link>
                                </li>
                                {/*<li>*/}
                                {/*    <a href="https://bsc.by/ru/page/ideologicheskaya-i-obshchestvennaya-rabota">*/}
                                {/*        Идеологическая работа*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <a href="https://minsk.gov.by/ru/actual/view/209/2026.shtml">*/}
                                {/*        Единый день информирования*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                    </div>

                    {/* === НОВЫЙ БЛОК С БАННЕРАМИ === */}
                    <div className="row mt-5 pt-3 border-top">
                        <div className="row mt-5 pt-3 border-top justify-content-center">
                            <div className="col-12">
                                {/*<h5 className="text-center mb-4">Наши партнёры и рекламные баннеры</h5>*/}
                            </div>
                            <div className="col-md-3 mb-3">   {/* было col-md-4 */}
                                <a href="https://president.gov.by/ru/documents/ukaz-no-31-ot-17-anvara-2025-g" target="_blank" rel="noopener noreferrer" className="d-block">
                                    <img
                                        src={years5}
                                        alt="Баннер 1"
                                        className="img-fluid rounded shadow-sm"
                                        style={{width: '100%', height: '150px', objectFit: 'cover'}}
                                    />
                                </a>
                            </div>
                            <div className="col-md-3 mb-3">   {/* было col-md-4 */}
                                <a href="https://president.gov.by/ru/documents/ukaz-no-1-ot-1-anvara-2026-g" target="_blank" rel="noopener noreferrer" className="d-block">
                                    <img
                                        src={women}
                                        alt="Баннер 2"
                                        className="img-fluid rounded shadow-sm"
                                        style={{width: '100%', height: '150px', objectFit: 'cover'}}
                                    />
                                </a>
                            </div>
                        </div>
                        {/*<div className="col-md-4 mb-3">*/}
                        {/*    <a href="#" target="_blank" rel="noopener noreferrer" className="d-block">*/}
                        {/*        <img*/}
                        {/*            src="https://placehold.co/600x200/f8f9fa/343a40?text=Баннер+3:+Переработка+отходов"*/}
                        {/*            alt="Баннер 3"*/}
                        {/*            className="img-fluid rounded shadow-sm"*/}
                        {/*            style={{ width: '100%', objectFit: 'cover' }}*/}
                        {/*        />*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>

            <div className="footer-legal text-center position-relative">
                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>ОАО «Управление СтройМеханизации»</span></strong>. All Rights
                        Reserved
                    </div>
                    <div className="credits">
                        Designed by dzmitrydubouski2@gmail.com
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default FooterComponent;