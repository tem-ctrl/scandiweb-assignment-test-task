import React, { forwardRef, InputHTMLAttributes } from 'react';

interface FormTextInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	className?: string;
	type?: string;
	error?: string;
	mandatory?: boolean;
}

const FormTextInput = forwardRef<HTMLInputElement, FormTextInputProps>((props, ref) => {
	const { label, className, error = '', mandatory, ...restProps } = props;

	return (
		<label className={`${className} label`}>
			<p className="label-text">
				{label} {mandatory && <span className="required">*</span>}
			</p>
			<div className="label-body">
				<input
					{...restProps}
					ref={ref}
					className={`${error ? 'label-input label-input-error' : 'label-input'}`}
				/>
				<p className={`${error ? 'label-body-error' : 'label-body-error-none'}`}>{error}</p>
			</div>
		</label>
	);
});

FormTextInput.displayName = 'FormTextInput';

export default FormTextInput;
