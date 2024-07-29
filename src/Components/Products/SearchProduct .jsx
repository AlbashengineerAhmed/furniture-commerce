import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import image1 from "../../assets/images/products/f13.jpg";
import image2 from "../../assets/images/products/f5.jpg";
import image3 from "../../assets/images/products/f10.jpg";
import image4 from "../../assets/images/products/f12.jpg";
import image5 from "../../assets/images/products/p8.jpg";
import image6 from "../../assets/images/products/p2.jpg";
import { Link } from 'react-router-dom';

const SearchProduct = () => {
  return (
    <>
      <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55">
          <h2>Search Products</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
        </div>
        <Row>
          <Col className="p-1" lg={2} md={2} sm={6}>
            <div>
            <Link to="/productdetails">
              <Card className="image-box card w-100">
                <div className="overflow-hidden w-100">
                  <img className="center w-100" src={image1} alt="Product 1" />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Perfect Homes Webster Engineered Wood TV
                    </p>
                    <div>
                        <span className="text-warning">
                        <i className="fa fa-star"></i> 
                          <i className="fa fa-star"></i> 
                          <i className="fa fa-star"></i>
                        </span>
                        <span >
                          <i className="fa fa-star">
                        </i> <i className="fa fa-star"></i> 
                        </span>
                      </div>
                      <p className="product-price-on-card">price : 100$</p>
                  </Card.Body>
                </div>
              </Card>
            </Link>
            </div>
          </Col>
          <Col className="p-1" lg={2} md={2} sm={6}>
            <div>
            <Link to="/productdetails">
              <Card className="image-box card w-100">
                <div className="overflow-hidden w-100">
                  <img className="center w-100" src={image2} alt="Product 1" />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Perfect Homes Webster Engineered Wood TV
                    </p>
                    <div>
                        <span className="text-warning">
                        <i className="fa fa-star"></i> 
                          <i className="fa fa-star"></i> 
                          <i className="fa fa-star"></i>
                        </span>
                        <span >
                          <i className="fa fa-star">
                        </i> <i className="fa fa-star"></i> 
                        </span>
                      </div>
                  </Card.Body>
                </div>
              </Card>
            </Link>
            </div>
          </Col>
          <Col className="p-1" lg={2} md={2} sm={6}>
            <div>
            <Link to="/productdetails">
              <Card className="image-box card w-100">
                <div className="overflow-hidden w-100">
                  <img className="center w-100" src={image3} alt="Product 1" />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Perfect Homes Webster Engineered Wood TV
                    </p>
                    <div>
                        <span className="text-warning">
                        <i className="fa fa-star"></i> 
                          <i className="fa fa-star"></i> 
                          <i className="fa fa-star"></i>
                        </span>
                        <span >
                          <i className="fa fa-star">
                        </i> <i className="fa fa-star"></i> 
                        </span>
                      </div>
                      <p className="product-price-on-card">price : 100$</p>
                  </Card.Body>
                </div>
              </Card>
            </Link>
            </div>
          </Col>
          <Col className="p-1" lg={2} md={2} sm={6}>
            <div>
              <Link to="/productdetails">
                <Card className="image-box card w-100">
                  <div className="overflow-hidden w-100">
                    <img className="center w-100" src={image4} alt="Product 1" />
                    <Card.Body>
                      <p className="product-name-on-card">
                        Perfect Homes Webster Engineered Wood TV
                      </p>
                      <div>
                        <span className="text-warning">
                        <i className="fa fa-star"></i> 
                          <i className="fa fa-star"></i> 
                          <i className="fa fa-star"></i>
                        </span>
                        <span >
                          <i className="fa fa-star">
                        </i> <i className="fa fa-star"></i> 
                        </span>
                      </div>
                      <p className="product-price-on-card">price : 100$</p>
                    </Card.Body>
                  </div>
                </Card>
              </Link>
            </div>
          </Col>
          <Col className="p-1" lg={2} md={2} sm={6}>
            <div>
              <Link to="/productdetails">
                <Card className="image-box card w-100">
                  <div className="overflow-hidden w-100">
                    <img className="center w-100" src={image5} alt="Product 1" />
                    <Card.Body>
                      <p className="product-name-on-card">
                        Perfect Homes Webster Engineered Wood TV
                      </p>
                      <div>
                        <span className="text-warning">
                        <i className="fa fa-star"></i> 
                          <i className="fa fa-star"></i> 
                          <i className="fa fa-star"></i>
                        </span>
                        <span >
                          <i className="fa fa-star">
                        </i> <i className="fa fa-star"></i> 
                        </span>
                      </div>
                      <p className="product-price-on-card">price : 100$</p>
                    </Card.Body>
                  </div>
                </Card>
              </Link>
            </div>
          </Col>
          <Col className="p-1" lg={2} md={2} sm={6}>
            <div>
              <Link to="/productdetails">
                <Card className="image-box card w-100">
                  <div className="overflow-hidden w-100">
                    <img className="center w-100" src={image6} alt="Product 1" />
                    <Card.Body>
                      <p className="product-name-on-card">
                        Perfect Homes Webster Engineered Wood TV
                      </p>
                      <div>
                        <span className="text-warning">
                        <i className="fa fa-star"></i> 
                          <i className="fa fa-star"></i> 
                          <i className="fa fa-star"></i>
                        </span>
                        <span >
                          <i className="fa fa-star">
                        </i> <i className="fa fa-star"></i> 
                        </span>
                      </div>
                      <p className="product-price-on-card">price : 100$</p>
                    </Card.Body>
                  </div>
                </Card>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchProduct;
