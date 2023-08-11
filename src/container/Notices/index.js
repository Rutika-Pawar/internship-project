import React from 'react';
import PopupNoticeViewer from './components/PopupNoticeViewer';
import { noticeDataArr } from './constant';

const Notices = ({ noticeData }) => {
	const handleBackBtn = () => {};
	return (
		<div>
			<PopupNoticeViewer
				noticeData={noticeData}
				handleBackBtn={handleBackBtn}
			/>
		</div>
	);
};

export default Notices;
