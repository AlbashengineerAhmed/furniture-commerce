import React, { Fragment } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import p1 from '../assets/images/products/p1.jpg'
import p2 from '../assets/images/products/p2.jpg'
import p3 from '../assets/images/products/p3.jpg'
import p4 from '../assets/images/products/p4.jpg'
import p5 from '../assets/images/products/p5.jpg'
import p6 from '../assets/images/products/p6.jpg'
import p7 from '../assets/images/products/p7.jpg'
import p8 from '../assets/images/products/p8.jpg'
import { Link } from 'react-router-dom';
const products = [
  {
    id: 1,
    name: 'Modern Living Room Sofa',
    image: p1,
  },
  {
    id: 2,
    name: 'Luxury Bedroom Furniture Set',
    image: p2,
  },
  {
    id: 3,
    name: 'Elegant Dining Table',
    image: p3,
  },
  {
    id: 4,
    name: 'Contemporary Office Desk and Chair',
    image: p4,
  },
  {
    id: 5,
    name: 'Outdoor Patio Furniture Collection',
    image: p5,
  },
  {
    id: 6,
    name: 'Creative Kids Room Decor',
    image: p6,
  },
  {
    id: 7,
    name: 'Premium Kitchen Appliances',
    image: p7,
  },
  {
    id: 8,
    name: 'Stylish Home Decor Accessories',
    image: p8,
  },
];


const Favorite = () => {
  return (
    <Fragment>
      <Container className="text-center" fluid>
        <div className="section-title text-center mb-55">
          <h2>Favorite products</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
        </div>
        <Row>
          {products.map((product) => (
            <Col className="p-3" lg={3} md={3} sm={6} key={product.id}>
              <div>
                <Link to="/productdetails">
                  <Card className="image-box card w-100">
                    <div className='overflow-hidden'>
                      <img className="center w-100" src={product.image} alt={product.name} />
                    </div>
                    <Card.Body>
                      <p className="product-name-on-card">{product.name}</p>
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
                      <Button className="btn-danger rounded-2 btn-sm">
                        <i className="fa py-1 px-2 fa-trash-alt"></i>Remove
                      </Button>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Favorite;
