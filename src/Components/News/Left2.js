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
          {
            news.map((data) => (

              <Col xs={12} sm={6} lg={4} >
                <Card style={{ width: '100%' }}>
                  <Card.Body>
                    <Card.Img variant="top" src={data.img} style={{ aspectRatio: "1.53" }} />
                    <Card.Title style={{ fontWeight: "600" }}>{data.title}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
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

export default Left2