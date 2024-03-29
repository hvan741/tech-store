import React from 'react'
import { ProductConsumer } from '../../context'
import Title from '../Title'
import Product from '../Product'
import ProductFilter from '../ProductPage/ProductFilter'

function Prodcuts() {
    return (
        <ProductConsumer>
            {value => {
                const { filteredProducts } = value
                return (
                    <section className='py-5'>
                        <div className="container">
                            <Title center='true' title='our products' />
                            <ProductFilter />
                            {/* Items count */}
                            <div className="row">
                                <div className="col-10 mx-auto">
                                    <h6 className="text-title">
                                    Total products: {filteredProducts.length}
                                    </h6>
                                </div>
                            </div>
                            {/* end of items count */}
                            <div className="row py-5">
                                {filteredProducts.length === 0 ? (
                                    <div className="col text-title text-center">
                                        sorry, no items matched your search
                                    </div>
                                ) : (
                                    filteredProducts.map(product => {
                                        return <Product key={product.id} product={product} />
                                    })
                                )}
                            </div>
                        </div>
                    </section>
                )
            }}
        </ProductConsumer>
    )
}

export default Prodcuts
