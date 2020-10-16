import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart, removeCartItem, plusCartItem, minusCartItem } from '../redux/actions/cart'
import { CartItem, Button, EmptyCart, TotalCart } from '../components'
import { cartIconSVG, clearSVG, arrowBackSVG } from '../utilits'
import cartEmptyImage from  '../assets/img/empty-cart.png'
import { Link } from 'react-router-dom'


export const Cart = () => {
  const  dispatch = useDispatch()
  const {items, totalPrice, totalCount} = useSelector(({cart}) => cart)

  const addedPizzas = Object.keys(items).map(key => {
    return items[key].items[0]
  })

  const onClearCart = () => {
    if(window.confirm('Вы действительно хотите очистить корзину?')){
      dispatch(clearCart())
    }
  }

  const onRemoveItem = id => {
    if(window.confirm('Вы действительно хотите удалить эту пиццу?')){
      dispatch(removeCartItem(id))
    }
  }

  const onPlusItem = (id) => {
    dispatch(plusCartItem(id))
  }

  const onMinusItem = (id) => {
    dispatch(minusCartItem(id))
  }

  const onClickOrder = () => {
    console.log('Ваш заказ:', items)
  }

  return (
          <div className="content">
      <div className="container container--cart">
        {
          totalCount ?
          <div className="cart">
            <div className="cart__top">
              <h2 className="content__title">
                {cartIconSVG} Корзина
              </h2>
            <div  
              className="cart__clear"
              onClick={onClearCart} 
            >
              {clearSVG}
              <span>Очистить корзину</span>
            </div>
          </div>
          <div className="content__items">
            {
              addedPizzas.map((obj, index) => 
                <CartItem 
                  key={index} 
                  id={obj.id}
                  name={obj.name} 
                  type={obj.type} 
                  size={obj.size} 
                  imageUrl={obj.imageUrl}
                  totalPrice={items[obj.id].totalPrice}
                  totalCount={items[obj.id].items.length}
                  onRemove={onRemoveItem}
                  onMinus={onMinusItem}
                  onPlus={onPlusItem}
                />
              )
            }
          </div>
          <TotalCart
            totalCount={totalCount}
            totalPrice={totalPrice}
            onClick={onClickOrder}
          />
        </div>
        : <EmptyCart/>
        }
        
      </div>
    </div>
  )
}
