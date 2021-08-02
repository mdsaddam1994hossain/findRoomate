import React, { useState } from 'react';
import './Header.css'
import { Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


const Header = (props) => {

    const [search, setSearch] = useState(false);

    const searchIconActive = <div style={{ width: "100%", height: "40px", border: "1px solid black", marginTop: "-.3rem", marginBottom: "1rem", borderRadius: "5px" }} >
                                    <input type="text" placeholder="Search" style={{ width: "100%", height: "38px", border: "none", padding: "0 25px", borderRadius: "5px" }} />
                                    <SearchOutlined style={{ position: "relative", top: "-1.9rem", right: "-95%" }} />
                                </div>

                              

    const searchIconDetActive = <div> {props.icon1} </div>;


    const x = <div> {search ? searchIconActive : searchIconDetActive}</div>

    return (
        <div>
            <Row>
                <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 7, span: 10 }} style={{ marginTop: "2rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ width: "80%" }}>
                            <p >{props.title} </p>
                        </div>
                        <div>{props.children} </div>
                        <div style={{ display: "flex" }}>
                            <p onClick={() => setSearch(!search)}> {search ? props.icon1 : x} </p>
                            <div>{props.icon2} </div>
                        </div>

                    </div>
                </Col>
            </Row>
            <Row >
                <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 7, span: 10 }}>
                    {search ? x : ""}
                </Col>
            </Row>
        </div>
    );
};

export default Header;