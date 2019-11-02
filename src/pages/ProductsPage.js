import React from 'react'
import Hero from '../components/Hero'
import productBcg from '../images/productsBcg.jpeg'
import Products from '../components/ProductPage/Prodcuts'

function ProductsPage() {
    return (
        <>
            <Hero img={productBcg} className='my-5'/>
            <Products />
        </>
    )
}

export default ProductsPage
