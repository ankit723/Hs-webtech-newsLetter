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
          <Col className='sticky-bottom' sm={12} md={6} style={{ backgroundImage: `url(${news[0].img})`, backgroundSize: "cover", border: "2px solid white" }}>
            <div style={{ marginTop: "1rem" }}>
              <span className='bg-dark mx-4 px-2 py-1' style={{ color: "white", fontSize: "13px", height: "50%" }}>{news[0].category}</span>
            </div>
            <h2 className='mx-4 mt-2' style={{ color: "white", fontSize: "24px", fontWeight: "300" }}>{news[0].title}</h2>
            <p className='mx-4' style={{ fontWeight: "bold", color: "white", fontSize: "12px" }}>{news[0].author}&nbsp;<span style={{ fontWeight: "400", color: "#abb8c3", fontSize: "12px" }}>- {news[0].date}</span></p>
          </Col>
          <Col>
            <Row>
              <Col className='sticky-bottom' sm={12} style={{ backgroundImage: `url(${news[1].img})`, backgroundSize: "cover", border: "2px solid white" }}>
                <div style={{ marginTop: "1rem" }}>
                  <span className='bg-dark mx-4 px-2 py-1' style={{ color: "white", fontSize: "13px", height: "50%" }}>{news[1].category}</span>
                </div>
                <h2 className='mx-4 mt-2' style={{ color: "white", fontSize: "24px", fontWeight: "300" }}>{news[1].title}</h2>
                <p className='mx-4' style={{ fontWeight: "bold", color: "white", fontSize: "12px" }}>{news[1].author}&nbsp;<span style={{ fontWeight: "400", color: "#abb8c3", fontSize: "12px" }}>- {news[1].date}</span></p>
              </Col>
            </Row>
            <Row>
              <Col className='sticky-bottom' md={12} lg={6} style={{ backgroundImage: `url(${news[2].img})`, backgroundSize: "cover", border: "2px solid white" }}>
                <div style={{ marginTop: "1rem" }}>
                  <span className='bg-dark mx-4 px-2 py-1' style={{ color: "white", fontSize: "13px", height: "50%" }}>{news[2].category}</span>
                </div>
                <h2 className='mx-4 mt-2' style={{ color: "white", fontSize: "24px", fontWeight: "300" }}>{news[2].title}</h2>
                <p className='mx-4' style={{ fontWeight: "bold", color: "white", fontSize: "12px" }}>{news[2].author}&nbsp;<span style={{ fontWeight: "400", color: "#abb8c3", fontSize: "12px" }}>- {news[2].date}</span></p>
              </Col>
              <Col className='sticky-bottom' md={12} lg={6} style={{ backgroundImage: `url(${news[3].img})`, backgroundSize: "cover", border: "2px solid white" }}>
                <div style={{ marginTop: "1rem" }}>
                  <span className='bg-dark mx-4 px-2 py-1' style={{ color: "white", fontSize: "13px", height: "50%" }}>{news[3].category}</span>
                </div>
                <h2 className='mx-4 mt-2' style={{ color: "white", fontSize: "24px", fontWeight: "300" }}>{news[3].title}</h2>
                <p className='mx-4' style={{ fontWeight: "bold", color: "white", fontSize: "12px" }}>{news[3].author}&nbsp;<span style={{ fontWeight: "400", color: "#abb8c3", fontSize: "12px" }}>- {news[3].date}</span></p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Trending