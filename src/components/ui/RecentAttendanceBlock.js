import { SvgIcon } from './SvgIcon';

const RecentAttendanceBlock = (props) => {
	const data = [];

	let content = [];

	const generateDate = (i) => {
		const today = new Date();
		const yesterday = new Date(today);

		yesterday.setDate(yesterday.getDate() - i);

		let formattedDate = yesterday.toLocaleDateString();
		data.push(formattedDate);
	};

	let barWidth;

	for (let i = 0; i < 7; i++) {
		if (props.attendancePercentage) {
			let temp = (81 * props.attendancePercentage[i]) / 100;
			barWidth = {
				width: temp,
			};

			generateDate(i);
		}

		if (props.attendancePercentage) {
			content.push(
				<div className="dateBar-recent-attendance">
					<div className="date-recent-attendance">{data[i]}</div>
					<div className="line-recent-attendance">
						<SvgIcon iconName={props.icon}></SvgIcon>
					</div>
					<div className="bar-recent-attendance" style={barWidth}>
						<div className="innerBar-recent-attendance"></div>
					</div>
				</div>
			);
		} else {
			content.push(<div className="loadingBar-recent-attendance"></div>);
		}
	}
	return (
		<div className="main-recent-attendance-block">
			<div className="title-recent-attendance">Recent Attendance</div>
			<div>{content}</div>
		</div>
	);
};

export default RecentAttendanceBlock;
