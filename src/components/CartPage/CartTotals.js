import React from 'react'
import { ProductConsumer } from '../../context'

function CartTotals() {
    return (
        <div className="container">
            <div className="row">
                <ProductConsumer>
                    {value => {
                        const { clearCart, cartSubTotal, cartTotal, cartTax } = value
                        return (
                            <div className='col text-title text-center my-4'>
                                <button className="btn btn-outline-danger text-capitalize mb-4" onClick={clearCart}>
                                    clear cart
                                </button>
                                <h3>subtotal : ${cartSubTotal}</h3>
                                <h3>tax : ${cartTax}</h3>
                                <h3>Total : ${cartTotal}</h3>
                            </div>
                        )
                    }}
                </ProductConsumer>
            </div>
        </div>
    )
}

export default CartTotals
