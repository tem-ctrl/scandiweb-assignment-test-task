// 'use client'

import FormTextInput from '@/app/components/common/FomTextInput';
import SelectProductType from '@/app/components/common/SelectProductType';
import { Metadata, NextPage } from 'next';
// import { useState } from 'react';

const AddProductPage: NextPage = () => {
	// const [productType, setProductType] = useState('dvd');

	return (
		<main className="main addproduct">
			<form id="product_form">
				<p className="required">All fields are required !</p>
				<FormTextInput label="SKU" placeholder="Enter product SKU" mandatory />
				<FormTextInput label="Name" placeholder="Enter product name" mandatory />
				<FormTextInput label="Price ($)" placeholder="Enter product price" mandatory step="any" />
				<SelectProductType
				// onChange={(e) => setProductType(e.target.value.toLocaleLowerCase())}
				/>
			</form>
		</main>
	);
};

export default AddProductPage;

export const metadata: Metadata = {
	title: 'Add Product - Scandiweb Assigntment Test',
	description: `On this page we can add three different ttypes of products: Books,
  Furnitures or DVD sharing some common characteristics (name, SKU, price) but
  each category having it specific characteristics, (size for DVDs, weight for Books
  and Height, Width and Length for Furnitures). The form is dynamic thus changes according
  to the chosen type of product. The form management and validation are handled using 
  react-hook-form and yup resolver. 
  `,
};
