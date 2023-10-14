import { Product, ProductCard } from '@/app/utils/types';

/**
 * Prepare received data for displaying on the hompage
 * @param {Product} data data received from API
 * @returns {Object} prepared data
 */
export const prepareData = (data: Product): ProductCard => {
	// let newData = Object.fromEntries(
	//   Object.entries(data).filter(elt => FIXED_ATTRIBUTES.includes(elt[0]))
	// )
	let propertyMap = {
		dvd: String(data['size']),
		book: String(data['weight']),
		furniture: `${String(data['height'])}x${String(data['width'])}x${String(data['length'])}`,
	};

	// data['property'] = propertyMap[data.type]

	return { ...data, property: propertyMap[data.type] };
};
