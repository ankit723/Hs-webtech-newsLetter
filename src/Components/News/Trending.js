import React from 'react'
import { Carousel, CarouselItem, Col, Container, Row } from 'react-bootstrap'
import { trendingNews, news } from '../../constants/data'

const Trending = () => {
  return (
    <>
      <Container className='p-0 mt-4'>
        <div className='d-flex'>
          <span className='bg-dark mx-4 px-2 py-1' style={{ color: "white", fontSize: "13px", height: "50%" }}>TRENDING NOW</span>
          <Carousel variant='dark' indicators={false} controls={false}>
            {trendingNews.map((news) => (
              <CarouselItem>
                <p style={{}}>{news.title}</p>
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </Container>
      <Container>
        <Row>
          {
            news.map((data) => (
              <Col xs={12} sm={6} style={{ backgroundImage: `url(${data.img})`, backgroundSize: "cover", border: "2px solid white" }}>
                <div style={{ marginTop: "200px" }}>
                  <span className='bg-dark mx-4 px-2 py-1' style={{ color: "white", fontSize: "13px", height: "50%" }}>{data.category}</span>
                </div>
                <h2 className='mx-4 mt-2' style={{ color: "white", fontSize: "1.7vw", fontWeight: "300" }}>{data.title}</h2>
                <p className='mx-4' style={{ fontWeight: "bold", color: "white", fontSize: "12px" }}>{data.author}&nbsp;<span style={{ fontWeight: "400", color: "#abb8c3", fontSize: "12px" }}>- {data.date}</span></p>
              </Col>
            ))
          }
        </Row>
      </Container>
    </>
  )
}

export default Trending