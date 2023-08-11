import { ActivityComponent } from '../../enums';

export const Activity = (props) => {
	const length = props.arraySize.length - 1;
	const index = props.currentIndex;
	return (
		<div className={ActivityComponent.CONTAINER_CLASSNAME}>
			<div>
				<img
					src={require('../../maleuser.png')}
					className={ActivityComponent.ACTIVITY_IMAGE}
					alt=" not found"
				/>
				{props.type === 'activity' && (
					<div
						className={
							length != index
								? ActivityComponent.ACTIVITY_VERTICAL_LINE
								: ActivityComponent.ACTIVITY_VERTICAL_LINE_HIDE
						}
					></div>
				)}
			</div>

			<div>
				<p className={ActivityComponent.ACTIVITY_DETAILS}>
					{props.activityOccured}
				</p>
				<p className={ActivityComponent.ACTIVITY_TIME}>{props.time}</p>
			</div>
		</div>
	);
};

// ActivityComponent.ACTIVITY_VERTICAL_LINE : ActivityComponent.ACTIVITY_VERTICAL_LINE_HIDE
