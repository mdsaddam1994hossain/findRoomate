import React from 'react';
import { Row, Col } from 'antd';
import './Login.css'
import { Input, Space, } from 'antd';
import { ArrowRightOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div>
            <div className="container-fluid">
                <div>
                    <Row>
                        <Col  xs={{offset:2,span:20}} sm={{ offset: 6, span: 12}} md={{offset: 7, span:10 }} lg={{offset: 8, span: 8  }} style={{ textAlign: "center", marginTop: "3rem" }}>
                            <img src='./img/Illustration4.png' width="100%" />
                        </Col>
                    </Row>

                </div>

                <div>
                    <Row>
                        <Col xs={{offset:2,span:20}} sm={{ offset: 6, span: 12 }} md={{ offset: 7, span:10 }} lg={{ offset: 8, span: 8 }} style={{ textAlign: "left", marginTop: "1rem" }}>
                            <p className="logStyle">Login</p>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col xs={{offset:2,span:20}} sm={{ offset: 6, span: 12 }} md={{ offset: 7, span:10 }} lg={{ offset: 8, span: 8 }} style={{ textAlign: "left" }}>
                            <Input className="input-style" placeholder="Login" />
                        </Col>

                    </Row>
                    <Row>
                        <Col xs={{offset:2,span:20}} sm={{ offset: 6, span: 12}} md={{offset: 7, span:10 }} lg={{offset: 8, span: 8  }} style={{ textAlign: "left", marginTop: "1rem" }}>
                           <div style={{display:"flex"}}>
                               <Input.Password className="input-style" placeholder="Password" />
                               {/* <img src='./img/Vector14.png' style={{marginTop:"25px",width:"10px",height:"14px",position:"relative",left:"-20px"}} /> */}

                           </div>
                        </Col>

                    </Row>

                </div>

                <div>
                    <Row>
                        <Col  xs={{offset:2,span:20}} sm={{ offset: 6, span: 12}}  md={{offset: 7, span:10 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "1rem" }}>
                            <div className="log-btn-style">
                                    Login              
                                <div>
                                    <Link to='/latsGo'>
                                        <ArrowRightOutlined style={{ color: "white" }} />
                                    </Link>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </div>

                <div>

                    <Row style={{ marginTop: "2rem" }}>
                        <Col span={24} style={{ textAlign: "center" }}>
                            <p className="p-style">Forgot password ?<span style={{ fontWeight: "800", color: "#191D21" }}> Get new</span> </p>
                            <p className="p-style"> Dou you have an account ?<span style={{ fontWeight: "800", color: "#191D21" }}> Create new</span> </p>
                        </Col>
                    </Row>

                </div>

                <div>

                    <Row>
                        <Col span={24} style={{ textAlign: "center" }}>
                            <img src='./img/Home indicator.png' />
                        </Col>
                    </Row>

                </div>


            </div>
        </div>
    );
};

export default Login;