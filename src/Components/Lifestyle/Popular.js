import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import { priority } from '../../constants/data'
import { Link } from 'react-router-dom'

const Popular = (props) => {
    return (
        <>
            <Container style={{ padding: "10px" }}>
                {props.data.filter((fil) => fil.item === props.type).map((news) => (
                    <Row className='d-flex mb-5'>
                        {/* <Col className='' xs={4}> */}
                        {/* <img className='my-auto' src={news.img} alt="FooterDemoImage" style={{ width: "100%", minHeight: "136", maxWidth: "243", aspectRatio: "1.53", objectFit: "cover" }} /> */}
                        {/* </Col> */}
                        {/* <img className='my-auto' src={news.img} alt="FooterDemoImage" style={{ width: "100%", minHeight: "136", maxWidth: "243", aspectRatio: "1.53", objectFit: "cover" }} /> */}
                        <Col className='d-flex'>
                            <img className='my-auto' src={`http://localhost:5000/uploads/${news.image}`} alt="FooterDemoImage" style={{ "float": "left", width: "40%", minHeight: "91.219px", minWidth: "140.344px", aspectRatio: "1.53" }} />
                            <Card style={{ width: '100%', backgroundColor: "transparent", color: "#ffffff", border: "0px" }}>
                                <Card.Body style={{ backgroundColor: "transparent", border: "0px", paddingTop: "0" }}>
                                    {/* <button style={{ border: "0px", marginBottom: "1rem", top: "0", backgroundColor: "black", color: "white", fontSize: "0.6rem" }}>{news.category}</button> */}
                                    <Card.Text style={{ color: "black", fontWeight: "bold", fontSize: "20px", fontSize: "1.5vw", fontWeight: "500", width: "auto", height: "auto" }}>
                                        {news.head}
                                    </Card.Text>
                                    <div className='display-flex'>
                                        <Card.Subtitle style={{ color: "black", fontSize: "0.73rem", fontWeight: "700", width: "fit-content", "float": "left" }} className="mb-2 ">{news.admin}</Card.Subtitle>
                                        <Card.Subtitle style={{ color: "grey", fontSize: "0.7rem", "float": "left", fontWeight: "400" }} className="mb-2 ">&nbsp;-&nbsp;{news.date}</Card.Subtitle>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                ))}
            </Container>
        </>
    )
}

export default Popular