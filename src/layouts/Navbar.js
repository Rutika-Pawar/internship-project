import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { LeftNavbar, RightNavBar } from '../components/layout';

export const Navbar = () => {
	let leftSidebarState = useSelector((state) => state.sidebar.showLeftSide);
	let rightSidebarState = useSelector((state) => state.sidebar.showRightSide);

	useEffect(() => {}, [leftSidebarState, rightSidebarState]);

	return (
		<>
			<nav className="navbar">
				<LeftNavbar />
				<RightNavBar />
			</nav>
		</>
	);
};
