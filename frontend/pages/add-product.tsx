import ProductForm from '../components/form';
import { useRouter } from 'next/router';

const AddProductPage = () => {
  return (
    <div className="container">
      <h1 className="text-center my-4">Product Form</h1>
      <ProductForm />
    </div>
  );
};

export default AddProductPage;
