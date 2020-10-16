import React from 'react'
import { arrowBackSVG } from '../utilits'
import { Link } from 'react-router-dom'
import Button from './Button'

const TotalCart = ({totalCount, totalPrice, onClick}) => {

    const onClickOrder = ()  => {
        onClick()
    } 

    return (
        <div className="cart__bottom">
            <div className="cart__bottom-details">
              <span> Всего пицц: <b>{totalCount} шт.</b> </span>
              <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
            </div>
            <div className="cart__bottom-buttons">
              <Link to="/" className="button button--outline button--add go-back-btn">
              {arrowBackSVG}
                <span>Вернуться назад</span>
              </Link>
              <Button className="pay-btn" onClick={onClickOrder}>
                <span>Оплатить сейчас</span>
              </Button>
            </div>
          </div>
    )
}

export default TotalCart
