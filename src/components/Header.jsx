import React  from  'react'
import logoSVG from '../assets/img/pizza-logo.svg'
import Button from './Button'
import { cartSVG } from '../utilits'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {

  const {totalCount, totalPrice } = useSelector(({cart}) => cart)

    return(
        <div className="header">
        <div className="container">
          <Link to="/">
            <div className="header__logo">
              <img width="38" src={logoSVG} alt="Pizza logo" />
              <div>
                <h1>React Pizza</h1>
                <p>самая вкусная пицца во вселенной</p>
              </div>
            </div>
          </Link>
          <div className="header__cart">
            <Link to="/cart" >
              <Button className='button--cart'>
    <span>{totalPrice} ₽</span>
                  <div className="button__delimiter"></div>
                    {cartSVG}
    <span>{totalCount}</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
}

export default Header