import React, { useState } from 'react'
import  classNames  from 'classnames'
import propTypes from 'prop-types'
import Button from '../Button'
import { plusSVG } from '../../utilits'


const PizzaCard = ({id, name ,imageUrl, price, types, sizes, onClickAddPizza, addedCount}) => {
    const availableNames = ['тонкое', 'традиционное']
    const availableSize = [26, 30, 40]
    const [activeType, setActiveType] =  useState(types[0])
    const [activeSize, setActiveSize] =  useState(0)

    const onSelectType = (index) => {
        setActiveType(index)
    }
    const onSelectSize = (size) => {
        setActiveSize(size)
    }

    const onAddPizza = () => {
        const  obj  = {
            id, 
            name, 
            imageUrl, 
            price,
            size: availableSize[activeSize],
            type: availableNames[activeType],
        }
        onClickAddPizza(obj)
    }


    return (
        <div className="pizza-block">
            <img
            className="pizza-block__image"
            src={imageUrl}
            alt={`Пицца ${name}`}
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {availableNames.map((type, index)  => (
                         <li 
                            key={`li-${index}`}
                            onClick={() => onSelectType(index)}
                            className={classNames({
                                active: activeType  === index,
                                disabled: !types.includes(index)
                            })}
                        >{type}</li>
                    ))}
                </ul>
                <ul>
                    {availableSize.map((size, index)  => (
                         <li 
                            key={`li-${index}`}
                            onClick={() => onSelectSize(index)}
                            className={classNames({
                                active: activeSize === index,
                                disabled: !sizes.includes(size)
                            })}
                        >{size} см</li>
                    ))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <Button className="button--add" outline onClick={onAddPizza} >
                    {plusSVG}
                    <span>Добавить</span>
                    {
                        addedCount && <i>{addedCount}</i>
                    }
                </Button>
            </div>
        </div> 
    )
}

PizzaCard.propTypes = {
    name: propTypes.string,
    imageUrl: propTypes.string,
    price: propTypes.number,
    types: propTypes.arrayOf(propTypes.number).isRequired,
    sizes: propTypes.arrayOf(propTypes.number).isRequired,
    onAddPizza: propTypes.func,
    addedCount: propTypes.number,
}
PizzaCard.defaultProps =  {
    name:  'Название пиццы',
    imageUrl:  '/',
    price: 999,
    types: [],
    sizes: [],
}

export default PizzaCard