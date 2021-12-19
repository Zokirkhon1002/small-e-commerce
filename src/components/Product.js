import React from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import RelatedItems from "./RelatedItems";

const Product = ({ productInfo }) => {
  const { title, description, price, rating, colour, features, sizes } =
    productInfo;
  const productInfoData = {
    title,
    description,
    price,
    rating,
    colour,
    features,
    sizes,
  };

  const { mainImage, relatedProducts } = productInfo;

  return (
    <div className="product">
      {productInfo && (
        <div>
          <div className="product__main">
              <ProductImage imgUrl={mainImage} />
              <ProductInfo info={productInfoData} />

          </div>
          <div className="product__relatedItems">
              <RelatedItems items={relatedProducts} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
