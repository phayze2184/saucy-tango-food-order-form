// Import the CSS module so each part of the card can use scoped styles.
import styles from "./FoodItem.module.css";

// Render a single food item card using the name, price, and image passed in as props.
const FoodItem = ({ name, price, imgSrc }) => {
  return (
    <div className={styles.card}>
      {/* Display the food image inside its own wrapper for layout/styling control. */}
      <div className={styles.imageWrapper}>
        <img src={imgSrc} alt="" className={styles.image} />
      </div>
      {/* Show the text details for the food item. */}
      <div className={styles.detailsWrapper}>
        <h3>{name}</h3>
        <p className={styles.details}>{`Price: ${`${price}`}`}</p>
      </div>
    </div>
  );
};

// Make the component available for use in other files.
export default FoodItem;
