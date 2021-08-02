
import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import './ComponentHeader.css'


const ComponentHeader = () => {
    return (
        <div>

            <div>
                <Row>


                    <Col offset={2} span={20} style={{ textAlign: "center", marginTop: "1rem" }}>
                        <Row style={{ display: "flex", justifyContent: "space-between" }}>
                            <Col span={2}>
                                <Link to="/favorites2">
                                    <img src='./img/Vector9.png' />
                                </Link>
                            </Col>
                            <Col span={20}>
                                <p className="fa-style">Favorites</p>
                            </Col>
                            <Col span={2}>

                                <img src='./img/Vector10.png' />

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>

        </div>
    );
};

export default ComponentHeader;