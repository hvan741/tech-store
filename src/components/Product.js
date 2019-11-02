import React from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
import styled from 'styled-components'
import { FaSearch, FaCartPlus } from 'react-icons/fa'

function Product({ product }) {
    return (
        <ProductConsumer>
            {value => {
                const { addToCart } = value
                return (
                    <ProductWrapper className='col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3 '>
                        <div className='card'>
                            {/* cart img */}
                            <div className='img-container'>
                                <img
                                    src={product.image}
                                    alt="product"
                                    className='card-img-top p-5'
                                    style={{ height: '320px' }}
                                />
                                <div className="product-icons">
                                    <Link to={`/products/${product.slug}`}>
                                        <FaSearch className='icon' />
                                    </Link>
                                    <FaCartPlus
                                        className='icon'
                                        onClick={() => addToCart(product.id)}
                                    />
                                </div>
                            </div>
                            {/* cart body */}
                            <div className='card-body d-flex justify-content-between'>
                                <p className="mb-0">
                                    {product.title}
                                </p>
                                <p className='mb-0 text-main'>
                                    ${product.price}
                                </p>
                            </div>
                        </div>
                    </ProductWrapper>
                )
            }}
        </ProductConsumer>
    )
}
const ProductWrapper = styled.div`
.card {
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
    transition: var(--mainTransition);
    height: 100%;
}
.card:hover {
    box-shadow: 7px 10px 5px 0px rgba(0, 0, 0, 0.5);
    cursor: pointer;
}
.card-img-top {
    transition: var(--mainTransition);
}
.card:hover .card-img-top {
    opacity: 0.2;
    transform: scale(1.15);
} 
.product-icons {
    transition: var(--mainTransition);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
}
.img-container {
    position: relative;
}
.icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
    background: var(--mainBlack);
    border-radius: 0.5rem;
    margin: 1rem;
    padding: 0.5rem;
}
.card:hover .product-icons {
    opacity: 1;
}
.card-body {
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
}
`
export default Product
