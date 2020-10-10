import React, { useCallback, useEffect } from 'react'
import { Categories, SortPopup, PizzaCard, PizzaCardLoading } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory, setSortBy } from '../redux/actions/filters'
import { categories, categoriesSort } from '../utilits'
import { fetchPizzas } from '../redux/actions/pizzas'
import { addPizzaToCart } from '../redux/actions/cart'


const Home = () => {
  const dispatch = useDispatch()
  const items = useSelector(({pizzas}) => pizzas.items)
  const cartItems = useSelector(({cart}) => cart.items)
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
  const { category, sortBy } = useSelector(({filters}) => filters)


  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category))
     // eslint-disable-next-line
  }, [category, sortBy])

  const onSelectCategory = useCallback((index) => { 
    dispatch(setCategory(index))
    // eslint-disable-next-line
  }, []) 
    
  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type))
     // eslint-disable-next-line
  }, [])

  const handleAddPizzaToCart = (obj) =>  {
    dispatch(addPizzaToCart(obj))
  }

  return (
      <div className="container">
        <div className="content__top">
          <Categories 
            onClickCategory={onSelectCategory}
            items={categories}
            activeCategory={category}
          />
          <SortPopup 
            items={categoriesSort}
            onClickSortType={onSelectSortType}
            activeSortType={sortBy.type}
          /> 
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
             isLoaded ? items.map((item, index) =>  (
              <PizzaCard 
                onClickAddPizza={handleAddPizzaToCart}
                key={`item-${index}`} 
                addedCount={ cartItems[item.id] && cartItems[item.id].items.length}
                {...item}
              />
            ))
            : Array(12)
              .fill(0)
              .map((_, index) => <PizzaCardLoading key={`id-${index}`}/>) 
          }
        </div>
      </div>
  )
}

export default Home