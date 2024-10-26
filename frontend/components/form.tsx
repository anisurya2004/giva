"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { backend_url } from '@/config';

const ProductForm: React.FC = () => {
  const router = useRouter();
  const { id, name: initialName, description: initialDescription, price: initialPrice, quantity: initialQuantity } = router.query;

  const [name, setName] = useState(initialName || '');
  const [description, setDescription] = useState(initialDescription || '');
  const [price, setPrice] = useState<number | ''>(initialPrice ? Number(initialPrice) : '');
  const [quantity, setQuantity] = useState<number | ''>(initialQuantity ? Number(initialQuantity) : '');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    // Check if there is an ID, which means we're editing
    if (id) {
      setName(initialName || '');
      setDescription(initialDescription || '');
      setPrice(initialPrice ? Number(initialPrice) : '');
      setQuantity(initialQuantity ? Number(initialQuantity) : '');
    }
  }, [id, initialName, initialDescription, initialPrice, initialQuantity]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatusMessage(null);

    const productData = { name, description, price: Number(price), quantity: Number(quantity) };

    try {
      const response = await fetch(`${backend_url}/api/${id ? id : ''}`, {
        method: id ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        setStatusMessage(id ? 'Product updated successfully!' : 'Product added successfully!');
        setName('');
        setDescription('');
        setPrice('');
        setQuantity('');
        router.push('/'); // Redirect back to the HomePage
      } else {
        setStatusMessage('Failed to save product. Please try again.');
      }
    } catch (error) {
      console.error('Error saving product:', error);
      setStatusMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="product-form">
      <h2>{id ? 'Edit Product' : 'Add New Product'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Product Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Product Description:</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary mt-3">{id ? 'Update Product' : 'Add Product'}</button>
      </form>
      {statusMessage && <p className="status-message mt-3">{statusMessage}</p>}
    </div>
  );
};

export default ProductForm;
