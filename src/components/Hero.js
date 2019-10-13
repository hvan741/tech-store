import React from 'react'
import styled from 'styled-components'
import mainBcg from '../images/mainBcg.jpeg'

export default function Hero({children, title, max, img}) {
    return (
        <HeroWrapper max={max} img={img}>
            <div className="banner">
                <h1 className='title'>{title}</h1>
                {children} 
            </div>
        </HeroWrapper>
    )
}

const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: ${props => (props.max ? '100vh' : '60vh')};
  color: var(--mainWhite);
  background: linear-gradient(var(--primaryRGBA),var(--primaryRGBA)),
  url(${props => props.img})
  center/cover
  no-repeat;
  .title {
      text-transform: uppercase;
      letter-spacing: var(--mainSpacing);
      font-size: 3.5rem;
      padding-top: 2rem;
      text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
  }
`
HeroWrapper.defaultProps = {
 img: mainBcg
}

