import AddProductForm from '@/app/components/AddProductForm';
import { Metadata, NextPage } from 'next';

const AddProductPage: NextPage = () => {
	return (
		<main className="main addproduct">
			<AddProductForm />
		</main>
	);
};

export default AddProductPage;

export const metadata: Metadata = {
	title: 'Add Product - Scandiweb Assigntment Test',
	description: `On this page we can add three different types of products: Books,
  Furnitures or DVD sharing some common characteristics (name, SKU, price) but
  each category having it specific characteristics, (size for DVDs, weight for Books
  and Height, Width and Length for Furnitures). The form is dynamic thus changes according
  to the chosen type of product. The form management and validation are handled using 
  react-hook-form and yup resolver. 
  `,
};
