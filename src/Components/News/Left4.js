import React from 'react'
import { news } from '../../constants/data'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Left4 = (props) => {
    return (
        <>
            <div className='display-inline-block px-0 pt-2' style={{ borderBottom: `2px solid ${props.color}` }}>
                <span className='' style={{ color: props.textColor, backgroundColor: props.color, fontSize: "12px", margin: "0", padding: "4px" }}>{props.type}</span>
            </div>
            <Container style={{ padding: "10px" }}>
                <Row>
                {props.data.map((data) => (
                    
                        <Col xs={12} sm={6} md={6}>
                        <Card.Img className='p-0' src={data.img} alt="FooterDemoImage" style={{ aspectRatio: props.aspect }} />
                            <Card className='m-0'style={{ width: '100%', backgroundColor: "transparent", color: "#ffffff", border: "0px" }}>
                                <Card.Body style={{ backgroundColor: "transparent", border: "0px", padding: "0" }}>
                                    <Card.Text className='m-0' style={{ color: "black", fontWeight: props.weight, fontSize: props.titleSize, width: "auto", height: "auto" }}>
                                        {data.title}
                                    </Card.Text>
                                    <Card.Text className='mb-3' style={{ color: "black", fontWeight: "40", fontSize: "12px", width: "auto", height: "auto" }}>{data.date}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                ))}
                </Row>
            </Container>
        </>
    )
}

export default Left4