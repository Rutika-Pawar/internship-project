import { NavLink } from 'react-router-dom';
import { Svgs } from '../../enums';
import { SidebarButton } from '../ui';
import { Logo } from '../ui/Logo';

export const LeftSideBar = () => {
	return (
		<>
			<Logo />
			<NavLink to={'./home'}>
				<SidebarButton
					id={'pie-chart'}
					iconName={Svgs.PIE_CHART_DARK}
					title="Home"
				></SidebarButton>
			</NavLink>
			<NavLink to={'./notices/published'}>
				<SidebarButton
					id={'notices'}
					iconName={Svgs.OPEN_BOOK}
					title="Notices"
				></SidebarButton>
			</NavLink>
			<NavLink to={'./teachers'}>
				<SidebarButton
					id={'teachers'}
					iconName={Svgs.TEACHER}
					title="Teacher"
				></SidebarButton>
			</NavLink>
			<NavLink to={'./results'}>
				<SidebarButton
					id={'teachers'}
					iconName={Svgs.TEACHER}
					title="Results"
				></SidebarButton>
			</NavLink>
		</>
	);
};
