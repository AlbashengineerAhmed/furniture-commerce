import React from 'react';
import { Container } from 'react-bootstrap';
import CartList from '../Components/CartList';

const CartListPage = () => {
  return (
    <>
      <Container className="text-center" fluid>
        <div className="section-title text-center mb-40">
          <h2>Cart List</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
        </div>
      </Container>
      <CartList />
    </>
  );
};

export default CartListPage;
