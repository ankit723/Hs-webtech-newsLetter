import React from 'react'
import { priority } from '../../constants/data'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card } from 'react-bootstrap'

const SubNewsCard = ({ category }) => {
  
  return (
    <>
      <Container fluid>
        <Row>
          {
            priority.filter((name) => name.category === category ).map((news) => (
              <Col lg="3" key={news.id} style={{ backgroundImage: `linear-gradient(20deg,rgba(0,22,190,0.6),rgba(42,236,116,0.6)), url(${news.img})`, backgroundSize: "cover", borderRadius: "2px" }}>
                {/* <Card style={{ width: '20rem', backgroundColor: "transparent", color: "#ffffff", border: "0px" }}> */}
                {/* <Card.Body style={{ width: '8rem', backgroundColor: "transparent", border: "0px"}}> */}
                <Card.Title style={{ color: "white", fontSize: "0.7rem", paddingTop: "16rem", paddingBottom: "0.7rem" }}>{news.category}</Card.Title>
                <Card.Text style={{ color: "white", fontWeight: "bold", fontSize: "1.3rem", width: "100%" }}>
                  {news.title}
                </Card.Text>
                <div className='display-flex'>
                  <Card.Subtitle style={{ color: "white", fontSize: "0.7rem", fontWeight: "1000", width: "fit-content", "float": "left" }} className="mb-2 ">{news.author}&nbsp;-&nbsp;</Card.Subtitle>
                  <Card.Subtitle style={{ color: "white", fontSize: "0.7rem", "float": "left" }} className="mb-2 ">{news.date}</Card.Subtitle>
                </div>
                {/* </Card.Body> */}
                {/* </Card> */}
              </Col>
            ))
          }
        </Row>
      </Container>
    </>
  )
}

export default SubNewsCard