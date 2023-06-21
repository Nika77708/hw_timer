import React, { useState, useEffect } from "react";
import classes from "./OneProduct.module.css";
import { ProductCopy } from "./ProductCopy";

export default function OneProduct() {
  const [oneProduct, setOneProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetch(`https://api.escuelajs.co/api/v1/products/1`);
        const response = await data.json();
        setOneProduct(response);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const {id, title, price, images, description} = oneProduct
//   console.log(images);

  return (
    <div className={classes.productList}>
      
      {loading ? (<h1>Loading</h1>) : <ProductCopy key={id} title={title} price={price} images={images} description={description} />}
      {error ? <h1>An error occurred: {error.message}</h1> : null}
    </div>
  );
}

