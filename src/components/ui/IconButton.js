import { SvgIcon } from './SvgIcon';

export const IconButton = (props) => {
	const className =
		props.disabled === 'true'
			? props?.buttonType + '-disabled'
			: props?.buttonType;

	const style = {
		flexFlow: 'row-reverse',
		justifyContent: 'space-evenly',
	};

	return (
		<>
			<div
				onClick={!props.disabled ? props.onClick : null}
				className={className}
				style={props.pos === 'right' ? style : {}}
			>
				<SvgIcon
					height={props.iconHeight}
					width={props.iconWidth}
					fill={props.iconColor}
					iconName={props.icon}
				></SvgIcon>
				<span>{props.title}</span>
			</div>
		</>
	);
};
