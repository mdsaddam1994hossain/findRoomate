import React from 'react';
import { ReactDOM } from 'react';
import { Row, Col } from 'antd'
import './Upcomming.css'
import { Input, Space, } from 'antd';
import Header from '../Header/Header';
import { ArrowRightOutlined, SearchOutlined } from '@ant-design/icons';
import BootomTab from '../BootomTab/BootomTab';


const Upcomming = () => {

    const x = window.screen.height;
    const y = window.screen.width;

    console.log(window.screen.width, '******************');

    const search = <div>
        <div className="serach-box-style">
            <div className="search-box">
                <div>
                    <SearchOutlined style={{ paddingTop: "15px", paddingLeft: "10px" }} />
                </div>
                <div>
                    <Input placeholder="Search" style={{ border: "none", onFocus: "none", paddingTop: "10px",background:"none" }} />
                </div>
            </div>
        </div>
    </div>

    const icon2 = <div className="img-style">
        <img src='./img/NomadsAvatar2.png' />
    </div>


    return (
        <div  >
            <div className="container-fluid">
                <div>

                    <div>

                        <Header title={search} icon2={icon2} />
                        <Row>
                            <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 7, span: 10 }} style={{ textAlign: "left", marginTop: "1rem" }}>
                                <p className="logStyle">Upcoming meetups</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 7, span: 10 }} style={{ textAlign: "left" }}>
                                <div className="main-div">
                                    <div className="div-1">
                                        <img src='./img/camera-photo.png' />
                                    </div>
                                    <div className="div-2">
                                        <img src='./img/vector2.png' />
                                    </div>
                                    <div className="div-3">
                                        <img src='./img/Mountain.png' />
                                    </div>
                                    <div className="div-4">
                                        <img src='./img/vector3.png' />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div>
                        <Row >
                            <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 7, span: 10 }} style={{ textAlign: "left", marginTop: "1rem" }}>
                                <div style={{ width: "100%", boxShadow: " 0px 8px 16px rgba(0, 0, 0, 0.12);" }} >
                                    <div style={{ background: "#CBE3FF", borderRadius: "20px 20px 0px 0px" }}>
                                        <img style={{ padding: "5px" }} src='./img/calender.png' />
                                    </div>
                                    <div style={{ background: "#FFFFFF", borderRadius: "0px 0px 20px 20px", boxShadow: " 0px 8px 16px rgba(0, 0, 0, 0.12)" }}>
                                        <p className="p-style" style={{ padding: "10px 0 0 10px" }}>USA, Los Angeles - 2 Weeks</p>
                                        <p className="pstyle" style={{ padding: "0px 0 10px 10px" }}> City of Los Angeles</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 7, span: 10 }} style={{ textAlign: "left" }}>
                                <dvi >
                                    <img className="imgContainer-style" src='./img/ImageContainer.png' />
                                </dvi>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            {/* <Row>
                <Col xs={{ span: 24 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 7, span: 10 }} style={{ textAlign: "center" }}>
                    <BootomTab />
                </Col>
            </Row> */}
            
        </div>
    );
};

export default Upcomming;

