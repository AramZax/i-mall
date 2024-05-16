import React from "react";
import "../product/product.scss";
import { useDispatch } from "react-redux";
import { increment } from "../../../../../store/features/counter/counterSlice";
import { incrementBasket } from "../../../../../store/features/basket/basketSlice";

const Product = ({ id, price, description, title, image }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-warpper">
      <div className="product-title">
        <h4>{title}</h4>
      </div>
      <div className="product-img-section">
        <img src={image} alt="..." />
      </div>
      <div className="product-price-section">
        <span> Price {price}$</span>
      </div>
      <div className="product-buy-like-section">
        <button
          onClick={() =>
            dispatch(
              incrementBasket({
                id: id,
                image: image,
                description: description,
                price: price,
                title: title,
              })
            )
          }
        >
          buy product
        </button>
        <button
          onClick={() =>
            dispatch(
              increment({
                payload: id,
                image: image,
                description: description,
                price: price,
                title: title,
              })
            )
          }
        >
          Like product
        </button>
      </div>
    </div>
  );
};
export default Product;
