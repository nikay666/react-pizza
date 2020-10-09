import React from 'react'
import { removeSVG, plusSVG, minusSVG } from '../utilits'

const CartItem = ({name, type, size}) => {
    return (
        
    <div className="cart__item">
        <div className="cart__item-img">
            <img
            className="pizza-block__image"
            src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
            alt="Pizza"
            />
        </div>
        <div className="cart__item-info">
            <h3>{name}</h3>
            <p>{type} тесто, {size} см.</p>
        </div>
        <div className="cart__item-count">
            <div className="button button--outline button--circle cart__item-count-minus">
                {minusSVG}
            </div>
            <b>2</b>
            <div className="button button--outline button--circle cart__item-count-plus">
                {plusSVG}
            </div>
        </div>
        <div className="cart__item-price">
            <b>770 ₽</b>
        </div>
        <div className="cart__item-remove">
            <div className="button button--outline button--circle">
               {removeSVG}
            </div>
        </div>
    </div>
    )
}

export default CartItem