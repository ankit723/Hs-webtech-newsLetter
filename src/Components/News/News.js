import React from 'react'
import Comments from './Comments'
import Trending from './Trending'
import { Col, Container, Row } from 'react-bootstrap'
import Left1 from './Left1'
import Left2 from './Left2'
import Right from './Right1'
import Social from '../Lifestyle/Social'
import Right2 from './Right2'

const News = () => {
  return (
    <>
    <Trending />
    <Container>
      <Row>
        <Col xs={12} sm={8}>
          <Left1 type="DON'T MISS" color="yellow" textColor="black"/>
          <Left2 type="LIESTYLE NEWS"  color="#3a863d" textColor="white" />
        </Col>
        <Col xs={12} sm={4}>
          <Right className='sticky-top' type="MAKE IT MODERN" color="black" textColor="white"/>
          {/* <Comments color="black" textColor="white"/> */}
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={8}>
          <Left1 type="HOUSE DESIGN" color="#5d7987" textColor="white"/>
          <Left2 type="PERFORMANCE TRAINING" color="#3a863d" textColor="white" />
        </Col>
        <Col className='sticky-top' xs={12} sm={4}>
          <Right2 type="HOLIDAY RECIPES" color="#8954c1" textColor="white"/>
          <Comments color="black" textColor="white"/>
          <Social />
        </Col>
      </Row>
    </Container>
     {/* <Comments /> */}

    </>
  )
}

export default News