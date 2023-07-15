import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import { priority } from '../../constants/data'
import { Link } from 'react-router-dom'

const MustRead = (props) => {
    return (
        <>
            <div className='display-inline-block px-0 pt-2' >
                <span className='bg-dark' style={{ color: "white", fontSize: "12px", marginLeft: "0", padding: "4px" }}>MUST READ</span>
            </div>
            <Container className='px-0 pt-2' style={{ borderTop: " 2px solid black" }}>
                {props.data.filter((fil) => fil.item === props.type).map((news) => (
                    <Row className='d-flex mb-5'>
                        <img className='' src={`http://localhost:5000/uploads/${news.image}`} alt="FooterDemoImage" style={{ width: "100%", minHeight: "162px", minWidth: "324px", aspectRatio: "2", objectFit: "" }} />
                        <Col>
                            <Card style={{ width: '100%', backgroundColor: "transparent", color: "#ffffff", border: "0px" }}>
                                <Card.Body className='p-0' style={{ backgroundColor: "transparent", border: "0px", paddingTop: "0", position: "relative" }}>
                                    {/* <button style={{ border: "0px", marginBottom: "2rem", top: "0", backgroundColor: "black", color: "white", fontSize: "0.6rem" }}>{news.category}</button> */}
                                    <Card.Text className='' style={{ position: "relative", color: "black", fontWeight: "bold", fontSize: "1.4rem", fontWeight: "500", width: "auto", height: "auto" }}>
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

export default MustRead