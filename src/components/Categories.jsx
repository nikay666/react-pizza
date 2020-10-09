import React, {  memo } from 'react'
import { ACTIVE_CLASS } from '../utilits'
import propTypes from 'prop-types'


const Categories = memo(({activeCategory, items, onClickCategory}) =>{     

    return (
        <div className="categories">
            <ul>
                <li
                    className={activeCategory  === null ? ACTIVE_CLASS :  null}
                    onClick={() => onClickCategory(null)}
                > Все</li>
                {items && items.map((name, index) => (
                    <li 
                        className={activeCategory  === index ? ACTIVE_CLASS :  null}
                        key={`${name}_${index}`}
                        onClick={() => onClickCategory(index)}
                    >{name}</li>
                ))}
            </ul>
      </div>
    )
})
Categories.propTypes = {
    activeCategory: propTypes.oneOfType([
        propTypes.number,
        propTypes.oneOf([null])
    ]),
    items: propTypes.arrayOf(propTypes.string).isRequired, 
    onClickCategory:  propTypes.func.isRequired
}
Categories.defaultProps =  {
    activeCategory: null, 
    items: [],  
}

export default Categories
