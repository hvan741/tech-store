import React from 'react'
import {ProductConsumer} from '../context'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import {FaBars, FaCartPlus} from 'react-icons/fa'

function Navbar() {
    return (
        <ProductConsumer >
            {value => {
                const {cartItems, handleSidebar, handleCart} = value
                return (
                    <NavWrapper >
                        <div className='nav-center'>
                            <FaBars className='nav-icons' />
                            <img src={logo} alt='tech logo' />
                            <div className="nav-cart">
                                <FaCartPlus className='nav-icons' />
                                <div className='cart-items' >
                                    {cartItems}
                                </div>
                            </div>
                        </div>
                    </NavWrapper>
                )
            }}
        </ProductConsumer>
    )
}

const NavWrapper = styled.nav`
position: -webkit-sticky;
position: sticky;
top: 0;
width: 100%;
padding: 1rem 1.5rem;
background: var(--mainGrey);
border: 2px solid var(--primaryColor);

.nav-center {
display: flex;
align-items: center;
justify-content: space-between;
margin: 0 auto;
max-width:  1170px;
}
.nav-icons {
    font-size: 1.5rem;
    cursor: pointer;
}
.nav-cart {
    position: relative;
}
.cart-items {
    background: var(--primaryColor);
    color: var(--mainWhite);
    position: absolute;
    font-size: 0.85rem;
    top: -8px;
    right: -5px;
    border-radius: 50%;
}
`

export default Navbar
