import ProductForm from '../components/form';
import { useRouter } from 'next/router';

const AddProductPage = () => {
  const router = useRouter();
  const { id, name: initialName, description: initialDescription, price: initialPrice, quantity: initialQuantity } = router.query;
  return (
    <div className="container">
      <h1 className="text-center my-4">{id ? 'Edit Product' : 'Add New Product'}</h1>
      <ProductForm />
    </div>
  );
};

export default AddProductPage;
