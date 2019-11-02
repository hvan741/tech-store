import React from 'react'
import Hero from '../components/Hero'
import storeBcg from '../images/storeBcg.jpeg'
import Cart from '../components/CartPage/Cart'

function CartPage() {
    return (
        <>
        <Hero img={storeBcg} />
        <Cart />
        </>
    )
}

export default CartPage
