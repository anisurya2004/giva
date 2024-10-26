import React from 'react';

type ProductHeaderProps = {
  totalProducts: number;
};

const ProductHeader: React.FC<ProductHeaderProps> = ({ totalProducts }) => {
  return (
    <div className="custom-header-bg text-center py-4 mb-4 mx-auto" style={{ maxWidth: '600px' }}>
      <h1 className="header-title">Products Database</h1>
      <p className="header-subtitle">{totalProducts.toLocaleString()} Products</p>
    </div>
  );
};

export default ProductHeader;

