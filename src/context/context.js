import React, { Component } from "react";
import { linkData } from "./linkData";
import { socialData } from './socialData'
import { items } from './productData'
const ProductContext = React.createContext();
//Provider
//Consumer
class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    links: linkData,
    socialIcons: socialData,
    cart: [],
    cartItems: 0,
    cartSubTotal: 0,
    cartTotal: 0,
    cartTax: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: true,
    //
    search: "",
    price: 0,
    min: 0,
    max: 0,
    company: "all",
    shipping: false
  }

  componentDidMount() {
    this.setProducts(items)
  }

  // set products
  setProducts = products => {
    let storeProducts = products.map(item => {
      const { id } = item.sys
      const image = item.fields.image.fields.file.url
      const slug = item.fields.title.split(' ').join('')
      const freeShipping = item.freeShipping
      const product = { id, ...item.fields, image, slug,freeShipping }
      return product
    })
    let featuredProducts = storeProducts.filter(item => item.featured === true)
    let maxPrice = Math.max(...storeProducts.map(item => item.price))

    this.setState({
      storeProducts,
      featuredProducts,
      filteredProducts: storeProducts,
      cart: this.getStorageCart(),
      loading: false,
      max: maxPrice,
      price: maxPrice
    }, () => {
      this.addTotals()
    })
  }
  // get cart from storage
  getStorageCart = () => {
    let cart
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'))
    } else {
      cart = []
    }
    return cart
  }

  // get totals
  getTotals = () => {
    let subTotal = 0
    let cartItems = 0
    this.state.cart.forEach(item => {
      subTotal += item.total
      cartItems += item.count
    })
    subTotal = parseFloat(subTotal.toFixed(2))
    let tax = subTotal * 0.2
    tax = parseFloat(tax.toFixed(2))
    let total = tax + subTotal
    total = parseFloat(total.toFixed(2))
    return {
      cartItems,
      subTotal,
      tax,
      total
    }
  }
  // add totals
  addTotals = () => {
    let totals = this.getTotals()
    this.setState({
      cartItems: totals.cartItems,
      cartSubTotal: totals.subTotal,
      cartTax: totals.tax,
      cartTotal: totals.total
    })
  }
  // sync storage
  syncStorage = () => {
    localStorage.setItem('cart', JSON.stringify(this.state.cart))

  }

  //add to cart
  addToCart = (id) => {
    let tempCart = [...this.state.cart]
    let tempProducts = [...this.state.storeProducts]
    let tempItem = tempCart.find(item => item.id === id)
    if (!tempItem) {
      tempItem = tempProducts.find(item => item.id === id)
      let total = tempItem.price
      let cartItem = { ...tempItem, count: 1, total }
      tempCart = [...tempCart, cartItem]
    } else {
      tempItem.count++
      tempItem.total = tempItem.price * tempItem.count
      tempItem.total = parseFloat(tempItem.total.toFixed(2))
    }
    this.setState(() => {
      return { cart: tempCart }
    }, () => {
      this.addTotals()
      this.syncStorage()
      this.openCart()
    })
  }

  // get single product
  getSingleProduct = slug => {
    let tempProducts = [...this.state.storeProducts]
    let product = tempProducts.find(item => item.slug === slug)
    return product
  }

  // handle sidebar
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }
  // hanldle cart
  handleCart = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  }
  //close cart
  closeCart = () => {
    this.setState({ cartOpen: false });
  }
  // open cart

  openCart = () => {
    this.setState({ cartOpen: true });
  }

  // cart functionality
  //increment 
  increment = (id) => {
    let tempCart = [...this.state.cart]
    const tempItem = tempCart.find(item => item.id === id)
    tempItem.count++
    tempItem.total = tempItem.price * tempItem.count
    tempItem.total = parseFloat(tempItem.total.toFixed(2))
    this.setState(() => {
      return {
        cart: tempCart
      }
    }, () => {
      this.addTotals()
      this.syncStorage()
    })
  }
  //decrement
  decrement = (id) => {
    let tempCart = [...this.state.cart]
    const tempItem = tempCart.find(item => item.id === id)
    tempItem.count--
    if (tempItem.count > 0) {
      tempItem.total = tempItem.price * tempItem.count
      tempItem.total = parseFloat(tempItem.total.toFixed(2))
      this.setState(() => {
        return {
          cart: tempCart
        }
      }, () => {
        this.addTotals()
        this.syncStorage()
      })
    } else {
      this.removeItem(id)
    }
  }
  // remove
  removeItem = (id) => {
    let tempCart = [...this.state.cart]
    tempCart = tempCart.filter(item => item.id !== id)
    this.setState({
      cart: tempCart
    },() => {
      this.addTotals()
      this.syncStorage()
    })
  }

  // clear cart
  clearCart = (id) => {
    localStorage.clear()
    this.setState({
      cart: []
    }, () => {
      this.addTotals()
      this.syncStorage()
    })
  }

  // filter implementation
  handleChange = event => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    }, this.sortData)
  }

  sortData = () => {
    const {storeProducts, price, company, shipping, search} =this.state
    let tempprice = parseInt(price)
    let tempProducts = [...storeProducts]
    // sort by company
    if (company !== 'all') {
      tempProducts = tempProducts.filter(item => (item.company === company))
    }

    // sort by price
    tempProducts = tempProducts.filter(item => (item.price <= tempprice))

    // sort by free shipping
    if (shipping) {
      tempProducts = tempProducts.filter(item => 
        item.freeShipping ===  true)
    }
    // sort by search
    if (search.length > 0) {
      tempProducts = tempProducts.filter(item => {
        let tempSearch = search.toLocaleLowerCase()
        let tempTitle = item.title.toLocaleLowerCase().slice(0, search.length)
        if (tempTitle === tempSearch) {
          return item
        }
      })
    }

    this.setState({
      filteredProducts: tempProducts
    })
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          Sidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addToCart: this.addToCart,
          getSingleProduct: this.getSingleProduct,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
