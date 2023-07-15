import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
// import { news } from '../../constants/data'

const Left2 = (props) => {
  return (
    <>
      <div className='display-inline-block px-0 pt-2' style={{ borderBottom: `2px solid ${props.color}` }}>
        <span className='' style={{ color: props.textColor, backgroundColor: props.color, fontSize: "12px", margin: "0", padding: "4px" }}>{props.type}</span>
      </div>
      <Container className='p-0'>
        <Row>
            {props.data.filter( (fil) => fil.major === true && fil.item === props.type ).map( (data) => (
              <Col className='p-0' xs={12} sm={12} md={6} key={data._id}>
                <Card className='m-0'>
              <Card.Body>
                <Card.Img variant='top' src={`http://localhost:5000/uploads/${data.image}`} style={{ aspectRatio: "1.53" }} />
                <Card.Title style={{ fontWeight: "450", fontSize: "24px", marginTop: "10px" }}>{data.head}</Card.Title>
                <p style={{ fontWeight: "700", fontSize: "13px" }}>{data.admin}<span style={{ fontWeight: "300" }}>&nbsp;-&nbsp;{data.date}</span></p>
                <Card.Text style={{ fontSize: "14px", fontWeight: "30" }}>{data.para}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
            ))}
        </Row>
        <Row>
          {props.data.filter( (fil) => fil.major !== true && fil.item === props.type ).map((data) => (
            <Col xs={12} sm={6} key={data._id}>
              <Card className='m-0'>
                <Card.Img className='my-auto' src={`http://localhost:5000/uploads/${data.image}`} style={{ aspectRatio: "1.53", width: "20%" }} />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "450", fontSize: "14px", marginTop: "10px" }}>{data.head}</Card.Title>
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