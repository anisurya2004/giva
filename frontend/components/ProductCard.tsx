import React from 'react';

type ProductProps = {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
  };
  onDelete: () => void;
  onEdit: () => void;
};

const ProductCard: React.FC<ProductProps> = ({ product, onDelete, onEdit }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Quantity: {product.quantity}</p>
        <button onClick={onEdit} className="btn btn-primary me-2">
          Edit
        </button>
        <button onClick={onDelete} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

