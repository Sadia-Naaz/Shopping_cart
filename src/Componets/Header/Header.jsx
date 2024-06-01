import React from 'react';
import { Navbar, Container, FormControl, Dropdown, Badge, Nav, Button, DropdownMenu } from 'react-bootstrap';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import { CartState } from '../../Context/Context';
import './Header.scss';

const Header = () => {
  const { state: { cart }, dispatch, productDispatch } = CartState();

  return (
    <div className='header'>
      <Navbar bg='dark' variant='dark' style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>
            <Link to="/">Shopping Cart</Link>
          </Navbar.Brand>
          <Navbar.Text className='search'>
            <FormControl
              placeholder='Search products...'
              aria-label='Search'
              style={{ width: 500 }}
              className='m-auto'
              onChange={(e) => productDispatch({ type: 'Filter_by_search', payload: e.target.value })}
            />
          </Navbar.Text>
        </Container>

        <Nav>
          <Dropdown align="end">
            <Dropdown.Toggle variant='success'>
              <FaCartShopping color='white' fontSize='25px' />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <DropdownMenu style={{ width: 370 }}>
              {cart.length > 0 ? (
                cart.map((prod) => (
                  <div className='cart-item' key={prod.id}>
                    <img className='cart-item-img' src={prod.thumbnail} alt={prod.title} />
                    <div className='cart-item-details'>
                      <span>{prod.title}</span>
                      <span>${prod.price}</span>
                    </div>
                    <AiFillDelete
                      style={{ cursor: 'pointer' }}
                      fontSize='20px'
                      onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: prod })}
                    />
                  </div>
                ))
              ) : (
                <span style={{ padding: 10 }}>Cart is empty</span>
              )}

              <Link to='/cart'>
                <Button variant='success' style={{ width: '95%', margin: '10px 10px' }}>
                  Go To Cart
                </Button>
              </Link>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
