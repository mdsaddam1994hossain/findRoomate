import React from 'react';
import './Favorites3.css'
import { Row, Col } from 'antd'

import ComponentHeader from '../componentsHeader/ComponentHeader';
import { Link } from 'react-router-dom';

const Favorites3 = () => {
    return (
        <div style={{ background: "#E8EEF3" }} >
            <div className="container-fluid">

                <ComponentHeader />

                <div   >
                    <Row justify="center" >


                        <Col style={{ marginTop: "1rem" }}>

                            <div className="fv3-home-div">

                                <div>
                                    <p className="italy-syle">Italy</p>
                                </div>
                                <div>
                                    <p className="descri-syle">Discover and find new roomates around the world</p>
                                </div>
                                <div>
                                    <img src='./img/NomadsTrekking.png' width="100%" style={{ position: "relative", top: "-15px" }} />
                                </div>
                                <div>
                                    <img src='./img/Button.png' style={{ position: "relative", top: "-65px", left: "10px" }} />
                                </div>


                            </div>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row justify="left">
                        <Col xs={{ offset: 3, span: 18 }} sm={{ offset: 5, span: 14 }} md={{ offset: 7, span: 10 }} lg={{ offset: 9, span: 6 }} style={{ marginTop: ".5rem" }}>
                            <p className="pstyle">Popular</p>
                        </Col>
                    </Row>
                </div>

                <div>
                    <Row justify="left">
                        <Col xs={{ offset: 3, span: 18 }} sm={{ offset: 5, span: 14  }} md={{ offset: 7, span: 10  }}  lg={{ offset: 9, span: 6}} style={{ textAlign: "center", marginTop: "-1rem" }}>
                            <div className="favo-mainDivs">
                                <div className="fevo-div-1-style">
                                    <div>
                                        <img src='./img/NomadsDonuts.png' />
                                    </div>
                                    <div>
                                        <div style={{ display: "flex",justifyContent:"space-between", position: "relative", top: "40px" }} >
                                            <p className="g-styles">Jhon</p>
                                            <p className="d-styles">$500</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" fevo-div-2-style">
                                    <div>
                                        <img src='./img/NomadsSuitcase.png' />
                                    </div>
                                    <div>
                                        <div style={{ display: "flex",justifyContent:"space-between", position: "relative", top: "40px", padding: "10px",justifyContent:"space-around" }} >
                                            <p className="g-styles">Jhon</p>
                                            <p className="d-styles">$500</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link to='/details' ><img src='./img/Vector8.png' style={{float:"right",margin:"20px"}} /> </Link>

                        </Col>
                        
                    </Row>
                </div>

                <div>
                    <Row justify="center">
                        <Col  style={{ textAlign: "center" }}>
                            <img src='./img/Home Indicator.png' />
                        </Col>
                    </Row>
                </div>

            </div>

        </div>
    );
};

export default Favorites3;