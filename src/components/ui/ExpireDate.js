import SvgIcon from './SvgIcon';
import React, { useRef, useState } from 'react';
export const ExpireDate = ({ date, label }) => {
	const [expireDate, setExpireDate] = useState(date);
	const inputElement = useRef();
	const focusInput = () => {
		inputElement.current.showPicker();
	};
	return (
		<>
			<div className="expireDate-parent-component input-container i">
				<input
					type="date"
					value={expireDate}
					onChange={(e) => {
						setExpireDate(e.target.value);
					}}
					ref={inputElement}
					name=""
					id="date-input"
				/>
				<div className="wrapper-label">
					{' '}
					<div className="expireDate-component"> {label} </div>
					<div className="date-component"> {expireDate}</div>
				</div>
				<label
					htmlFor="date32"
					className=" dot-bg-component"
					onClick={focusInput}
				>
					<SvgIcon className="svg-component" iconName={'ellipse'}></SvgIcon>
				</label>
			</div>
		</>
	);
};
