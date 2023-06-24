import React from 'react'
import { news } from '../../constants/data'
import { Container, Row, Col, Card } from 'react-bootstrap'


const Right = (props) => {
  return (
    <>
      <div className='display-inline-block px-0 pt-2' style={{ borderBottom: `2px solid ${props.color}` }}>
        <span className='' style={{ color: props.textColor, backgroundColor: props.color, fontSize: "12px", margin: "0", padding: "4px" }}>{props.type}</span>
      </div>
      <Container style={{ padding: "10px" }}>
        {news.map((news) => (
          <Row className='d-flex'>
            {/* <Col className='' xs={4}> */}
            {/* <img className='my-auto' src={news.img} alt="FooterDemoImage" style={{ width: "100%", minHeight: "136", maxWidth: "243", aspectRatio: "1.53", objectFit: "cover" }} /> */}
            {/* </Col> */}
            {/* <img className='my-auto' src={news.img} alt="FooterDemoImage" style={{ width: "100%", minHeight: "136", maxWidth: "243", aspectRatio: "1.53", objectFit: "cover" }} /> */}
            <Col className='d-flex p-0'>
              <img className='' src={news.img} alt="FooterDemoImage" style={{ objectFit: "contain", aspectRatio: "1.53", width: "40%" }} />
              <Card style={{ width: '100%', backgroundColor: "transparent", color: "#ffffff", border: "0px" }}>
                <Card.Body style={{ backgroundColor: "transparent", border: "0px", paddingTop: "0" }}>
                  {/* <button style={{ border: "0px", marginBottom: "1rem", top: "0", backgroundColor: "black", color: "white", fontSize: "0.6rem" }}>{news.category}</button> */}
                  <Card.Text style={{ color: "black", fontWeight: "bold", fontSize: "12px", fontWeight: "500", width: "auto", height: "auto" }}>
                    {news.title}
                  </Card.Text>
                  <div className='display-flex'>
                    {/* <Card.Subtitle style={{ color: "black", fontSize: "0.73rem", fontWeight: "700", width: "fit-content", "float": "left" }} className="mb-2 ">{news.author}</Card.Subtitle> */}
                    <Card.Subtitle style={{ color: "grey", fontSize: "0.7rem", "float": "left", fontWeight: "400" }} className="mb-2 ">{news.date}</Card.Subtitle>
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

export default Right