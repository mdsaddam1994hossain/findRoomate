import React from 'react';
import './Details3.css';
import { Row, Col } from 'antd';

const Details3 = () => {
    return (
        <div className="container-fluid">
            <div>
                <Row>
                    <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 7, span: 10 }} style={{ marginTop: "2rem" }}>

                        <p className="jhon-style">John's Place</p>

                    </Col>

                </Row>
                <Row>
                    <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 7, span: 10 }} style={{ marginTop: "-1.5rem" }}>

                        <p className="d-detail-style">Hey you, looking for a roommate? we've helped millions across the nation find their perfect match... and you're next! Hey you, looking for a roommate? we've helped millions across the nation find their perfect match... and you're next!</p>

                    </Col>

                </Row>
                <Row>
                    <Col xs={{ offset: 1, span: 22 }} sm={{  offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 7, span: 10 }} >
                        <div className="book-room-style">
                            <p className="room-style">Book a Room</p>
                            <img src="./img/Vector13.png" alt="error" className="self-style"/>
                        </div>
                         

                    </Col>

                </Row>
                <Row  >
                    <Col xs={{ offset: 1, span: 22 }} sm={{  offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 7, span: 10 }} style={{ marginTop: "1rem" }}>
                       <img src='./img/illustration4.png' alt="error" width="100%"  />
                    </Col>
                </Row>
                <Row justify="center" style={{marginTop:"6rem"}}>
                    <Col>
                       <img src='./img/Home Indicator.png' />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Details3;