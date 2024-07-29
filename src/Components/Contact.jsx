import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../assets/css/custom.css'
const Contact = () => {
  return (
    <>
      <Container>
        <Row className="p-2">
          <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
            <Row className="text-center">
              <Col className="p-0 m-0" md={6} lg={6} sm={6} xs={6}>
                <br />
                <br />
                <p>
                Abu Malih facility,Bedahl, Samasta Center, Beni Suef Governorate
                  <br />
                  email : Support@ahmedmohamed.com
                </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13963.34060199481!2d30.906635231331236!3d28.9626136049884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145a334fb82b21b7%3A0x605dbd9b86a2bb84!2z2YXZhti02KfYqSDYo9io2Ygg2YXZhNmK2K3YjCDYqNiv2YfZhNiMINmF2LHZg9iyINiz2YXYs9i32KfYjCDZhdit2KfZgdi42Kkg2KjZhtmKINiz2YjZitmB!5e0!3m2!1sar!2seg!4v1704557917510!5m2!1sar!2seg" 
                width="600" 
                height="450" 
                style={{border:"0"}} 
                title='location'
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </Col>

              <Col className="justify-content-center d-flex" md={6} lg={6} sm={12} xs={12}>
                <Form id="contactForm" className="onboardForm" rows="4" cols="50">
                  <h4 className="section-title-login">CONTACT WITH US </h4>
                  <h6 className="section-sub-title">Please Contact With Us </h6>
                  <input className="form-control p-3 m-2" type="text" placeholder="Enter Your Name" />
                  <input className="form-control p-3 m-2" type="email" placeholder="Enter Email" />
                  <Form.Control className="form-control p-3 m-2" as="textarea" rows={3} placeholder="your Message" />
                  <Button id="sendBtn" type="submit" className="btn rounded-2 btn-bloc fs-6 fw-bolder p-3 m-2 site-btn-login">
                    Send
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
