import { Svgs } from '../../enums';
import { SvgIcon } from '../ui';

import { BarStatus } from '../graph';
import { Colors } from '../../styles/graphColors';

export const TeacherProfile = (props) => {
	const height = '250';
	const width = '300';
	const dataArray = [
		{ icon: Svgs.MESSAGE_ICON, content: props.mail },
		{ icon: Svgs.CALL_ICON, content: props.contact },
		{ icon: Svgs.LOCATION_ICON, content: props.address },
	];
	return (
		<div className={props.teacherProfileCardType}>
			<div className="profile-card info-card-bottom">
				<img src={require('../../assets/images/image.png')} alt="logo" />
				<div className="profile-name">{props.name}</div>
				<div className="profile-desc">{props.position}</div>
			</div>

			<>
				<div className="contact-card">{props.title}</div>
				{dataArray.map((item, itemIndex) => (
					<div
						key={itemIndex}
						className={
							itemIndex === 2 ? 'info-card' : 'info-card info-card-bottom'
						}
					>
						<SvgIcon fill={props.iconColor} iconName={item.icon}></SvgIcon>
						<div className="info-detailes">{item.content}</div>
					</div>
				))}
			</>

			<div className="performance-card">
				<BarStatus
					height={height}
					width={width}
					showYaxisValues={false}
					showXaxisValues={false}
					alignment="center"
					label={false}
					barThickness="10"
					borderRadius="8"
					backgroundColor={[Colors.Light_Orange]}
					hoverBackgroundColor={[Colors.Orange]}
					borderColor={[Colors.Light_Orange]}
					enabledtooltip={true} // pass boolean value instead of string value
					labels={['class1', 'class2', 'class3', 'class4', 'class5']}
					data={[60, 70, 40, 30, 45, 90]}
				/>
			</div>
		</div>
	);
};
