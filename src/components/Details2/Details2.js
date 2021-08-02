import React from 'react';
import './Details2.css'
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const Details2 = () => {
    return (
        <div className="container-fluid">

           
                <Row >
                    <Col xs={{offset:1,span:22}} sm={{ offset: 4, span: 16 }}  md={{ offset: 6, span: 12}} lg={{ offset: 7, span: 10}} style={{ marginTop: "1rem" }}>
                        <div style={{ background: "#ffdbf5", marginTop: "20px", borderRadius: "16px" }}>
                            <img src='./img/london.png' width="100%" />
                        </div>


                    </Col>
                </Row>
         
            <div>
                <Row>
                    <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12}} lg={{  offset: 7, span: 10 }} style={{ marginTop: "1rem" }}>

                        <p className="cam-style">City of London</p>

                    </Col>

                </Row>
                <Row>
                    <Col xs={{ offset: 1, span: 22  }} sm={{ offset: 4, span: 16  }} md={{ offset: 6, span: 12}} lg={{ offset: 7, span: 10}} style={{ display: "flex", marginTop: "-1rem" }}>

                        <img src='./img/Vector11.png' alt="error" className="img-formating" />
                        <p className="downloadStyle">Unlimited downloads</p>

                    </Col>

                </Row>
                <Row>
                    <Col xs={{ offset: 1, span: 22  }} sm={{  offset: 4, span: 16 }} md={{ offset: 6, span: 12}} lg={{ offset: 7, span: 10}} style={{ display: "flex", }}>

                        <img src='./img/Museum.png' alt="error" className="img-formating-2" />
                        <p className="downloadStyle">Unlimited downloads</p>

                    </Col>

                </Row>
                <Row>
                    <Col xs={{ offset: 1, span: 22  }} sm={{ offset: 4, span: 16 }} md={{offset: 6, span: 12}} lg={{ offset: 7, span: 10}} style={{ display: "flex", }}>

                        <img src='./img/Vector2.png' alt="error" className="img-formating-3" />
                        <p className="downloadStyle">Unlimited downloads</p>

                    </Col>

                </Row>
                <Row>
                    <Col xs={{ offset: 1, span: 22  }} sm={{ offset: 4, span: 16 }} md={{offset: 6, span: 12 }} lg={{ offset: 7, span: 10}} style={{ display: "flex", }}>

                        <img src='./img/camera-photo.png' alt="error" className="img-formating-3" />
                        <p className="downloadStyle">Unlimited downloads</p>

                    </Col>

                </Row>
                <Row>
                    <Col xs={{ offset: 1, span: 22  }} sm={{  offset:4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 7, span: 10}} style={{ display: "flex", }}>

                        <img src='./img/Vector3.png' alt="error" className="img-formating-2" />
                        <p className="downloadStyle">Unlimited downloads</p>

                    </Col>

                </Row>
                <Row>
                    <Col xs={{ offset: 1, span: 22  }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12}} lg={{ offset: 7, span: 10}} style={{ display: "flex", }}>

                        <p className="d-detail-style">Hey you, looking for a roommate? we've helped millions across the nation find their perfect match... and you're next! Hey you, looking for a roommate? we've helped millions across the nation find their perfect match... and you're next!</p>

                    </Col>

                </Row>
                <Row >
                    <Col xs={{ offset: 1, span: 22  }} sm={{  offset:4, span: 16 }} md={{offset: 6, span: 12}} lg={{offset: 7, span: 10}} style={{ display: "flex", }}>

                        <Row style={{background:"#ffdbf5",padding:"5px",borderRadius:"8px", display:"flex",alignItems:"center",height:"52px",width:"100%"}}>
                            <Col span={3}>
                                <img src='./img/Avatar5.png' alt="error" className="img-sent-1" />
                            </Col>
                            <Col span={3} className="img-sent-2">
                                <p className="title-styl"> Titile</p>
                                <p className="label-styl">Label</p>
                            </Col>
                            <Col span={9}> </Col>
                            <Col span={3}>
                                <img src='./img/Vector6.png' alt="error" className="img-sent-3" />
                            </Col>
                            <Col span={3}>
                                <img src='./img/Vector12.png' alt="error" className="img-sent-4" />
                            </Col>
                            <Col span={3}>
                                <img src='./img/Vector4.png' alt="error" className="img-sent-5" />
                            </Col>

                        </Row>
                        

                    </Col>
                    

                </Row>
                <Link to='/details3' ><img src='./img/Vector8.png' style={{float:"right",margin:"20px"}} /> </Link>
            </div>
            <div>
                
                <Row justify="center">
                    <Col>
                       <img src='./img/Home Indicator.png' style={{marginTop:"10px"}}/>
                    </Col>
                </Row>
            </div>


        </div>
    );
};

export default Details2;