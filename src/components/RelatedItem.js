import React from 'react'
import StarsRating from './StarsRating';
const RelatedItem = ({product}) => {
    return (
        <div className="productSummary">
            <div className="productSummary__imageWrapper">
                <img src={product.img} alt={product.title} />
            </div>
            <p className="productSummary__title">{product.title}</p>
            <p className="productSummary__productCode">{product.productCode}</p>
            <StarsRating stars={product.stars} />
            <p className="productSummary__price">{product.price}</p>
        </div>
    )
}

export default RelatedItem
