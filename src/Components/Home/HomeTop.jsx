import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HomeSlider from './HomeSlider';
import SideBarMenu from './SideBarMenu ';


const HomeTop = () => {
  return (
    <>
      <Container className="p-0 overflow-hidden pt-3" fluid={true} >
        <Row>
          <Col lg={9} md={9} sm={12}>
            <HomeSlider />
          </Col>

          <Col lg={3} md={3} sm={12}>
            <SideBarMenu />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeTop;
