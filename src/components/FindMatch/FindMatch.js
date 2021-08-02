import React from 'react';
import Heder from '../Heder';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import './FindMatch.css'

const style = { background: '#0092ff', padding: '8px 0' };

const FindMatch = () => {
    return (
        <div style={{ background: "#FFE3D2", height: "800px" }}>
            <div className="container-fluid">
                {/* <Heder /> */}
                <div style={{ paddingTop: "4rem" }}>
                    <Row>
                        <Col xs={{ offset: 2, span: 20, }} sm={{ offset: 6, span: 12, }} md={{ offset: 7, span: 10 }} lg={{ offset: 9, span: 6 }} style={{ textAlign: "left", marginTop: "2rem" }}>
                            <p className="pstyle">Find Your Match!</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{ offset: 2, span: 20, }} sm={{ offset: 6, span: 12, }} md={{ offset: 7, span: 10 }} lg={{  offset: 9, span: 6 }} style={{ textAlign: "left", marginTop: "-1.5rem" }}>
                            <p className="para-style">We've helped millions across the nation find their perfect match... and you're next!</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{ offset: 2, span: 20, }} sm={{ offset: 6, span: 12, }} md={{ offset: 7, span: 10 }} lg={{  offset: 9, span: 6 }} style={{ textAlign: "left" }}>
                            <img src='./img/Pagination.png' />
                        </Col>
                    </Row>

                </div>
                <div>
                    <Row>
                        <Col span={24} style={{ textAlign: "center" }}>
                            <img src='./img/Illustration2.png' />
                        </Col>
                    </Row>

                </div>
                <div>
                    <Row>
                        <Col  xs={{  span: 24 }} sm={{ offset: 5, span: 14, }} md={{ offset: 7, span: 10 }} lg={{ offset: 8, span: 8 }} >
                            <Row style={{ textAlign: "center", marginTop: "4rem" }}>
                                <Col xs={{ offset:1, span: 10 }} sm={{ offset: 1, span: 10 }}  md={{  span: 11 }} lg={{span: 11 }}>
                                    <button className="skiped-button">Skip</button>
                                </Col>
                                <Col xs={{offset:1, span: 10 }} sm={{ offset: 1, span: 10 }}  md={{ span: 11 }} lg={{span: 11}}>
                                    <Link to='/findPerfect'>
                                        <button className="next-buttons">Next</button>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div>

                    <Row justify="center">
                        <Col  style={{marginTop: "2rem" }}>
                            <img src='./img/Home indicator.png' />
                        </Col>
                    </Row>

                </div>

            </div>
        </div>
    );
};

export default FindMatch;