'use client';

import { createContext } from 'react';
import { ToDeleteListType, ProductToDelete } from '@/app/utils/types';

type ProductContextType = {
	toDeleteList: ToDeleteListType;
	addToDeleteList: (product: ProductToDelete) => void;
	removeFromDeleteList: (product: ProductToDelete) => void;
	massDelete: () => void;
};

export const defaultDeleteList: ToDeleteListType = {
	dvd: [],
	book: [],
	furniture: [],
};

const ProductContext = createContext<ProductContextType>({
	addToDeleteList: (_: ProductToDelete) => {},
	removeFromDeleteList: (_: ProductToDelete) => {},
	massDelete: () => {},
	toDeleteList: defaultDeleteList,
});


export default ProductContext;
