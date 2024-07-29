import React from 'react';
import '../../assets/css/custom.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import p1 from '../../assets/images/products/p1.jpg'
import p2 from '../../assets/images/products/p2.jpg'
import p3 from '../../assets/images/products/p3.jpg'
import p4 from '../../assets/images/products/p4.jpg'
import p5 from '../../assets/images/products/p5.jpg'
import p6 from '../../assets/images/products/p6.jpg'
import p7 from '../../assets/images/products/p7.jpg'
import p8 from '../../assets/images/products/p8.jpg'
import { Link } from 'react-router-dom';
const products = [
  {
    id: 1,
    name: 'Perfect Homes Webster Engineered Wood TV',
    price: '100$',
    image: p1,
  },
  {
    id: 2,
    name: 'Premium Living Room Sofa Set',
    price: '300$',
    image: p2,
  },
  {
    id: 3,
    name: 'Modern Glass Dining Table',
    price: '150$',
    image: p3,
  },
  {
    id: 4,
    name: 'Luxury Bedroom Furniture Set',
    price: '230$',
    image: p4,
  },
  {
    id: 5,
    name: 'Elegant Office Desk and Chair',
    price: '400$',
    image: p5,
  },
  {
    id: 6,
    name: 'Contemporary Kitchen Appliances',
    price: '600$',
    image: p6,
  },
  {
    id: 7,
    name: 'Outdoor Patio Furniture Collection',
    price: '550$',
    image: p7,
  },
  {
    id: 8,
    name: 'Kids Room Creative Decor',
    price: '350$',
    image: p8,
  },
];

const CollectionProducts = () => {
  return (
    <>
      <Container className="text-center" fluid>
        <div className="section-title text-center mb-55">
          <h2>Collection</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
        </div>
        <Row>
          {products.map((product) => (
            <Col className="p-3" lg={3} md={3} sm={6} key={product.id}>
              <Link to="/productdetails">
                <Card className="image-box card w-100">
                  <div className='overflow-hidden w-100'>
                    <img
                      className="center w-100"
                      src={product.image}
                      alt={product.name}
                    />
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
                    <p className="product-price-on-card">price: {product.price}</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CollectionProducts;
