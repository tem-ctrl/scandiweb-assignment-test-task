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
				{label} {mandatory && <span className="required"> *</span>}
			</p>
			<div className="label-body">
				<input {...restProps} ref={ref} className="label-input" />
				<span className="label-body-error">{error}</span>
			</div>
		</label>
	);
});

FormTextInput.displayName = 'FormTextInput';

export default FormTextInput;
