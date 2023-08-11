import { useState } from 'react';

export const FormText = ({
	label,
	placeholder,
	outputValue,
	keyName,
	noOfLines,
}) => {
	const [input, setInput] = useState('');
	const handleChange = (value) => {
		setInput(value);
		outputValue({ [keyName]: value });
	};

	return (
		<div
			className={
				noOfLines > 1 ? 'form-parent-component-box' : 'form-parent-component'
			}
		>
			<label className="form-title-component" htmlFor={keyName}>
				{label}
			</label>
			<div className="form-text-component">
				{noOfLines > 1 ? (
					<textarea
						id={keyName}
						name={keyName}
						type="text"
						rows="6"
						cols="106"
						placeholder={placeholder}
						className="input-discription"
						value={input}
						onChange={(e) => handleChange(e.target.value)}
					></textarea>
				) : (
					<input
						id={keyName}
						name={keyName}
						type="text"
						rows="1"
						cols="210"
						placeholder={placeholder}
						className="input-discription"
						value={input}
						onChange={(e) => handleChange(e.target.value)}
					></input>
				)}
			</div>
		</div>
	);
};
