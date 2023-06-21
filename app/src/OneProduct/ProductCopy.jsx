import classes from "./Product.module.css";

export const ProductCopy = ({ title, price, images, description }) => {
  return (
    <div className={classes.container}>
      <h1>{title}</h1>
      <img className={classes.image} src={images} alt={title} />
      <p className={classes.description}>{description}</p>
      <span>{price}</span>
    </div>
  );
};