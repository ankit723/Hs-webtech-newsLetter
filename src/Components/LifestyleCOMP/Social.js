import React from 'react'
import { socialLinks } from '../../constants/data'
import { Col, Container, Row } from 'react-bootstrap'

const Social = () => {
    return (
        <>
            <div className='display-inline-block px-0 pt-2'>
                <span className='bg-dark' style={{ color: "white", fontSize: "12px", margin: "0", padding: "4px"}}>FOLLOW US</span> 
            </div>
            <Container style={{borderTop: " 2px solid black"}}>
                {socialLinks.map((Links) => (
                    <Row style={{padding: "10px"}}>
                        <Col xs={1}>
                        <a href={`${Links.link}`}><img style={{"height":"20px"}} href={`${Links.link}`} src={`${Links.logo}`} alt={`${Links.title}`} /></a>
                        </Col>
                        <Col xs={1}>
                        <a style={{ color: "black"}} href={`${Links.link}`}><h6>{Links.alt}</h6></a>
                        </Col>
                    </Row>
                ))}
            </Container>
        </>
    )
}

export default Social