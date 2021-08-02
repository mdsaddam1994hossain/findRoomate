import React, { useState } from 'react';
import { Row, Col, Rate } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import './YourRoomie.css'
import BootomTab from '../BootomTab/BootomTab';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import RoomieData from '../YourRoomieData.json'


const YourRoomie = () => {



    const title = <p className="favorite-style">Your Roomies</p>
    const icon1 = <SearchOutlined style={{ paddingTop: "5px", marginRight: "15px" }} />
    const icon2 = <img src='./img/rate.png' />


    return (
        <div style={{ background: "#E8EEF3", height: "800px" }}>
            <div className="container-fluid">

                <Header title={title} icon1={icon1} icon2={icon2} >

                </Header>
                <div>
                    <Row>
                        <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 5, span: 14 }} md={{ offset: 7, span: 10 }} lg={{ offset: 7, span: 10 }} style={{ textAlign: "left" }}>

                            {RoomieData.map((item, index) => {
                                return (

                                    <div key={index} style={{ display: "flex", width: "100%", background: "white", borderRadius: "8px", padding: "4px, 8px, 4px, 8px", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
                                        <div className="image-style">
                                            <img src={item.image} />
                                        </div>
                                        <div className="text-style">
                                            <p className="text-styles">{item.name} </p>
                                            <p className="vi-style">{item.country}</p>
                                        </div>
                                        <div className="doted-style">
                                            <img src={item.option} />
                                        </div>
                                    </div>

                                )
                            })}

                        </Col>
                    </Row>

                    <Row>
                        <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 5, span: 14 }} md={{ offset: 7, span: 10 }} lg={{ offset: 7, span: 10 }} style={{ textAlign: "left", marginTop: "1rem" }}>
                            <Link to='/favorites'> <p className="logStyle">Other Matches</p>  </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 5, span: 14 }} md={{ offset: 7, span: 10 }} lg={{ offset: 7, span: 10 }} style={{ textAlign: "left" }}>
                            <div className="mainDivs">
                                <div className="div-1-style">
                                    <div>
                                        <img src='./img/Nomads.png' />
                                    </div>
                                    <div>
                                        <div style={{ display: "flex", position: "relative", top: "40px" }} >
                                            <p className="g-style">Gary</p>
                                            <p className="d-style">$500</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="div-1-style">
                                    <div>
                                        <img src='./img/Nomads2.png' />
                                    </div>
                                    <div>
                                        <div style={{ display: "flex", position: "relative", top: "40px" }} >
                                            <p className="g-style">Sassa</p>
                                            <p className="d-style">$500</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

            </div>
            {/* <div>
                <Row>
                    <Col xs={{  span: 24 }} sm={{ offset: 5, span: 14 }} md={{ offset: 7, span: 10 }} lg={{ offset: 7, span: 10 }} style={{ textAlign: "center" }}>
                        <BootomTab />
                    </Col>
                </Row>
            </div> */}
        </div>
    );
};

export default YourRoomie;