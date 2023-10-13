'use client';

import React, { ReactNode, createContext, useMemo, useState } from 'react';
import { API } from '@/app/config/api';
import { Product, ProductType } from '@/app/utils/types';
import axios from 'axios';
import useSWR from 'swr';

type toDeleteListType = Record<ProductType, string[]>;
type ProductToDelete = {
	type: ProductType;
	sku: string;
};
type ProductContextType = {
	toDeleteList: toDeleteListType;
	addToDeleteList: (product: ProductToDelete) => void;
	removeFromDeleteList: (product: ProductToDelete) => void;
	massDelete: () => void;
};

const defaultDeleteList: toDeleteListType = {
	dvd: [],
	book: [],
	furniture: [],
};

export const ProductContext = createContext<ProductContextType>({
	addToDeleteList: (_: ProductToDelete) => {},
	removeFromDeleteList: (_: ProductToDelete) => {},
	massDelete: () => {},
	toDeleteList: defaultDeleteList,
});

const ProductProvider = ({ children }: { children: ReactNode }): ReactNode => {
	const [toDeleteList, settoDeleteList] = useState<toDeleteListType>(defaultDeleteList);

	const { mutate: refreshData } = useSWR<Product[]>(API.getProducts);

	const addToDeleteList = (product: ProductToDelete) => {
		let type = product.type;

		if (type === 'dvd') {
			settoDeleteList({ ...toDeleteList, dvd: toDeleteList[type].concat(product.sku) });
		} else if (type === 'book') {
			settoDeleteList({ ...toDeleteList, book: toDeleteList[type].concat(product.sku) });
		} else {
			settoDeleteList({ ...toDeleteList, furniture: toDeleteList[type].concat(product.sku) });
		}
	};

	const removeFromDeleteList = (product: ProductToDelete) => {
		let type = product.type;

		if (type === 'dvd') {
			settoDeleteList({
				...toDeleteList,
				dvd: toDeleteList.dvd.filter((item) => item !== product.sku),
			});
		} else if (type === 'book') {
			settoDeleteList({
				...toDeleteList,
				book: toDeleteList.book.filter((item) => item !== product.sku),
			});
		} else {
			settoDeleteList({
				...toDeleteList,
				furniture: toDeleteList.furniture.filter((item) => item !== product.sku),
			});
		}
	};

	const massDelete = () => {
		// let delList = getSelected()

		if (!toDeleteList.dvd.length && !toDeleteList.book.length && !toDeleteList.furniture.length)
			return;

		axios
			.post(
				API.massDelete,
				{ ...toDeleteList },
				{
					headers: { 'Content-Type': 'multipart/form-data' },
				}
			)
			.then(() => {
				refreshData();
				console.info('Product(s) deleted successfully !!!');
			})
			.catch((err) => {
				console.error("Couldn't delete selected data:", err);
			});
	};

	const memoedValue = useMemo(
		() => ({
			addToDeleteList,
			massDelete,
			removeFromDeleteList,
			toDeleteList,
		}),
		[toDeleteList]
	);

	return <ProductContext.Provider value={memoedValue}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
