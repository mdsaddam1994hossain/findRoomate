import React from 'react';
import './Favorites2.css'
import { Row, Col, Input, Search } from 'antd';
import { ArrowRightOutlined, SearchOutlined } from '@ant-design/icons';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const Favorites2 = () => {

    const title = <p className="favorite-style">Favorites</p>
    const icon2 = <img src='./img/Logo.svg' />
    return (
        <div>
            <div className="container-fluid">

                <Header title={title} icon2={icon2} />
                <div>
                    <Row>
                        <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 7, span: 10 }} style={{ textAlign: "left", }}>

                            <div className="searchBox" >
                                <div>
                                    <Input placeholder="Search" style={{ border: "none", onFocus: "none",background:"none" }} />


                                </div>
                                <div>
                                    <SearchOutlined />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div>
                    <Row>
                        <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 4, span: 16}} md={{ offset: 6, span: 12  }} lg={{ offset: 7, span: 10 }} style={{ textAlign: "left", marginTop: "1rem" }}>
                            <p className="logStyle">Around The World</p>
                        </Col>
                    </Row>

                </div>
                <div>
                    <Row>
                        <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 4, span: 16}} md={{ offset: 6, span: 12  }} lg={{ offset: 7, span: 10 }} style={{ textAlign: "left" }}>
                            <div className="home-div">

                                <div className="div-one">
                                    <img src='./img/NomadsCampfire.png' />
                                </div>

                                <div >
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div>
                                            <p className="l-style">L.A</p>

                                        </div>
                                        <div>
                                            <p className="textStyle"> $500</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="t-style">Discover new places and find new adventures.</p>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "15px" }}>
                        <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 4, span: 16}} md={{ offset: 6, span: 12 }} lg={{ offset: 7, span: 10 }} style={{ textAlign: "left" }}>
                            <div className="home-div">

                                <div className="div-one-sub-one">
                                    <img src='./img/NomadsJapan.png' />
                                </div>

                                <div >
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div>
                                            <p className="l-style">Madrid</p>

                                        </div>
                                        <div>
                                            <p className="textStyle"> $500</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="t-style">Discover new places and find new adventures.</p>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "15px" }}>
                        <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 4, span: 16}} md={{ offset: 6, span: 12  }} lg={{ offset: 7, span: 10 }} style={{ textAlign: "left" }}>
                            <div className="home-div">

                                <div className="div-one-sub-two">
                                    <img src='./img/NomadsLondon.png' />
                                </div>

                                <div >
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div>
                                            <p className="l-style">Dublin</p>

                                        </div>
                                        <div>
                                            <p className="textStyle"> $500</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="t-style">Discover new places and find new adventures.</p>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "15px" }}>
                        <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 4, span: 16}} md={{offset: 6, span: 12  }} lg={{ offset: 7, span: 10 }} style={{ textAlign: "left" }}>
                            <div className="home-div">

                                <div className="div-one-sub-three">
                                    <img src='./img/NomadsRoadTrip.png' />
                                </div>

                                <div >
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div>
                                            <p className="l-style">Lima</p>

                                        </div>
                                        <div>
                                            <p className="textStyle"> $500</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="t-style">Discover new places and find new adventures.</p>
                                    </div>
                                </div>

                            </div>
                            <Link to='/favorites3' ><img src='./img/Vector8.png' style={{float:"right",margin:"20px"}} /> </Link>
                        </Col>
                    </Row>
                    
                </div>

               

            </div>
        </div>
    );
};

export default Favorites2;