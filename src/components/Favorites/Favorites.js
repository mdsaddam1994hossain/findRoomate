import React from 'react';
import { Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './Favorites.css'
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const Farorites = () => {

    const title =  <p className="favorite-style">Favorites</p>
    const icon1 =  <SearchOutlined style={{ paddingTop: "5px", marginRight: "15px" }} />
    const icon2 =  <img src='./img/rate.png' />

    return (
        <div style={{ background: "#E8EEF3", height: "800px" }}>

            <div className="container-fluid">

                <Header title={title} icon1={icon1} icon2={icon2}/>

                <div>
                    <Row>
                        <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 7, span: 10 }} style={{ textAlign: "left" }}>
                            <div className="card-design">
                                <div className="imgStyle">
                                    <img src='./img/NomadsCityTour.png' />
                                </div>
                                <div className="texSyle">
                                    <p className="pp-style">Italy</p>
                                    <p className="pstyles">Meet new roomies and find new adventures.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div>
                    <Row>
                        <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 7, span: 10 }} style={{ textAlign: "left", marginTop: "1rem" }}>
                            <div style={{ display: "flex", width: "100%", background: "white", borderRadius: "8px", padding: "4px, 8px, 4px, 8px", justifyContent: "space-between", alignItems: "center" }}>

                                <div className="text-style">
                                    <p className="name-style">Courtney Henry</p>
                                    <p className="place-style">Viet Nam</p>
                                </div>
                                <div className="doted-style">
                                    <img src='./img/Vector8.png' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div>
                    <Row>
                        <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 7, span: 10 }} style={{ textAlign: "left", marginTop: "1rem" }}>
                            <div style={{ display: "flex", width: "100%", background: "white", borderRadius: "8px", padding: "4px, 8px, 4px, 8px", justifyContent: "space-between", alignItems: "center" }}>

                                <div className="text-style">
                                    <p className="name-style">European Roomies</p>
                                    <p className="place-style">France</p>
                                </div>
                                <div className="doted-style">
                                    <img src='./img/Vector8.png' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div>
                    <Row>
                        <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 7, span: 10 }} style={{ textAlign: "left", marginTop: "1rem" }}>
                            <div style={{ display: "flex", width: "100%", background: "white", borderRadius: "8px", padding: "4px, 8px, 4px, 8px", justifyContent: "space-between", alignItems: "center" }}>

                                <div className="text-style">
                                    <p className="name-style">Foodie Roomies</p>
                                    <p className="place-style">Gastro Tour</p>
                                </div>
                                <div className="doted-style">
                                    <img src='./img/Vector8.png' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div>
                    <Row>
                        <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 7, span: 10 }} style={{ textAlign: "left", marginTop: "1rem" }}>
                            <div style={{ display: "flex", width: "100%", background: "white", borderRadius: "8px", padding: "4px, 8px, 4px, 8px", justifyContent: "space-between", alignItems: "center" }}>

                                <div className="text-style">
                                    <p className="name-style">New Roomies</p>
                                    <p className="place-style">Ukraine</p>
                                </div>
                                <div className="doted-style">
                                    <img src='./img/Vector8.png' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div>
                    <Row>
                        <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 7, span: 10 }} style={{ textAlign: "left", marginTop: "1rem" }}>
                            <div style={{ display: "flex", width: "100%", background: "white", borderRadius: "8px", padding: "4px, 8px, 4px, 8px", justifyContent: "space-between", alignItems: "center" }}>

                                <div className="text-style">
                                    <p className="name-style">Spanish Roomies</p>
                                    <p className="place-style">Spain</p>
                                </div>
                                <div className="doted-style">
                                   <Link to='/favorites2' ><img src='./img/Vector8.png' /> </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

            </div>

        </div>
    );
};

export default Farorites;