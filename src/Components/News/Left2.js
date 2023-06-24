import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { news } from '../../constants/data'

const Left2 = (props) => {
  return (
    <>
      <div className='display-inline-block px-0 pt-2' style={{ borderBottom: `2px solid ${props.color}` }}>
        <span className='' style={{ color: props.textColor, backgroundColor: props.color, fontSize: "12px", margin: "0", padding: "4px" }}>{props.type}</span>
      </div>
      <Container className='p-0'>
        <Row>
          <Col className='p-0' xs={12} sm={12} md={6}>
            <Card className='m-0'>
              <Card.Body>
                <Card.Img variant='top' src={news[1].img} style={{ aspectRatio: "1.53" }} />
                <Card.Title style={{ fontWeight: "450", fontSize: "24px", marginTop: "10px" }}>{news[1].title}</Card.Title>
                <p style={{ fontWeight: "700", fontSize: "13px" }}>{news[1].author}<span style={{ fontWeight: "300" }}>&nbsp;-&nbsp;{news[1].date}</span></p>
                <Card.Text style={{ fontSize: "14px", fontWeight: "30" }}>{news[1].description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className='p-0' xs={12} sm={12} md={6}>
            <Card className='m-0'>
              <Card.Body>
                <Card.Img variant='top' src={news[2].img} style={{ aspectRatio: "1.53" }} />
                <Card.Title style={{ fontWeight: "450", fontSize: "24px", marginTop: "10px" }}>{news[2].title}</Card.Title>
                <p style={{ fontWeight: "700", fontSize: "13px" }}>{news[2].author}<span style={{ fontWeight: "300" }}>&nbsp;-&nbsp;{news[2].date}</span></p>
                <Card.Text style={{ fontSize: "14px", fontWeight: "30" }}>{news[2].description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          {news.map((data) => (
            <Col xs={12} sm={6}>
              <Card className='m-0'>
                <Card.Img className='my-auto' src={data.img} style={{ aspectRatio: "1.53", width: "20%" }} />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "450", fontSize: "14px", marginTop: "10px" }}>{data.title}</Card.Title>
                  <Card.Text style={{ fontWeight: "300", fontSize: "12px" }}>{data.date}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Left2