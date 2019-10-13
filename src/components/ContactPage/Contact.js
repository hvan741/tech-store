import React from 'react'
import Title from '../Title'

function Contact() {
    return (
        <section>
            <Title title='Contact us' center />
            <div className="py-5 col-10 mx-auto col-md-6 my-3 text-capitalize text-muted">
                <form action="https://formspree.io/hvan202@mail.ru" method='POST'>
                    {/* first */}
                    <div className='form-group'>
                        <label htmlFor="firstName">enter your name</label>
                        <input
                            name='firstName'
                            type="text"
                            className='form-control'
                            id='firstName'
                            placeholder='Adom Smit'
                        />
                    </div>
                    {/* second */}
                    <div className='form-group'>
                        <label htmlFor="message">enter email</label>
                        <input
                            name='email'
                            type="email"
                            className='form-control'
                            id='email'
                            placeholder='exmaple@mail.com'
                        />
                    </div>
                    {/* third */}
                    <textarea
                        name='message'
                        rows='5'
                        className='form-control'
                        id='message'
                        placeholder='Hello there buddy'
                    />
                    <input type='submit' value='Send'
                    className='form-control bg-primary text-white'/>
                </form>
            </div>
        </section>
    )
}

export default Contact
