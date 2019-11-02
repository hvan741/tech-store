import React from "react";
import styled from 'styled-components'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'

export default function SideCart() {
  return <ProductConsumer>
    {value => {
      const { cartOpen, closeCart, cart, cartTotal } = value
      return (
        <SidecartWrapper show={cartOpen} onClick={closeCart}>
          <ul>
            {cart.map(item => {
              return (
                <li className='mb-3 cart-item' key={item.id}>
                  <img width='35' src={`../${item.image}`} alt="product" className='35' />
                  <h6 className='text-uppercase mt-2'>{item.title}</h6>
                  <h6 className='text-title text-capitalize'>Amount : {item.count}</h6>
                </li>
              )
            })}
          </ul>
          <h4 className="text-capitalize text-main">cart total : ${cartTotal}</h4>
          <div className='text-center my-5'>
            <Link to='/cart' className='main-link'>
              cart page
            </Link>
          </div>
        </SidecartWrapper>
      )
    }}
  </ProductConsumer>
}

const SidecartWrapper = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  background: var(--mainGrey);
  width: 100%;
  height: 100%;
  border-left: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  z-index: 1;
  transform: ${props => props.show ? 'translate(0)' : 'translate(100%)'};
  @media (min-width: 576px) {
    width: 20rem;
  }
  overflow: scroll;
  padding: 2rem;
  ul {
    padding: 0 !important;
  }
  .cart-item {
    list-style-type: none;
  }
`