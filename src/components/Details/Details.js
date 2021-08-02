import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import './Details.css'

const Details = () => {
    return (
        <div style={{ background: "#191D21" }} >
            <div style={{ background: "white", borderRadius: "0 0 16px 16px" }}>
                <div className="container-fluid">


                    <div>
                        <Row>
                            <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 7, span: 10 }} style={{ marginTop: "1rem" }}>
                                <Link to="/favorites2">
                                    <img src='./img/Vector9.png' />
                                </Link>
                            </Col>
                        </Row>
                        <Row justify="center">
                            <Col  style={{ marginTop: "1rem" }}>

                                <img src='./img/Nomads Camping Chill.png' />

                            </Col>
                        </Row>
                    </div>
                    <div>

                        <Row >
                            <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 7, span: 10 }} style={{ marginTop: "2rem" }}>

                                <p className="cam-style">Camping in L.A.</p>

                            </Col>
                        </Row>
                        <Row >
                            <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 7, span: 10 }} style={{ marginTop: "-1rem" }}>

                                <p className="los-style">Los Angels,USA -3 weeks</p>

                            </Col>
                        </Row>
                        <Row >
                            <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 7, span: 10 }} style={{}}>

                                <p className="d-detail-style">Hey you, looking for a roommate? we've helped millions across the nation find their perfect match... and you're next! Hey you, looking for a roommate? we've helped millions across the nation find their perfect match... and you're next!</p>

                            </Col>
                        </Row>
                        <Row >
                            <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 7, span: 10 }} style={{ marginTop: "-.5rem" }}>

                                <p className="los-style">Tags</p>

                            </Col>
                        </Row>
                        <Row >
                            <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 7, span: 10 }} style={{ display: "flex", marginBottom: "20px" }}>

                                <div className="mounting">
                                    <p>#Mountains</p>
                                </div>
                                <div className="mounting">
                                    <p>#PetFriendly</p>
                                </div>
                                <Link to='/details2' ><img src='./img/Vector8.png' style={{float:"right",margin:"20px"}} /> </Link>

                            </Col>
                        </Row>

                    </div>

                </div>
            </div>
            <div>
                <Row justify="center">
                    <Col >
                        <p className="sel-date"> Select Date </p>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col>
                        <img src='./img/Home Indicator.png' style={{ marginTop: "-10px", zIndex: "0" }} />
                       
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Details;