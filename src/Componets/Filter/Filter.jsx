import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Filter.scss';
import Ratings from '../Ratings/Ratings';
import { CartState } from '../../Context/Context';

function Filter() {
  const {
    productState: {
      byRating, sort, searchQuery, availabilityStatus, shippingInformation
    },
    productDispatch
  } = CartState();
  
  return (
    <div className='filters'>
      <span>Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name='group-1'
          type='radio'
          id='inline-1'
          onChange={() => {
            productDispatch({ type: "Sort_by_price", payload: "LowToHigh" });
          }}
          checked={sort === "LowToHigh"}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name='group-1'
          type='radio'
          id='inline-2'
          onChange={() => {
            productDispatch({ type: "Sort_by_price", payload: "HighToLow" });
          }}
          checked={sort === "HighToLow"}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Remove Out Of Stock"
          name='group-1'
          type='checkbox'
          id='inline-3'
          
          onChange={() => productDispatch({ type: "FILTER_BY_AVAILABILITY", payload: "In Stock" })}
          checked={availabilityStatus === "In Stock"}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name='group-1'
          type='checkbox'
          id='inline-4'
          onChange={() => { productDispatch({ type: "FILTER_BY_DELIVERY_TIME", payload: "Ships overnight" }) }}
          checked={shippingInformation === "Ships overnight"}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating:</label>
        <Ratings
          rating={byRating}
          style={{ cursor: "pointer" }}
          onClick={(i) => productDispatch({ type: "Filter_by_rating", payload: i })}
        />
      </span>
      <Button variant="light" onClick={() => productDispatch({ type: "Clear_Filters" })}>
        Clear Filters
      </Button>
    </div>
  );
}

export default Filter
