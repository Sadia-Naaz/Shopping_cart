import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Ratings from '../Ratings/Ratings';
import './product.css';
import { CartState } from '../../Context/Context';

const SingleProduct = ({ p }) => {
  const { state: { cart }, dispatch } = CartState();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: p });
  };

  const removeFromCart = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: p });
  };

  return (
    <div className='product__single'>
      <Card className='product__card'>
        <Card.Img variant='top' src={p.thumbnail} className='product__image' />
        <Card.Body className='product__body'>
          <Card.Title className='product__title'>{p.title}</Card.Title>
          <Card.Subtitle className='product__subtitle'>
            <div className='product__price'>${p.price}</div>
            <div className='product__brand'>{p.brand}</div>
            <div className='product__shipping'>{p.shippingInformation}</div>
            <div className='product__availability'>{p.availabilityStatus}</div>
            <Ratings rating={p.rating} />
          </Card.Subtitle>
          <div className='product__btns'>
            {cart.some((prod) => prod.id === p.id) ? (
              <Button onClick={removeFromCart} variant='danger'>
                Remove from cart
              </Button>
            ) : (
              <Button onClick={addToCart}>Add to cart</Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
