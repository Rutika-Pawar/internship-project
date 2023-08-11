import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Svgs } from '../../enums';
import { toggleLeftSidebar } from '../../store/sidebar';
import { SvgIcon, BreadCrumb } from '../ui';

export const LeftNavbar = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const activeRouteArray = location.pathname
		.split('/')
		.filter((path) => path !== '');

	function hideLeftSidebar() {
		dispatch(toggleLeftSidebar());
	}

	return (
		<div className="left-navbar">
			<SvgIcon
				iconName={Svgs.SIDEBAR_ICON}
				pressMe={hideLeftSidebar}
				width={24}
				height={24}
			></SvgIcon>
			<BreadCrumb list={activeRouteArray} />
		</div>
	);
};
