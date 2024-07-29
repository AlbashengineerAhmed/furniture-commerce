import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

const ForgetPassword  = () => {
  return (
    <Container>
      <Row>
        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
          <Row className="text-center">
            <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
            <Form className="onboardForm" >
              <h4 className="section-title-login"> Forget Password ? </h4>
              <input className="form-control m-2" type="email" placeholder="Enter Your Email" />
              <Button type="submit" className="btn btn-block m-2 site-btn-login"> Rest Password </Button>
              <br></br> <br></br>
              <hr />
              <p> <b> Return to Login </b><b><Link to='/login'>Login</Link></b></p>
              <p> <b> New User ? </b><b><Link to='/register'>Register</Link></b></p>
            </Form>
            </Col>

            <Col className="d-flex justify-content-center hidden-animation" md={6} lg={6} sm={12} xs={12}>
            <Player
              autoplay
              loop
              src="https://lottie.host/14725cbc-b803-4d84-9e14-a0b3fc96be85/3RBwP8aWIq.json"
              className='animation-login'
            >
              {/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
            </Player>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgetPassword;
