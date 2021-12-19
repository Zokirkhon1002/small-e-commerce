import React from 'react'
import RelatedItem from './RelatedItem'

const RelatedItems = ({items}) => {
    
    return (
        <div>
            <h2> Customer Who Bought This Item Also Bought...</h2>
            <div className="relatedProducts">
                {items.map(i=> (<RelatedItem key={i.productCode} product={i} />))}
            </div>
        </div>
    )
}

export default RelatedItems
