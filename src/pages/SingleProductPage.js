import React, { Component } from 'react'
import { ProductContext } from '../context'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SingleProductPageBcg from '../images/singleProductBcg.jpeg'

export class SingleProductPage extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            slug: this.props.match.params.id
        }
    }
    static contextType = ProductContext

    render() {
        const { getSingleProduct, addToCart } = this.context
        const product = getSingleProduct(this.state.slug)
        if (!product) {
            return (
                <h3>No such product could be found</h3>
            )
        }
        const { image, title, company, price, description, id } = product
        return (
            <>
            <Hero img={SingleProductPageBcg} title='single product'/>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                            <img className='img-fluid' src={`../${image}`} alt="product" />
                        </div>
                        <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                            <h5 className="text-title mb-4">
                                model : {title}
                            </h5>
                            <h5 className="text-capitalize text-muted">
                                company : {company}
                            </h5>
                            <h5 className="text-main text-capitalize">
                                price : ${price}
                            </h5>
                            <p className="text-capitalize text-title">
                                some info about product :
                                        </p>
                            <p className='mb-5'>
                                {description}
                            </p>
                            <button className='main-link' onClick={() => addToCart(id)} style={{ margin: '0.75rem' }}>add to cart</button>
                            <Link to='/products' className='main-link' style={{ margin: '0.75rem' }}>
                                back to products
                                        </Link>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}

export default SingleProductPage