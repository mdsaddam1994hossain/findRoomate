import React from 'react';
import Heder from '../Heder';
import './RoommatFinder.css'
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';


const RoomatFinder = () => {
    return (
        <div style={{ background: "#393939" ,height:"800px"}}>
            <div style={{ background: "#ECDDFF", borderRadius: "0px 0px 24px 24px" }}>


                <div className="container-fluid">
                    {/* <Heder /> */}

                    <div style={{paddingTop:"4rem"}}>
                        <Row justify="center">
                            <Col>
                                <p className="pstyle">Your Roommate Finder</p>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col xs={{offset:2,span:20}} sm={{offset:4,span:16}} sm={{offset:6,span:12}} sm={{offset:8,span:8}} style={{ textAlign: "center" }}>
                                <p className="para-style">Hey you, looking for a roommate? We've helped millions across the nation find their perfect match... and you're next!</p>
                            </Col>
                        </Row>
                    </div>

                    <div>
                        <Row>
                            <Col span={24} style={{ textAlign: "center" ,marginTop:"2rem"}}>
                                <img src='./img/Nomads Moto.png' />
                            </Col>
                        </Row>
                    </div>
                    <div>

                        <Row>
                            <Col span={24} style={{ textAlign: "center", marginTop: "2rem", marginBottom: "2rem" }}>
                                <img src='./img/Pagination.png' />
                            </Col>
                        </Row>

                    </div>



                </div>
            </div>

            <div>

                <Row>
                    <Col span={24} style={{ textAlign: "center", marginTop: "3rem", marginBottom: "2rem" }}>
                         <Link to='/findMatch' >
                            <a className="a-style">Next</a>
                         </Link>
                    </Col>
                </Row>

            </div>

        </div>
    );
};

export default RoomatFinder;