import { useContext } from 'react';
import ProductContext from '@/app/contexts/ProductContext';

const useProductContext = () => useContext(ProductContext);

export default useProductContext;
