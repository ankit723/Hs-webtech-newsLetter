import React from 'react'
import { comments } from '../../constants/data'
import { Container, Row } from 'react-bootstrap'

const Comments = (props) => {
  return (
    <>
      <div className='display-inline-block px-0 pt-2' style={{ borderBottom: `2px solid ${props.color}` }}>
        <span className='' style={{ color: props.textColor, backgroundColor: props.color, fontSize: "12px", margin: "0", padding: "4px" }}>RECENT COMMENTS</span>
      </div>
      <Container className='p-0'>
      </Container>
      <Container className='px-0 pt-2' style={{ borderTop: " 2px solid black" }}>
        {comments.map((news) => (
          <Row>
            <p style={{ fontStyle: "italic", fontWeight: "500" }}>
              {news.review}<span style={{ fontWeight: "300", fontStyle: "normal" }}>- {news.name}</span>
            </p>
          </Row>
        ))}
      </Container>
    </>
  )
}

export default Comments