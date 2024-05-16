import React from "react";
import { useProducts } from "./useProducts";
import Product from "./components/product/Product";
import "../porducts/products.scss";
import { Audio } from "react-loader-spinner";

const Products = () => {
  const { productData } = useProducts();

  return (
    <div className="products-wrapper">
      {!productData?.length ? (
        <div className="products-loader">
          <Audio
            height="100"
            width="100"
            radius="9"
            color="#FFCA28"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      ) : (
        <>
          {productData?.map(({ title, id, description, image, price }) => {
            return (
              <Product
                key={id}
                id={id}
                title={title}
                description={description}
                image={image}
                price={price}
              />
            );
          })}
        </>
      )}
    </div>
  );
};
export default Products;
