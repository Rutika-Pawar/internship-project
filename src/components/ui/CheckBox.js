export const CheckBox = ({ id, name }) => {
	return (
		<>
			<div className="checkbox-component">
				<div className="checkbox-alingment-component">
					<input type="checkbox" id={id} />
					<lable for={id}> {name} </lable>
				</div>
			</div>
		</>
	);
};
