import { ProductType, ProductProperties } from '@/app/utils/types';
import { toast } from 'react-toastify';

export const FIXED_ATTRIBUTES = ['sku', 'name', 'price', 'type'];

export const PROPERTY_MAP: Record<ProductType, ProductProperties> = {
	dvd: {
		property: 'size',
		attributes: ['size'],
		skuInitials: 'JVC',
		cardLabel: ['Size:', ' MB'],
	},
	book: {
		property: 'weight',
		attributes: ['weight'],
		skuInitials: 'GGW',
		cardLabel: ['Weight:', 'KG'],
	},
	furniture: {
		property: 'dimensions',
		attributes: ['height', 'width', 'length'],
		skuInitials: 'TR1',
		cardLabel: ['Dimension:', ''],
	},
};

export const ERRORS = {
	required: 'Please submit required data',
	type: 'Please provide the data of indicated type',
};

export const TOAST_OPTIONS = {
	type: toast.TYPE.ERROR,
	position: toast.POSITION.TOP_CENTER,
	pauseOnFocusLoss: false,
};
