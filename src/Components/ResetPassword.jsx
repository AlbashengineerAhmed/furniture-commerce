import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

const ResetPassword  = () => {
  return (
    <Container>
      <Row>
        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
          <Row className="text-center">
            <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
              <Form className="onboardForm" >
                <h4 className="section-title-login"> Reset Password  </h4>
                <input className="form-control p-2 m-2" type="text" placeholder="Enter pincode" />
                <input className="form-control p-2 m-2" type="email" placeholder="Enter Your Email" />
                <input className="form-control p-2 m-2" type="password" placeholder="Enter Your New Password " />
                <input className="form-control p-2 m-2" type="password" placeholder="Confirm your Password" />
                <Button type="submit" className="btn p-2 rounded-2 btn-block m-2 site-btn-login"> Reset Password </Button>
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
              src="https://lottie.host/7ced6e50-29bf-41c1-bc51-4f4b07264ee8/vslUIfAUDF.json"
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

export default ResetPassword;
