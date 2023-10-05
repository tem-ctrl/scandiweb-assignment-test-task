import { PROPERTY_MAP } from '@/app/utils/constants';
import { ProdoductType } from '@/app/utils/types';
import React, { forwardRef, SelectHTMLAttributes } from 'react';

interface SelectProductTypeProps extends SelectHTMLAttributes<HTMLSelectElement> {
	label?: string;
	className?: string;
	labels?: any[];
	productType?: ProdoductType;
}

const SelectProductType = forwardRef<HTMLSelectElement, SelectProductTypeProps>((props, ref) => {
	const { label = 'Type Switcher:', className, productType = 'dvd', ...restProps } = props;

	return (
		<>
			<label className={`${className} label`}>
				<span className="label-text">{label}</span>
				<div className="label-body">
					<select id="productType" className="label-input" {...restProps} ref={ref}>
						<option value="DVD" id="DVD">
							DVD
						</option>
						<option value="Book" id="Book">
							Book
						</option>
						<option value="Furniture" id="Furniture">
							Furniture
						</option>
					</select>
					<span className="label-body-desc special">{`Please, provide ${PROPERTY_MAP[productType].property}`}</span>
				</div>
			</label>
		</>
	);
});

SelectProductType.displayName = 'SelectProductType';

export default SelectProductType;
