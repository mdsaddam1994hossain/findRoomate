import React from 'react';
import { Row, Col } from 'antd';
import './BootomTab.css'

const BootomTab = () => {
    return (
        
        <div >

           
                
                <Row>
                    <Col xs={{span:24}}  style={{ marginTop: "1rem" }} >
                        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:"white",width:"100%",borderRadius:"16px 16px 0 0"}} >

                            <div className="bootom-style">

                                <div>
                                    <div>
                                        <img style={{ marginBottom: "5px" }} src='./img/Vector5.png' />
                                    </div>
                                    <div>
                                        <p className="trip-style">Trips</p>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <img style={{ marginBottom: "5px" }} src='./img/Vector6.png' />
                                    </div>
                                    <div>
                                        <p className="pro-set-style"> Profile</p>

                                    </div>

                                </div>
                                <div>
                                    <div>
                                        <img style={{ marginBottom: "5px" }} src='./img/Vector7.png' />
                                    </div>
                                    <div>
                                        <p className="pro-set-style">Setting</p>
                                    </div>
                                </div>

                            </div>

                           <div>
                                 <Row>
                                    <Col span={24} style={{ textAlign: "center" }}>
                                        <img style={{marginBottom:"5px"}} src='./img/Home indicator.png' />
                                    </Col>
                                </Row>
                           </div>

                        </div>

                    </Col>
                </Row>

           

        </div>
    );
};

export default BootomTab;