import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import p1 from '../assets/images/products/p1.jpg'
import p2 from '../assets/images/products/p2.jpg'
import p3 from '../assets/images/products/p3.jpg'
import p4 from '../assets/images/products/p4.jpg'

const products = [
  {
    id: 1,
    name: 'Elegant Wooden Chair',
    image: p1,
  },
  {
    id: 2,
    name: 'Modern Leather Sofa',
    image: p2,
  },
  {
    id: 3,
    name: 'Classic Oak Dining Table',
    image: p3,
  },
  {
    id: 4,
    name: 'Luxurious King-size Bed',
    image: p4,
  },
];

const CartList = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="p-1" lg={7} md={12} sm={12} xs={12}>
            {products.map((product) => (
              <Card key={product.id}>
                <Card.Body>
                  <Row>
                    <Col md={3} lg={3} sm={12} xs={12}>
                      <img className="cart-product-img" src={product.image} alt={product.name} />
                    </Col>

                    <Col className="product-name" md={6} lg={6} sm={12} xs={12}>
                      <h5>{product.name}</h5>
                      <h6> Quantity = 7 </h6>
                      <p>Large | Red</p>
                      <h6>Price = $500</h6>
                    </Col>

                    <Col md={3} lg={3} sm={12} xs={12}>
                      <Button className="btn rounded-2 mt-md-5 mx-1 btn-sm site-btn">
                        <i className="fa fa-trash-alt"></i>
                      </Button>
                      <Button className="btn rounded-2 mt-md-5 mx-1 btn-sm site-btn">
                        <i className="fa fa-plus"></i>
                      </Button>
                      <Button className="btn rounded-2 mt-md-5 mx-1 btn-sm site-btn">
                        <i className="fa fa-minus"></i>
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </Col>

          <Col className="p-1" lg={5} md={12} sm={12} xs={12}>
            <Card>
              <Card.Header>
                <h6 className="text-center">Your information</h6>
              </Card.Header>
              <Card.Body>
                <Container fluid>
                  <Row>
                    <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                      <label className="form-label">Choose City</label>
                      <select className="form-control py-3 px-2">
                        <option value="" disabled>
                          Choose
                        </option>
                        <option value="Istanbul">Istanbul</option>
                        <option value="Bursa">Bursa </option>
                        <option value="Konya">Konya </option>
                        <option value="Izmir">Izmir </option>
                        <option value="Ankara">Ankara </option>
                      </select>
                    </div>
                    <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                      <label className="form-label">Choose Payment Method</label>
                      <select className="form-control py-3 px-2">
                        <option value="" disabled>
                          Choose
                        </option>
                        <option value="Istanbul">Cache</option>
                        <option value="Bursa">Mastercard </option>
                      </select>
                    </div>

                    <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                      <label className="form-label">Your Name</label>
                      <input className="form-control py-3 px-2" type="text" placeholder="your name" />
                    </div>

                    <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                      <label className="form-label">Delivery Address</label>
                      <textarea rows={2} className="form-control py-3 px-2" type="text" placeholder="your Address" />
                    </div>

                    <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                      <button className="btn p-2 rounded-2 site-btn">confirm order</button>
                    </div>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartList;
