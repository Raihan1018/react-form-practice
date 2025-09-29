import React, { useState } from "react";

const ProductForm = ({ handleAddProduct }) => {
  const [error, setError] = useState("");
  const handleProductSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    // console.log(name, price, quantity);

    if (name.length === 0) {
      setError("Provide the product name");
      return;
    } else if (price.length <= 0) {
      setError("price can not be negative");
      return;
    } else {
      setError("");
    }

    const newProduct = {
      name,
      price,
      quantity,
    };
    handleAddProduct(newProduct);
    e.target.reset();
  };
  return (
    <div>
      <h2>Add a product</h2>
      <form className=" space-y-2.5" onSubmit={handleProductSubmit}>
        <input
          type="text"
          name="name"
          className="input input-secondary"
          placeholder="product name"
        />{" "}
        <br />
        <input
          type="text"
          name="price"
          className="input input-secondary"
          placeholder="product price"
        />{" "}
        <br />
        <input
          className="input input-secondary"
          type="text"
          name="quantity"
          placeholder="product quantity"
        />{" "}
        <br />
        <input className="btn btn-secondary" type="submit" value="Submit" />
      </form>
      <p className="text-red-500">{error}</p>
    </div>
  );
};

export default ProductForm;
