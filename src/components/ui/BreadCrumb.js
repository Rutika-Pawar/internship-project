export const BreadCrumb = (props) => {
	const { list } = props;

	return (
		<>
			<div className="breadcrumb-parent-component">
				{list.map((item, index) => (
					<div key={index} className="breadcrumb-component">
						<p>{item}</p>
						{index !== list.length - 1 && (
							<p className="breadcrumb-symbol-component">/</p>
						)}
					</div>
				))}
			</div>
		</>
	);
};
