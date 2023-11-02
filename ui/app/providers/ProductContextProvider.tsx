'use client';

import React, { ReactNode, useMemo, useState } from 'react';
import { API } from '@/app/config/api';
import axios from 'axios';
import useSWR from 'swr';
import ProductContext, { defaultDeleteList } from '@/app/contexts/ProductContext';
import { Product, ToDeleteListType, ProductToDelete } from '@/app/utils/types';

const ProductContextProvider = ({ children }: { children: ReactNode }): ReactNode => {
	const [toDeleteList, setToDeleteList] = useState<ToDeleteListType>(defaultDeleteList);

	const { mutate: refreshData } = useSWR<Product[]>(API.getProducts);

  const toDeleteListIsEmpty = (): boolean => {
    return !(toDeleteList.dvd.length || toDeleteList.book.length || toDeleteList.furniture.length)
  }

  // deep copy
  const copyDeleteList = (): ToDeleteListType => JSON.parse(JSON.stringify(toDeleteList));

	const addToDeleteList = (product: ProductToDelete) => {
    let newToDeleteList = copyDeleteList();

    newToDeleteList[product.type].push(product.sku);
    setToDeleteList(newToDeleteList);
	};

	const removeFromDeleteList = (product: ProductToDelete) => {
		let type = product.type;
    let newToDeleteList = copyDeleteList();

    newToDeleteList[type] = newToDeleteList[type].filter(sku => sku !== product.sku);
    setToDeleteList(newToDeleteList);
	};

	const massDelete = () => {
		if (toDeleteListIsEmpty()) return;

		axios
			.post(
				API.massDelete, toDeleteList,
				{
					headers: { 'Content-Type': 'multipart/form-data' },
				}
			)
			.then(() => {
				refreshData();
        setToDeleteList(defaultDeleteList);
				console.info('Product(s) deleted successfully !!!');
			})
			.catch((err) => {
				console.error("Couldn't delete selected data:", err.message);
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

export default ProductContextProvider;
