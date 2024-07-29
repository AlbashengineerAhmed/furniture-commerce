import React from 'react';
import '../../assets/css/custom.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import f1 from '../../assets/images/products/f1.jpg'
import f2 from '../../assets/images/products/f2.jpg'
import f3 from '../../assets/images/products/f3.jpg'
import f4 from '../../assets/images/products/f4.jpg'
import f5 from '../../assets/images/products/f5.jpg'
import f6 from '../../assets/images/products/f6.jpg'
import f7 from '../../assets/images/products/f7.jpg'
import f8 from '../../assets/images/products/f8.jpg'
import f9 from '../../assets/images/products/f9.jpg'
import f10 from '../../assets/images/products/f10.jpg'
import f11 from '../../assets/images/products/f11.jpg'
import f12 from '../../assets/images/products/f12.jpg'
import f13 from '../../assets/images/products/f13.jpg'
import f14 from '../../assets/images/products/f14.jpg'
import f15 from '../../assets/images/products/f15.jpg'
import f16 from '../../assets/images/products/f16.jpg';
import f17 from '../../assets/images/products/f17.jpg';
import f18 from '../../assets/images/products/f18.jpg';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Stylish Desk Lamp',
      price: '50$',
      image: f1,
    },
    {
      id: 2,
      name: 'Elegant Coffee Table',
      price: '120$',
      image: f2,
    },
    {
      id: 3,
      name: 'Comfortable Lounge Chair',
      price: '80$',
      image: f3,
    },
    {
      id: 4,
      name: 'Modern Bedside Table',
      price: '150$',
      image: f4,
    },
    {
      id: 5,
      name: 'Cozy Sofa Set',
      price: '400$',
      image: f5,
    },
    {
      id: 6,
      name: 'Chic Dining Table',
      price: '300$',
      image: f6,
    },
    {
      id: 7,
      name: 'Luxurious Leather Sofa',
      price: '700$',
      image: f7,
    },
    {
      id: 8,
      name: 'Sleek TV Stand',
      price: '250$',
      image: f8,
    },
    {
      id: 9,
      name: 'Vintage Armchair',
      price: '180$',
      image: f9,
    },
    {
      id: 10,
      name: 'Rustic Bookshelf',
      price: '130$',
      image: f10,
    },
    {
      id: 11,
      name: 'Contemporary Floor Lamp',
      price: '90$',
      image: f11,
    },
    {
      id: 12,
      name: 'Designer Side Table',
      price: '160$',
      image: f12,
    },
    {
      id: 13,
      name: 'Minimalist Wall Clock',
      price: '30$',
      image: f13,
    },
    {
      id: 14,
      name: 'Industrial Pendant Light',
      price: '70$',
      image: f14,
    },
    {
      id: 15,
      name: 'Abstract Canvas Painting',
      price: '200$',
      image: f15,
    },
    {
      id: 16,
      name: 'Classic Bed Frame',
      price: '350$',
      image: f16,
    },
    {
      id: 17,
      name: 'Modern Kitchen Set',
      price: '280$',
      image: f17,
    },
    {
      id: 18,
      name: 'Elegant Office Chair',
      price: '120$',
      image: f18,
    },
  ];

  return (
    <Container className="text-center" fluid>
      <div className="section-title text-center mb-55">
        <h2>Featured Products</h2>
        <p>Some Of Our Exclusive Collection, You May Like</p>
      </div>
      <Row>
        {featuredProducts.map((product) => (
          <Col className="p-1" lg={2} md={2} sm={6} key={product.id}>
            <div>
              <Link to="/productdetails">
                <Card className="image-box card w-100">
                  <div className='overflow-hidden'>
                    <img
                      className="center w-100"
                      src={product.image}
                      alt={`Product ${product.id}`}
                    />
                  </div>
                  <Card.Body>
                    <p className="product-name-on-card">{product.name}</p>
                    <div>
                        <span className="text-warning">
                        <i className="fa fa-star"></i> 
                          <i className="fa fa-star"></i> 
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i> 
                        </span>
                        <span >
                          <i className="fa fa-star"></i> 
                        </span>
                      </div>
                    <p className="product-price-on-card">price: {product.price}</p>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedProducts;
