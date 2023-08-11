import { useState, useRef } from 'react';
import { Svgs } from '../../enums';
import { SvgIcon } from './SvgIcon';

export const SearchBox = (props) => {
	const [input, setInput] = useState('');
	const handleChange = (value) => {
		setInput(value);
		searchBox.current.focus();
		props.onChange(input);
	};

	const searchBox = useRef(null);

	const handleCancelClick = () => {
		searchBox.current.focus();
		setInput('');
	};

	return (
		<div className={props.SearchBoxType}>
			<SvgIcon
				height={props.iconHeight}
				width={props.iconWidth}
				fill={props.fill}
				iconName={props.icon}
			/>
			<input
				type="text"
				placeholder={props.text}
				value={input}
				onChange={(e) => handleChange(e.target.value)}
				ref={searchBox}
			/>
			{input && (
				<SvgIcon
					height={props.iconHeight}
					width={props.iconWidth}
					pressMe={handleCancelClick}
					fill={props.fill}
					iconName={Svgs.SEARCH_BOX_CANCEL}
				/>
			)}
		</div>
	);
};
