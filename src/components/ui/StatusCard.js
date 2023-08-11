import { SvgIcon } from './SvgIcon';
import { Svgs } from '../../enums';

const StatusCard = (props) => {
	const background = {
		background: props.bgcolor,
	};
	let iconSvg;
	if (props.per && props.per[0] === '-') {
		iconSvg = Svgs.ARROW_FALL;
	} else {
		iconSvg = Svgs.ARROW_RISE;
	}
	const HasValue = () => {
		if (props.value) {
			return (
				<div className={props.cardType} style={background}>
					<div className="title-status-card"> {props.title} </div>
					<div className="bottom-status-card">
						<div className="value-status-card">{props.value} </div>
						<div className="per-status-card">
							{' '}
							{props.per}
							<div className="svg-status-card">
								<SvgIcon
									iconName={iconSvg}
									height={props.iconHeight}
									width={props.iconWidth}
								></SvgIcon>
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div className={props.cardType} style={background}>
					<div className="title-status-card"> {props.title} </div>
					<div className="loadingSvg-status-card">
						<SvgIcon iconName={Svgs.DATA_LOADING_VIEW_1}></SvgIcon>
						<div className="loadingSvg2-status-card">
							<SvgIcon iconName={Svgs.DATA_LOADING_VIEW_2}></SvgIcon>{' '}
						</div>
					</div>
				</div>
			);
		}
	};
	return <HasValue />;
};

export default StatusCard;
