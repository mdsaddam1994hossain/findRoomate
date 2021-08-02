import React from 'react';
import './LatsGo.css'
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const LatsGo = () => {
    return (
        <div style={{ background: "#CFFFF6", height: "800px" }}>
            <div className="container-fluid">

                <div>
                    <Row>
                        <Col span={24} style={{ textAlign: "center", marginTop: "3rem" }}>
                            <img src='./img/NomadsFoodies.png' />
                        </Col>
                    </Row>
                </div>

                <div>

                    <Row>
                        <Col xs={{offset:2,span:20}} sm={{offset:5,span:14}} md={{offset:7,span:10}} lg={{offset:8,span:8}}style={{ textAlign: "center" }}>
                            <p className="find-style">Find Your Roomie</p>
                            <p className="p-style"> We've helped millions across the nation find their perfect match... and you're next!</p>
                        </Col>
                    </Row>

                </div>

                <div>
                    <Row>
                        <Col xs={{offset:2,span:20}} sm={{offset:5,span:14}} md={{offset:7,span:10}} lg={{offset:8,span:8}} style={{ marginTop: "2rem" }}>

                        <Link to='/layout'>
                                <div className="go-button">
                               
                                    <p >Lat's go</p>
                                  
                                </div>
                                </Link>

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
    );
};

export default LatsGo;