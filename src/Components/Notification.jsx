import React, { useState } from 'react';
import { Col, Container, Row, Card, Button, Modal } from 'react-bootstrap';

const notificationsData = [
  {
    id: 1,
    title: 'New Furniture Collection',
    date: '2022-03-06',
    status: 'Unread',
    details: 'Check out our latest furniture collection. Explore now!',
  },
  {
    id: 2,
    title: 'Special Discount Alert',
    date: '2022-03-08',
    status: 'Unread',
    details: 'Don’t miss out on our special discount. Limited time offer!',
  },
  {
    id: 3,
    title: 'Your Order Shipped',
    date: '2022-03-10',
    status: 'Unread',
    details: 'Good news! Your furniture order has been shipped. Track your order now.',
  },
  {
    id: 4,
    title: 'Exclusive Sale Preview',
    date: '2022-03-12',
    status: 'Unread',
    details: 'Get a sneak peek of our upcoming exclusive sale. Stay tuned!',
  },
];

const Notification = () => {
  const [show, setShow] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = (notification) => {
    setSelectedNotification(notification);
    setShow(true);
  };

  return (
    <Container style={{minHeight:"650px"}}>
      <Container className="TopSection">
        <Row>
          {notificationsData.map((notification) => (
            <Col className="p-1" md={6} lg={6} sm={12} xs={12} key={notification.id}>
              <Card>
                <Card.Body>
                  <h6>{notification.title}</h6>
                  <p className="py-1 px-0 text-primary m-0">
                    <i className="fa fa-bell"></i> Date: {notification.date} | Status: {notification.status}
                  </p>
                  <Button onClick={() => handleShow(notification)} className="btn rounded-2 btn-danger">
                    Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedNotification?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedNotification?.details}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Notification;
