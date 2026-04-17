// This code implements a functional React form for Saucy Tango, capturing name, phone, address, and order with controlled inputs and a submit handler that alerts on submission.
// Import the hook for the useState
import { useState } from "react";
import styles from "./FoodOrderForm.module.css";

// Create a component function to manage the form
function FoodOrderForm() {
  // Create a state for each piece of information
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    order: "",
  });
  // Create a function to handle the submission of the form
  const handleSubmit = (e) => {
    // Prevent the form from taking its default action. We want to alert the user instead
    e.preventDefault();
    // Alert the user after placing the order
    alert(
      `Order Successful! Your order was ${form.order}. Please show your confirmation number for pickup.`,
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  return (
    <>
      {/* Add a form element */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className = {styles.field}>
        {/* Attach label to each input and use htmlFor attribute to connect the input with its label and improve accesibility */}
        <label htmlFor="name" className = {styles.label}>Name:</label>
        {/* Create inputs for each field info. Add a value attribute and connect it with the state variable. Add an onChange attribute to update the input field and the state variables when the user types */}
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          className = {styles.input}
        />
        </div>
        <div className = {styles.field}>
        <label htmlFor="phone"className = {styles.label}>Phone:</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          className = {styles.input}
        />
        </div>
        <div className = {styles.field}>
        <label htmlFor="address" className = {styles.label}>Address:</label>
        <input
          id="address"
          name="address"
          type="text"
          value={form.address}
          onChange={handleChange}
          className = {styles.input}
        />
        </div>
        <div className = {styles.field}>
        <label htmlFor="order" className = {styles.label}>Order: </label>
        <input
          id="order"
          name="order"
          type="text"
          value={form.order}
          onChange={handleChange}
          className = {styles.input}
        />
        </div>
        {/* Add a button to the form */}
        <button type="submit" className = {styles.button}>Submit Order</button>
      </form>
    </>
  );
}
// Make the component available for use in other files.
export default FoodOrderForm;
