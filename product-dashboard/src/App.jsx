// Task 2: Create the App Component

import React, { useState } from "react";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";

const App = () => {
  // Manage products state with useState
  const [products, setProducts] = useState([
    { id: 1, name: "Phone", price: 299.99, description: "Phones for sale" },
    { id: 2, name: "Laptop", price: 499.99, description: "Laptops for sale" },
    { id: 3, name: "Speaker", price: 199.99, description: "Speakers for sale" },
  ]);

  // Task 7: Pass Data Between Components
  // Function to add a new product
  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={products} />
      <AddProductForm addProduct={addProduct} />
    </div>
  );
};

export default App;
