import { useDispatch } from 'react-redux';
import { SearchBoxType, Svgs } from '../../enums';
import { toggleRightSidebar } from '../../store/sidebar';
import { SearchBox, SvgIcon } from '../ui';
export const RightNavBar = () => {
	const dispatch = useDispatch();

	function hideRightSidebar() {
		dispatch(toggleRightSidebar());
	}

	return (
		<>
			<div className="right-navbar">
				<SearchBox
					icon={Svgs.SEARCH_BOX}
					SearchBoxType={SearchBoxType.PRIMARY_MEDIUM_DEFAULT}
					iconHeight={18}
					iconWidth={18}
					text="Type Something"
				></SearchBox>
				<SvgIcon
					id={143}
					iconName={Svgs.DEFAULT_BELL_ICON}
					pressMe={hideRightSidebar}
					width={24}
					height={24}
				></SvgIcon>
				<SvgIcon
					id={143}
					pressMe={hideRightSidebar}
					iconName={Svgs.SIDEBAR_ICON}
					width={24}
					height={24}
				></SvgIcon>
			</div>
		</>
	);
};
