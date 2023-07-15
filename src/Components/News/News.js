import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setnewsPosts, setComments } from "../../state";
import Comments from './Comments'
import Trending from './Trending'
import { Col, Container, Row } from 'react-bootstrap'
import Left1 from './Left1'
import Left2 from './Left2'
import Right from './Right1'
import Social from '../Lifestyle/Social'
import Right2 from './Right2'
import Left3 from './Left3'
import Left4 from './Left4'

const News = () => {
  const dispatch = useDispatch();
  const newsPosts = useSelector((state) => state.newsPosts);
  const comments = useSelector((state) => state.comments);

  const getNews = async () => {
    const res = await fetch("http://localhost:5000/newsP", {
      method: "GET"
    });
    const data = await res.json();
    dispatch( setnewsPosts( { newsPosts: data } ));
  }

  const getComments = async () => {
    const res = await fetch("http://localhost:5000/comm", {
      method: "GET"
    });
    const data = await res.json();
    dispatch( setComments( { comments: data } ));
  }

  useEffect(() => {
    getNews();
    getComments();
  }, []);

  return (
    <>
      <Trending />
      <Container>
        <Row>
          <Col xs={12} sm={8}>
            <Left1 type="DON'T MISS" color="yellow" textColor="black" data={newsPosts} />
            <Left2 type="LIFESTYLE NEWS" color="#3a863d" textColor="white" data={newsPosts} />
          </Col>
          <Col xs={12} sm={4}>
            <Left4 className='sticky-top' type="MAKE-IT-MODERN" color="black" textColor="white" titleSize="12px" weight="400" aspect="1.53" data={newsPosts} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={8}>
            <Left3 type="HOUSE DESIGN" color="#5d7987" textColor="white" data={newsPosts} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={8}>
            <Left2 type="PERFORMANCE TRAINING" color="black" textColor="white" data={newsPosts} />
          </Col>
          <Col className='sticky-top' xs={12} sm={4}>
            <Right2 type="HOLIDAY RECIPES" color="#8954c1" textColor="white" data={newsPosts} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={8}>
            <Left4 type="LATEST ARTICLES" color="black" textColor="white" titleSize="22px" weight="300" aspect="2" data={newsPosts} />
          </Col>
          <Col className='sticky-top' xs={12} sm={4}>
            <Right type="MOST POPULAR" color="black" textColor="white" data={newsPosts} />
            <Comments color="black" textColor="white" data={comments} />
            <Social />
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default News