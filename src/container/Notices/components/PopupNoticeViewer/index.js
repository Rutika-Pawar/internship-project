import React from 'react';
import { StyledPopupNoticeViewer } from './PopupNoticeViewer.styled';

const PopupNoticeViewer = ({ noticeData, handleBackBtn }) => {
	return (
		<StyledPopupNoticeViewer>
			<button className="back-button">
				<div className="arrow" onClick={handleBackBtn}>
					{'<-'}
				</div>
				Back
			</button>
			<div className="header-wrapper">
				<div className="notice-heading">Notice</div>
				<div className="publish-date">
					Published date - {noticeData.publish_date}
				</div>
			</div>
			<div className="notice-title">{noticeData.title}</div>
			<div className="notice-data">{noticeData.summary}</div>
			<div className="notice-footer">
				<div className="viewer">
					Notice for {noticeData.viewer ? noticeData.viewer : 'everyone'}
				</div>
				<div className="expiry-date-wrapper">
					<div className="expiry">Expiry date</div>
					<div className="expiry-date">
						{/* {noticeData.expiry_date} */}
						04/08/23
					</div>
				</div>
			</div>
		</StyledPopupNoticeViewer>
	);
};

export default PopupNoticeViewer;
