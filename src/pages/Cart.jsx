import React from 'react'
import { CartItem } from '../components'
import { cartIconSVG, clearSVG, arrowBackSVG } from '../utilits'
import { useSelector } from 'react-redux'


export const Cart = () => {
    const {items, totalPrice, totalCount} = useSelector(({cart}) => cart)

    const addedPizzas = Object.keys(items).map(key => {
      return items[key][0]
    })



    return (
           <div className="content">
        <div className="container container--cart">
          <div className="cart">
            <div className="cart__top">
              <h2 className="content__title">
                   {cartIconSVG}
                Корзина</h2>
              <div className="cart__clear">
                {clearSVG}
                <span>Очистить корзину</span>
              </div>
            </div>
            <div className="content__items">
              {
                addedPizzas.map(obj => <CartItem name={obj.name} type={obj.type} size={obj.size} /> )
              }
              {/* <CartItem
                name="Пепперони"
                type="тонкое"
                size={26}
              /> */}
            </div>
            <div className="cart__bottom">
              <div className="cart__bottom-details">
                <span> Всего пицц: <b>{totalCount} шт.</b> </span>
                <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
              </div>
              <div className="cart__bottom-buttons">
                <a href="/" className="button button--outline button--add go-back-btn">
                {arrowBackSVG}
                  <span>Вернуться назад</span>
                </a>
                <div className="button pay-btn">
                  <span>Оплатить сейчас</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
