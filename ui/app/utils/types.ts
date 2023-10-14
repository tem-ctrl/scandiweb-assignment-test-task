export type ProductType = 'book' | 'dvd' | 'furniture';

export interface Product {
	sku: string;
	name: string;
	price: number;
	type: ProductType;
	size?: number;
	weight?: number;
	width?: number;
	height?: number;
	length?: number;
}

export type ProductProperty = 'size' | 'weight' | 'dimensions' | 'width' | 'height' | 'length';

export type SKUInitials = 'JVC' | 'GGW' | 'TR1';

export type ProductProperties = {
	property: ProductProperty;
	attributes: ProductProperty[];
	skuInitials: SKUInitials;
	cardLabel: string[];
};

export type FooterLink = {
	href: string;
	icon: React.ReactNode;
};

export interface ProductCard extends Product {
	property: string;
}