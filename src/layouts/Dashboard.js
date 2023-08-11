import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { LeftSideBar, RightSidebar } from '../components/layout';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

export const Dashboard = () => {
	const leftSidebar = useSelector((state) => state.sidebar.showLeftSide);
	const rightSidebar = useSelector((state) => state.sidebar.showRightSide);

	useEffect(() => {
		// Add any necessary side effects here
	}, [leftSidebar, rightSidebar]);

	const baseStyle = {
		display: 'flex',
	};

	const navContentStyle = {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
	};

	const renderLeftSidebar = () => {
		return (
			<Sidebar show={leftSidebar} sidebarType="sidebar">
				<LeftSideBar />
			</Sidebar>
		);
	};

	const renderRightSidebar = () => {
		return (
			<Sidebar show={rightSidebar} sidebarType="right-sidebar">
				<RightSidebar />
			</Sidebar>
		);
	};

	return (
		<div style={baseStyle}>
			{renderLeftSidebar()}
			<div style={navContentStyle}>
				<Navbar />
				<div className="container">
					<Outlet />
				</div>
			</div>
			{renderRightSidebar()}
		</div>
	);
};
