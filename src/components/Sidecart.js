import React from "react";
import styled from 'styled-components'
import { ProductConsumer } from '../context'

export default function SideCart() {
  return <ProductConsumer>
    {value => {
      const {cartOpen, closeCart, handleCart, cart} = value
      return (
        <SidecartWrapper show={cartOpen} onClick={closeCart}>
          <p>items</p>
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
`