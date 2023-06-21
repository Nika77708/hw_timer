import React, { useState, useEffect } from "react";
import classes from "./ItemList.module.css";
import { Product } from "./Product";

export default function ItemList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetch(`https://api.escuelajs.co/api/v1/products?limit=7&offset=1`);
        const response = await data.json();
        setProducts(response);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={classes.productList}>
      
      {loading ? (<h1>Loading</h1>) : (products.map((el) => (<Product key={el.id} image={el.images} {...el} />))
      )}
      {error ? <h1>An error occurred: {error.message}</h1> : null}
    </div>
  );
}
