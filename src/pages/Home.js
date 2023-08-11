import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { SvgIcon } from '../components/ui';
import { CardType, Svgs } from '../enums';
import DashBoard from '../container/DashBoard';
import { GraphBar, GraphLine } from '../components/graph';
import StatusCard from '../components/ui/StatusCard';
import RecentAttendanceBlock from '../components/ui/RecentAttendanceBlock';

export const Home = () => {
	const leftSidebar = useSelector((state) => state.sidebar.showLeftSide);
	const rightSidebar = useSelector((state) => state.sidebar.showRightSide);

	const getStudentsAttendanceData = () => {
		return [
			{ title: 'Total Students', bgColor: '#E3F5FF' },
			{ title: 'Present Students', bgColor: '#E5ECF6' },
			{ title: 'Absent Students', bgColor: '#E3F5FF' },
			{ title: 'Stats Students', bgColor: '#E5ECF6' },
		];
	};

	const records = getStudentsAttendanceData();
	const attendancePercentage = [50, 60, 80, 30, 50, 80, 70];

	const AttendanceStats = () => {
		return (
			<div className="attendance-stats-block">
				{records.map((record, index) => (
					<Suspense
						key={index}
						fallback={
							<div
								className={CardType.STATUS_CARD}
								style={{ background: record.bgColor }}
							>
								<div className="title-status-card">{record.title}</div>
								<div className="loadingSvg-status-card">
									<SvgIcon iconName={Svgs.DATA_LOADING_VIEW_1} />
									<div className="loadingSvg2-status-card">
										<SvgIcon iconName={Svgs.DATA_LOADING_VIEW_2} />
									</div>
								</div>
							</div>
						}
					>
						<StatusCard
							title={record.title}
							cardType={CardType.STATUS_CARD}
							per="123%"
							value="230"
							bgcolor={record.bgColor}
						/>
					</Suspense>
				))}
			</div>
		);
	};

	const AttendanceSection = () => {
		return (
			<div className="attendance-block">
				<GraphBar
					height={150}
					width={'80%'}
					labels={['class 1', 'class 2', 'class 3', 'class 4']}
					data={[4, 5, 3, 6]}
				/>
				<Suspense fallback={<RecentAttendanceLoadingBlock />}>
					<RecentAttendanceBlock attendancePercentage={attendancePercentage} />
				</Suspense>
			</div>
		);
	};

	const RecentAttendanceLoadingBlock = () => {
		const loadingRecentAttendanceBlock = Array.from({ length: 7 }).map(
			(_, index) => <div key={index} className="loadingBar-recent-attendance" />
		);

		return (
			<div className="main-recent-attendance-block">
				<div className="title-recent-attendance">Recent Attendance</div>
				<div>{loadingRecentAttendanceBlock}</div>
			</div>
		);
	};

	const PerformanceGraph = () => {
		let width = '100%';
		const height = '400px';

		if (leftSidebar && rightSidebar) {
			width = '80%';
		} else if (leftSidebar || rightSidebar) {
			width = '90%';
		}

		return (
			<div className="performance-graph">
				<GraphLine
					height={height}
					width={width}
					labels={['class1', 'class2', 'class3', 'class4']}
					data1={[11, 12, 12, 11]}
					data2={[15, 22, 9, 21]}
				/>
			</div>
		);
	};

	return (
		<div className="home">
			<AttendanceStats />
			<PerformanceGraph />
			<AttendanceSection />
			<DashBoard />
		</div>
	);
};
