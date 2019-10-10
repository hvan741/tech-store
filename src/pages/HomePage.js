import React from 'react'
import {ProductConsumer} from '../context'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import {FaBars, FaCartPlus} from 'react-icons/fa'

function HomePage() {
    return (
        <ProductConsumer >
            {value => {
                const {cartItems, } = value
                return (
                    <div>
                        Hello from home Page
                    </div>
                )
            }}
        </ProductConsumer>
    )
}

const NavWrapper = styled.nav`

`

export default HomePage
