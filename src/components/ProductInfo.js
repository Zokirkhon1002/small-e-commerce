import React from "react";
import StarsRating from "./StarsRating";

const ProductInfo = ({ info }) => {
  const { title, description, price, colour, features, sizes } = info;
  return (
    <div className="productInfo">
      <h2>{title}</h2>
      <h3>{description}</h3>
      <p className="productInfo__price">{price}</p>
      <StarsRating stars={info.rating} />
      <div className="productInfo__color">
        <span>Color: {colour.name}</span>
        <span
          className="sample"
          style={{ backgroundColor: colour.value }}
        ></span>
      </div>
      <div className="productInfo__features">
          <ul>
              {features.map((i,idx)=> (<li key={idx}>{i}</li>))}
          </ul>
      </div>
      <div className="productInfo__sizes">
            <label>Size</label>
            <select>
                {sizes.map((item,idx)=> (<option key={idx} value={item}>{item}</option>))}
            </select>
      </div>
      <div className="productInfo__addToCart">
            <button>Add To Kart</button>
      </div>
    </div>
  );
};

export default ProductInfo;
