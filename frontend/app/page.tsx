"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import ProductCard from '../components/ProductCard';
import ProductHeader from '../components/ProductHeader';
import SearchBar from '../components/SearchBar';
import { backend_url } from "../config.js";

const HomePage = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]); // Original product list from the API
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered product list

  // Fetch products from the backend API when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await fetch(`${backend_url}/api/`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data); // Initialize filtered products with the fetched data
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Function to handle delete
  const handleDelete = async (id: number) => {
    try {
      console.log(`Attempting to delete product with ID: ${id}`); // Debug log
      const response = await fetch(`${backend_url}/api/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Failed to delete the product. Status: ${response.status}`);
      }

      // Update the product lists after successful deletion
      setProducts(products.filter((product) => product.id !== id));
      setFilteredProducts(filteredProducts.filter((product) => product.id !== id));
      console.log(`Product with ID ${id} deleted successfully`);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // Function to handle edit
  const handleEdit = (product) => {
    // Navigate to the edit page with query parameters
    const query = new URLSearchParams({
      id: product.id.toString(),
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      quantity: product.quantity.toString(),
    }).toString();

    router.push(`/add-product?${query}`);
  };

  // Function to handle search
  const handleSearch = (query: string) => {
    const searchQuery = query.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery)
    );
    setFilteredProducts(filtered);
  };

  // Function to reset search and show all products
  const handleReset = () => {
    setFilteredProducts(products); // Reset to show all products
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <ProductHeader totalProducts={filteredProducts.length} />
      </div>

      <SearchBar onSearch={handleSearch} onReset={handleReset} />
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-md-4">
              <ProductCard
                product={product}
                onDelete={() => handleDelete(product.id)}
                onEdit={() => handleEdit(product)} // Pass the product to handleEdit
              />
            </div>
          ))
        ) : (
          <p className="text-center mt-4">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
