import React from 'react'
import { Container, Col, Card, Row } from 'react-bootstrap'

const Right2 = (props) => {
    return (
        <>
            <div className='display-inline-block px-0 pt-2' style={{ borderBottom: `2px solid ${props.color}` }}>
                <span className='' style={{ color: props.textColor, backgroundColor: props.color, fontSize: "12px", margin: "0", padding: "4px" }}>{props.type}</span>
            </div>
            <Container className='p-0'>
                <Row>

                            <Col xs={12}>
                                {props.data.filter( (fil) => fil.item === props.type ).map( (news) => (
                                    <Card style={{ width: '100%' }} key={news._id}>
                                    <Card.Body className='p-0'>
                                        <Card.Title>{news.head}</Card.Title>
                                        <Card.Subtitle style={{ color: "black", fontSize: "0.73rem", fontWeight: "700", width: "fit-content", "float": "left" }} className="mb-2 ">{news.admin}</Card.Subtitle>
                                        <Card.Subtitle style={{ color: "grey", fontSize: "0.7rem", "float": "left", fontWeight: "400" }} className="mb-2 ">&nbsp;-&nbsp;{news.date}</Card.Subtitle>
                                        <Card.Img variant="top" src={`http://localhost:5000/uploads/${news.image}`} style={{ aspectRatio: "1.53" }} />
                                        <Card.Text>
                                            {news.para}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                ))}
                            </Col>
                </Row>
            </Container>
        </>
    )
}

export default Right2