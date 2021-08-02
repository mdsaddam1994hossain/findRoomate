import React from 'react';
import { Row, Col } from 'antd'
import './FindPerfect2.css'
import BootomTab from '../BootomTab/BootomTab';
import Header from '../Header/Header';


const FindPerfect2 = () => {

    const title = <p className="favorite-style">Find Your Perfect Roomie</p>
    const icon2 = <div>
                    <div style={{ width: "4.5px", height: "5px", background: "#656F77", borderRadius: "50%", marginTop: "15px", marginLeft: "10px" }}></div>
                    <div style={{ width: "4.5px", height: "5px", background: "#656F77", borderRadius: "50%", marginTop: "2px", marginLeft: "10px" }}></div>
                    <div style={{ width: "4.5px", height: "5px", background: "#656F77", borderRadius: "50%", marginTop: "2px", marginLeft: "10px" }}></div>
                </div>
    return (
        <div >
            <div className="container-fluid">
                

                <Header title={title} icon2={icon2}/>

                <div>
                    <Row >
                        <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 5, span: 14 }} md={{ offset: 7, span: 10 }} lg={{ offset: 7, span: 10 }}  >
                            <div className="div-style">
                                <div >
                                    <img src='./img/ImageContainer2.png' />
                                </div>
                                <div style={{ display: "flex", alignSelf: "flex-start" }} >
                                    <div> <p className="pstyle" >Lou Smith</p></div>
                                </div>
                                <div style={{ display: "flex", alignSelf: "flex-start" }}>
                                    <div>
                                        <p className="para-style">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.</p>
                                    </div>
                                </div>

                                <div style={{ display: "flex", alignSelf: "flex-start" }}>
                                    <div>
                                        <p className="style-week">2 weeks</p>
                                    </div>
                                </div>
                                <div style={{width:"80%"}}>
                                    <button className="style-button">Connect with Lou</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 5, span: 14 }} md={{ offset: 7, span: 10 }} lg={{ offset: 7, span: 10 }} style={{ textAlign: "left", marginTop: "1rem" }}>
                            <p className="style-week">Home Performence</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 5, span: 14 }} md={{ offset: 7, span: 10 }} lg={{ offset: 7, span: 10 }} style={{ textAlign: "left" }}>
                            <div className="mainDiv">
                                <div className="piramid">
                                    <div>
                                        <img src='./img/Mountain2.png' />
                                    </div>
                                    <div>
                                        <p style={{ fontFamily: "Nunito", fontWeight: "800", fontSize: "14px", position: "relative", top: "10px", left: "10px" }}>Mountains</p>
                                    </div>
                                </div>
                                <div className="city">
                                    <div>
                                        <img src='./img/Museum.png' />
                                    </div>
                                    <div>
                                        <p style={{ fontFamily: "Nunito", fontWeight: "800", fontSize: "14px", position: "relative", top: "10px", left: "10px" }}>City</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
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

export default FindPerfect2;