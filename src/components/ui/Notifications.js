//import { isVisible } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import { Svgs } from '../../enums';
import { SvgIcon } from './SvgIcon';

export const Notifications = ({ notificationActive, ...props }) => {
	switch (notificationActive) {
		case 'Y':
			return (
				<div>
					<NotificationChild
						styles={props.styles}
						status={props.status}
						message={props.message}
					/>
				</div>
			);
	}
};

export const NotificationChild = (props) => {
	const [isVisible, setIsVisible] = useState(true);
	setTimeout(() => {
		setIsVisible(false);
	}, 3000);

	const divStyle = {
		display: isVisible ? 'block' : 'none',
	};
	let sizeSvg;
	if (props.styles.includes('small')) {
		sizeSvg = '15px';
	}
	let status;
	if (props.status.includes('success')) {
		status = Svgs.CHECK;
	} else {
		status = Svgs.WARNING;
	}
	let notification = [];

	notification.push(
		<div style={divStyle}>
			{
				<div className={props.styles}>
					<SvgIcon iconName={status} width={sizeSvg} height={sizeSvg}></SvgIcon>
					{props.message}
				</div>
			}
		</div>
	);

	return <>{notification}</>;
};
