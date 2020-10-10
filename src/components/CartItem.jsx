import React from 'react'
import { removeSVG, plusSVG, minusSVG } from '../utilits'
import Button from './Button'

const CartItem = ({id, name, type, size, totalPrice, totalCount, onRemove, onMinus, onPlus}) => {
    const handleRemoveClick = () =>  {
        onRemove(id)
    }
    const handleMinusItem = () => {
        onMinus(id)
    }

    const handlePlusItem = () => {
        onPlus(id)
    }

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
            <div 
                className="button button--outline button--circle cart__item-count-minus"
                onClick={handleMinusItem}
            >
                {minusSVG}
            </div>
            <b>{totalCount}</b>
            <div 
                className="button button--outline button--circle cart__item-count-plus"
                onClick={handlePlusItem}
            >
                {plusSVG}
            </div>
        </div>
        <div className="cart__item-price">
            <b>{totalPrice} ₽</b>
        </div>
        <div className="cart__item-remove">
            <Button 
                outline
                className="button--circle"
                onClick={handleRemoveClick}
            >
               {removeSVG}
            </Button>
        </div>
    </div>
    )
}

export default CartItem