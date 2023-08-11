export const Sidebar = (props) => {
	const sidebarStyle = {
		display: props.show ? 'block' : 'none',
	};
	return (
		<>
			<div style={sidebarStyle} className={props.sidebarType}>
				{props.children}
			</div>
		</>
	);
};
