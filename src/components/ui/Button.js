export const Button = (props) => {
	return (
		<>
			<button
				className={props.buttonType}
				onClick={!props.disabled ? props.pressMe : ''}
				disabled={props.disabled}
			>
				{props.title}
			</button>
		</>
	);
};
