import React from 'react'

const ProductImage = ({imgUrl}) => {
    return (
        <div className="mainImage">
            <img src={imgUrl} alt={imgUrl} />
        </div>
    )
}

export default ProductImage
