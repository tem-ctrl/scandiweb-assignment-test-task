import { ProductContext } from '@/app/contexts/ProductContext';
import { useContext } from 'react';

const useProductContext = () => useContext(ProductContext);

export default useProductContext;
