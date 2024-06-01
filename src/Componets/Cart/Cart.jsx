import React from 'react';
import { ListGroup, Row, Col, Image, Form, Button } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import Ratings from '../Ratings/Ratings';
import { CartState } from '../../Context/Context';
import './Cart.scss';

function Cart() {
  const { state: { cart }, dispatch } = CartState();

  const total = cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0);

  return (
    <div className='cart'>
      <div className='Cart_products_container'>
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row className='cart-item'>
                <Col md={2}>
                  <Image src={prod.thumbnail} fluid rounded />
                </Col>
                <Col md={3}>
                  <span>{prod.title}</span>
                </Col>
                <Col md={2}>
                  <span>${prod.price}</span>
                </Col>
                <Col md={2}>
                  <Ratings rating={prod.rating} />
                </Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) => dispatch({
                      type: "ADD_QNTY",
                      payload: { id: prod.id, qty: e.target.value },
                    })}
                  >
                    {[...Array(prod.minimumOrderQuantity).keys()].map((i) => (
                      <option key={i + 1}>{i + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={1}>
                  <Button
                    type='button'
                    variant="light"
                    onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: prod })}
                  >
                    <AiFillDelete fontSize={20} />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className='cart_sideBar'>
        <span className='title'>Subtotal {cart.length} items</span>
        <span className='total'>Total price: ${total.toFixed(2)}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed To Checkout
        </Button>
      </div>
    </div>
  );
}

export default Cart;
