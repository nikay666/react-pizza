import React from 'react'
import ContentLoader from 'react-content-loader'

const PizzaCardLoading = () => {
    return(
        <ContentLoader 
        className="pizza-block"
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="139" cy="119" r="120" /> 
            <rect x="0" y="258" rx="4" ry="4" width="280" height="20" /> 
            <rect x="0" y="288" rx="6" ry="6" width="280" height="84" /> 
            <rect x="0" y="405" rx="4" ry="4" width="97" height="24" /> 
            <rect x="146" y="392" rx="25" ry="25" width="132" height="42" />
      </ContentLoader>
    )
}

export default PizzaCardLoading
