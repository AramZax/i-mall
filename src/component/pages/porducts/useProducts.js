import { useEffect, useState } from "react";

export const useProducts = () => {
  const [productsLimit, setProductLimit] = useState(20);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${productsLimit}`)
      .then((response) => response.json())
      .then((json) => setProductData(json))
      .catch((error) => console.log(error));
  }, []);
  return {productData};
};
