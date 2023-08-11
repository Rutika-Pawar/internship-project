import { SvgIcon } from './index';

export const SidebarButton = ({ title, iconName, id }) => {
	function a() {
		alert();
	}
	return (
		<>
			<div id={id} className="sidebar-item">
				<SvgIcon
					onPress={a}
					iconName={iconName}
					height={20}
					width={20}
				></SvgIcon>
				{title}
			</div>
		</>
	);
};
