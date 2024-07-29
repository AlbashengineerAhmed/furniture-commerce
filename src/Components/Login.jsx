import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container>
      <Row>
        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
          <Row className="text-center">
            <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
              <Form className="onboardForm" >
                <h4 className="section-title-login"> USER Login </h4>

                <input className="form-control p-2 m-2" type="email" placeholder="Enter Your Email" />
                <input className="form-control p-2 m-2" type="password" placeholder="Enter Your Password" />

                <Button type="submit" className="btn p-2 rounded-2 btn-block m-2 site-btn-login"> Login </Button>
                <br></br> <br></br>
                <hr />
                <p> <b> Forget My Password? </b><a ><b><Link to='/forgetpassword'>Forget Password</Link></b> </a> </p>
                <p> <b> New User ? </b><a><b><Link to='/register'>Register</Link></b> </a> </p>
              </Form>
            </Col>

            <Col className="d-flex justify-content-center hidden-animation" md={6} lg={6} sm={12} xs={12}>
            <Player
              autoplay
              loop
              src="https://lottie.host/81563a78-406c-45c3-945e-06439b306a3e/y7hN5JULxt.json"
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

export default Login;
