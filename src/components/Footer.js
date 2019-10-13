import React from "react";
import styled from 'styled-components'
import { ProductConsumer } from '../context'

export default function Footer() {
  return (
    <ProductConsumer>
      {value => {
        return (
          <FooterWrapper>
            <div className="container py-3">
              <div className="row">
                <div className="col-md-6">
                  <p>Copyrigth &copy; Tech Store {new Date().getFullYear()} all rights resereved</p>
                </div>
                <div className="col-md-6 d-flex justify-content-around">
                  {value.socialIcons.map(item => <a target='_blank' href={item.path} key={item.id}>{item.icon}</a>)}
                </div>
              </div>
            </div>
          </FooterWrapper>
        )
      }}
    </ProductConsumer>
  )
}
const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
  }
  .icon:hover {
    color: var(--primaryColor);
  }
`
