import React, { useState, useEffect, useRef, memo } from 'react'
import { arrowSVG, ACTIVE_CLASS } from '../utilits'
import propTypes from 'prop-types'

const SortPopup  =  memo(({items  ,activeSortType, onClickSortType})  =>{ 
    const [visiblePopup, setVisiblePopup] = useState(false)
    // const [activeItem, setActiveItem] =  useState(0)
    const sortRef =  useRef(null)
    const  activeLabel = items.find((obj) => obj.type === activeSortType).name


    const handleroutsideClick = (e) => {
        const path = e.path || (e.composedPath && e.composedPath());
        if(!path.includes(sortRef.current)){
            setVisiblePopup(false)
        }
    }

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup)
    }

    const onSelectItem = (type) => {
        onClickSortType(type)
        setVisiblePopup(false)
    }

    useEffect(() => {
        document.body.addEventListener('click', handleroutsideClick)
    }, [])

    return(
        <div className="sort" ref={sortRef}>
        <div className="sort__label">
            <button 
            className={`sort__label-btn ${visiblePopup ? 'rotated' : ''}`}
            >{arrowSVG}</button>
          <b>Сортировка по:</b>
        <span onClick={toggleVisiblePopup}>{activeLabel}</span>
        </div>
        {visiblePopup &&   
            <div className="sort__popup">
            <ul>
                {
                    items && items.map((obj, index) => (
                    <li 
                        key={index}
                        onClick={() => onSelectItem(obj)}
                        className={activeSortType === index ? ACTIVE_CLASS : null}
                     >{obj.name}</li>
                    ))
                }
            </ul>
            </div>
        }
      </div>
    )
})

SortPopup.propTypes = {
    activeSortType: propTypes.string.isRequired,
    items: propTypes.arrayOf(propTypes.object).isRequired, 
    onClickSortType:  propTypes.func.isRequired
}
SortPopup.defaultProps = {
    items:[]
}
export default SortPopup