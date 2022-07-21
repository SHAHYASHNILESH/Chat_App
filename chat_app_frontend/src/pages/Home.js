import React from 'react'
import {Row,Col, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {BsFillChatDotsFill} from 'react-icons/bs';
import './Home.css';

const Home = () => {
  return (
    <Row>
        <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
            <div className='p-3'>
                <h1 className='display-4 fw-bold'>Share the world with your family and friends</h1>
                <p className='lead'>Our Chat App Lets you Connect with the Entire World</p>
                <LinkContainer to="/chat">
                    <Button variant='success'>Get Started <BsFillChatDotsFill/>
                    </Button>
                </LinkContainer>
            </div>
        </Col>
        <Col md={6} className="home_bg">

        </Col>
    </Row>

  )
}

export default Home