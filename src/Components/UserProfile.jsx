import React, { useState } from 'react';
import { Col, Container, Row, Card, Button, Modal } from 'react-bootstrap';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profileImage from '../assets/images/team1-modified.png';
import profileImage1 from '../assets/images/products/f17.jpg';
import profileImage2 from '../assets/images/categories/2.jpg';
import profileImage3 from '../assets/images/categories/3.jpg';
import profileImage4 from '../assets/images/categories/4.jpg';
import profileImage5 from '../assets/images/categories/Chairs.jpg';
import profileImage6 from '../assets/images/categories/Blinds.jpg';

const imageMapping = {
  1: profileImage1,
  2: profileImage2,
  3: profileImage3,
  4: profileImage4,
  5: profileImage5,
  6: profileImage6,
};

const orders = [
  {
    id: 1,
    productName: 'Wooden Dining Table',
    quantity: 3,
    size: 'Large',
    color: 'Mahogany',
    price: 150,
    status: 'Shipped',
  },
  {
    id: 2,
    productName: 'Leather Sofa Set',
    quantity: 2,
    size: 'Medium',
    color: 'Black',
    price: 300,
    status: 'Delivered',
  },
  {
    id: 3,
    productName: 'Modern Coffee Table',
    quantity: 1,
    size: 'Small',
    color: 'White',
    price: 80,
    status: 'Pending',
  },
  {
    id: 4,
    productName: 'Wardrobe with Mirror',
    quantity: 2,
    size: 'Large',
    color: 'Oak',
    price: 250,
    status: 'Processing',
  },
  {
    id: 5,
    productName: 'Corner Sofa',
    quantity: 1,
    size: 'Large',
    color: 'Gray',
    price: 400,
    status: 'Delivered',
  },
  {
    id: 6,
    productName: 'Bookshelf',
    quantity: 4,
    size: 'Medium',
    color: 'Cherry',
    price: 120,
    status: 'Shipped',
  },
];

const StarRating = ({ rating, setRating }) => {
  const [hover, setHover] = useState(null);

  return (
    <>
      <form>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <FontAwesomeIcon
                className="star"
                icon={faStar}
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                onClick={() => setRating(ratingValue)}
              />
            </label>
          );
        })}
        <p className="text-center mt-2">Your rating is: {rating}</p>
      </form>
    </>
  );
};

const UserProfile = () => {
  const [show, setShow] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [rating, setRating] = useState(0);

  const handleClose = () => setShow(false);

  const handleShow = (order) => {
    setSelectedOrder(order);
    setShow(true);
  };

  return (
    <>
      <Container className="text-center" fluid>
        <div className="section-title text-center mb-55">
          <h2>User Profile</h2>
        </div>
      </Container>
      <Container>
        <Row className="justify-content-center align-items-center flex-column">
          <Col lg={6} md={6} sm={12}>
            <img src={profileImage} className="profile-image" alt="" />
          </Col>
          <Col lg={6} md={6} sm={12}>
            <ul className="list-group">
              <li className="list-group-item">Name: Ahmed</li>
              <li className="list-group-item">Email: ahmed@gmail.com</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="section-title text-center mb-55">
          <h2>Order History by (Ahmed)</h2>
        </div>
        <Card>
          <Card.Body className="d-flex flex-wrap">
            {orders.map((order) => (
              <Col key={order.id} className="wrapper-profile" xl={4} lg={6} md={6} sm={12} xs={12}>
                <div className="w-50">
                  <h5 className="product-name">{order.productName}</h5>
                  <h6>Quantity = {order.quantity}</h6>
                  <p>{order.size} | {order.color}</p>
                  <h6>Price = {order.price} x {order.quantity} = {order.price * order.quantity}$</h6>
                  <h6>Status = {order.status}</h6>
                  <Button onClick={() => handleShow(order)} className="btn btn-danger">Post Review</Button>
                  <hr />
                </div>
                <div className="">
                  <img src={imageMapping[order.id]} className="profile-image" alt="" />
                </div>
              </Col>
            ))}
          </Card.Body>
        </Card>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
            <label className="form-label">Your Name</label>
            <input className="form-control" type="text" placeholder="Nizar" />
          </div>
          <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
            <label className="form-label">Your Comment</label>
            <textarea rows={2} className="form-control" type="text" placeholder="Your Comment" />
          </div>
          <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
            <label className="form-label">Your review</label>
            <StarRating rating={rating} setRating={setRating} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserProfile;
