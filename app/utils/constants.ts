import { ProdoductType, ProductProperties } from '@/app/utils/types';

export const PROPERTY_MAP: Record<ProdoductType, ProductProperties> = {
	dvd: {
		property: 'size',
		attributes: ['size'],
		skuInitials: 'JVC',
		cardLabel: ['Size:', '(MB)'],
	},
	book: {
		property: 'weight',
		attributes: ['weight'],
		skuInitials: 'GGW',
		cardLabel: ['Weight:', '(KG)'],
	},
	furniture: {
		property: 'dimensions',
		attributes: ['height', 'width', 'length'],
		skuInitials: 'TR1',
		cardLabel: ['Dimension:', ''],
	},
};
