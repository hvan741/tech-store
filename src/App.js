import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import {Switch, Route} from 'react-router-dom'

import About from './pages/AboutPage'
import Cart from './pages/CartPage'
import Contact from './pages/ContactPage'
import Default from './pages/DefaultPage'
import Home from './pages/HomePage'
import Products from './pages/ProductsPage'
import SingleProduct from './pages/SingleProductPage'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Sidecart from './components/Sidecart'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* navbar, sidebar, cart, footer */}
      <Navbar />
      <Sidebar />
      <Sidecart />
      <Switch>
        <Route path="/" exact  component={Home} />
        <Route path="/about" exact  component={About} />
        <Route path="/contact" exact  component={Contact} />
        <Route path="/products" exact  component={Products} />
        <Route path="/products/:id" exact  component={SingleProduct} />
        <Route path="/cart" exact  component={Cart} />
        <Route  component={Default} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
