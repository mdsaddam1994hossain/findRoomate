import React from 'react';
import './FindRoomie.css'
import { Row, Col } from 'antd';
import Heder from '../Heder';
import { Link } from 'react-router-dom';

const FindRoomie = () => {
    return (
        <div>

            <div className="container-fluid">
                {/* header start here */}
                {/* <Heder /> */}


                <div style={{ paddingTop: "4rem" }}>

                    <Row>
                        <Col span={24} style={{ textAlign: "center" }}>
                            <img src='./img/Illustration.png' />
                        </Col>
                    </Row>

                </div>
                <div>

                    <Row>
                        <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 6, span: 12 }} md={{ offset: 8, span: 8 }} lg={{ offset: 8, span: 8 }} style={{ textAlign: "center" }}>
                            <p className="find-style">Find a Roomie!</p>
                            <p className="p-style"> We've helped millions across the nation find their perfect match... and you're next!</p>
                        </Col>
                    </Row>

                </div>
                <div>

                    <Row>
                        <Col span={24} style={{ textAlign: "center" }}>
                            <img src='./img/Pagination.png' />
                        </Col>
                    </Row>

                </div>

                <div>

                    <Row>
                        <Col xs={{  span: 24 }} sm={{ offset: 1, span: 22 }} md={{ offset: 3, span: 18 }} lg={{ offset: 6, span: 12 }} style={{ textAlign: "center" }}>
                            <Row justify="center" style={{ textAlign: "center", marginTop: "4rem" }}>
                                <Col xs={{ offset: 1, span: 10 }} sm={{ offset: 1, span: 10 }}  md={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 8 }} >
                                    <button className="skip-button">Skip</button>
                                </Col>
                                <Col xs={{ offset: 1, span: 10 }} sm={{ offset: 1, span: 10 }} md={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 8 }}>
                                    <Link to='/roomatFinder'>
                                        <button className="next-button">Next</button>
                                    </Link>
                                </Col>
                                
                            </Row>
                        </Col>
                    </Row>

                </div>

                <div>

                    <Row justify="center">
                        <Col  style={{ textAlign: "center", marginTop: "2rem",marginLeft:"15px" }}>
                            <img src='./img/Home indicator.png' />
                        </Col>
                    </Row>

                </div>

            </div>

        </div>
    );
};

export default FindRoomie;