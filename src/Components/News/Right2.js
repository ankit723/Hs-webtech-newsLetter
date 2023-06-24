import React from 'react'
import { Container, Col, Card, Row } from 'react-bootstrap'
import { news } from '../../constants/data'

const Right2 = (props) => {
    return (
        <>
            <div className='display-inline-block px-0 pt-2' style={{ borderBottom: `2px solid ${props.color}` }}>
                <span className='' style={{ color: props.textColor, backgroundColor: props.color, fontSize: "12px", margin: "0", padding: "4px" }}>{props.type}</span>
            </div>
            <Container className='p-0'>
                <Row>
                    {
                        news.map((data) => (

                            <Col xs={12}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Body className='p-0'>
                                        <Card.Title>{data.title}</Card.Title>
                                        <Card.Subtitle style={{ color: "black", fontSize: "0.73rem", fontWeight: "700", width: "fit-content", "float": "left" }} className="mb-2 ">{data.author}</Card.Subtitle>
                                        <Card.Subtitle style={{ color: "grey", fontSize: "0.7rem", "float": "left", fontWeight: "400" }} className="mb-2 ">&nbsp;-&nbsp;{data.date}</Card.Subtitle>
                                        <Card.Img variant="top" src={data.img} style={{ aspectRatio: "2" }} />
                                        <Card.Text>
                                            {data.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}

export default Right2