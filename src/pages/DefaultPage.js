import React from 'react'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import defaultBcg from '../images/defaultBcg.jpeg'

function Default() {
    return (
        <Hero max='true' title='404' img={defaultBcg}>
            <h2 className='text-uppercase'>page not found</h2>
            <Link to='/' className='main-link'
            style={{marginTop: '1.5rem'}}>
                return home
            </Link>
        </Hero>
    )
}

export default Default
