import React from 'react';
import { Row, Col, Divider } from 'antd';


const Test = () => {
    return (
        <div>
            <Divider orientation="left">Percentage columns</Divider>
            <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    Col
                </Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    Col
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    Col
                </Col>
            </Row>
        </div>
    );
};

export default Test;