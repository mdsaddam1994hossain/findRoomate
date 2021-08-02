import React from 'react';
import { Row, Col } from 'antd';
import './FindPerfect.css'
import { Menu, Button } from 'antd';
import { Input, Select, Space, Cascader } from 'antd';
import { Link } from 'react-router-dom';
const { Option } = Select;

const FindFerfect = () => {
    return (
        <div>
            <div style={{ background: "#CBE3FF"}}>
                <div className="container-fluid">
                    <div style={{ paddingTop: "4rem" }}>
                        <Row>
                            <Col xs={{ offset: 2, span: 20, }} sm={{ offset: 6, span: 12 }} md={{ offset: 7, span: 10 }} lg={{ offset: 9, span: 8 }} style={{ textAlign: "left", marginTop: "2rem" }}>
                                <p className="pstyle">Find the perfect Roommate</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={{ offset: 2, span: 20, }} sm={{ offset: 6, span: 12 }} md={{ offset: 7, span: 10 }} lg={{ offset: 9, span: 8, }} style={{ textAlign: "left", marginTop: "-1.5rem" }}>
                                <p className="para-style">We've helped millions across the nation find their perfect match... and you're next!</p>
                            </Col>
                        </Row>

                    </div>
                    <div className="explore-style">
                        <Row>
                            <Col xs={{  span: 24 }} sm={{ offset: 5, span: 14, }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} >
                                <Row style={{ textAlign: "center", marginTop: "1rem" }}>
                                    <Col xs={{ offset:1, span: 10 }} sm={{ offset: 1, span: 10 }}  md={{ offset:1, span: 10 }} lg={{offset:1, span: 10 }}>
                                        <button className="explo-btn">Explore</button>
                                    </Col>
                                    <Col xs={{ offset:1, span: 10 }} sm={{ offset: 1, span: 10 }}  md={{ offset:1, span: 10 }} lg={{offset:1, span: 10  }}>
                                        <Link to='/login'>
                                            <Select defaultValue="Log in" className="log-btn"  >
                                                <Option value="Sin up" >Sin up</Option>
                                            </Select>
                                        </Link>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col span={24} style={{ textAlign: "center" }}>
                                <img src='./img/Illustration3.png' />
                            </Col>
                        </Row>

                    </div>
                    <div>

                        <Row>
                            <Col span={24} style={{ textAlign: "center", marginTop: "1rem" }}>
                                <img src='./img/Home indicator.png' />
                            </Col>
                        </Row>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default FindFerfect;

