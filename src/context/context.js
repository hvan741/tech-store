import React, { Component } from 'react'
import Products from '../pages/ProductsPage';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state={
        sidebarOpen: false,
        cartOpen: false,
        cartItems: 110
    }
    // handle sidebar
    handleSidebar = () => {
        this.setState({sidebarOpen: !this.state.sidebarOpen})
    }

    //handle cart
    handleCart = () => {
        this.setState({cartOpen: !this.state.cartOpen})
    }

    //open
    openCart = () => {
        this.setState({
            cartOpen: true
        })
    }

    //close cart
    closeCart = () => {
        this.setState({
            cartOpen: false
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleCart: this.handleCart,
                handleSidebar: this.handleSidebar,
                openCart: this.openCart,
                closeCart: this.closeCart
            }} >
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer
export {ProductContext, ProductProvider, ProductConsumer}
