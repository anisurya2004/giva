"use client";  // Ensure this is a client-side component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

type SearchBarProps = {
  onSearch: (query: string) => void;
  onReset: () => void;  // For resetting the search and showing all items
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onReset }) => {
  const [query, setQuery] = useState('');
  const router = useRouter(); // Initialize useRouter for navigation

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleHomeClick = () => {
    setQuery('');  // Clear the search input
    onReset();     // Reset the product list
  };

  const handleAddClick = () => {
    router.push('/add-product'); // Navigate to the add-product page
  };

  return (
    <form className="d-flex justify-content-center align-items-center mb-4" onSubmit={handleSearch}>
      {/* Add Button */}
      <button type="button" className="btn btn-primary me-2" onClick={handleAddClick}>
        <i className="fas fa-plus"></i> {/* FontAwesome Plus icon */}
      </button>
      
      {/* Home Button */}
      <button type="button" className="btn btn-outline-secondary me-2" onClick={handleHomeClick}>
        <i className="fas fa-home"></i> {/* FontAwesome home icon */}
      </button>

      {/* Search Input */}
      <input
        type="text"
        className="form-control w-50 rounded shadow-sm"
        placeholder="Search for products..."
        value={query}
        onChange={handleInputChange}
      />

      {/* Search Button */}
      <button type="submit" className="btn btn-primary ms-2">Search</button>
    </form>
  );
};

export default SearchBar;
