import React, { useState } from 'react';
import { Svgs } from '../../enums';
import { SvgIcon } from './SvgIcon';

export const NoticeCard = ({
	noticeStatus,
	title,
	InvokePopUp,
	msg,
	date,
	readed,
	item,
}) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [views, setViews] = useState(0);

	const maxLength = 80;

	function toggleExpanded() {
		if (!views) {
			setViews(true);
			setViews(views + 1); // Increment views by one
		}
		InvokePopUp(item);
	}

	function renderText() {
		if (isExpanded || msg.length <= maxLength) {
			return msg;
		}
		return msg.slice(0, maxLength) + '...';
	}
	function formatViews() {
		if (views >= 1000) {
			return (views / 1000).toFixed(1) + 'k';
		}
		return views;
	}
	return (
		<div className={`notice-card ${readed ? 'notice-card-clicked' : ''}`}>
			<div className="notice-actions-top-right">
				{readed && <SvgIcon iconName={Svgs.DOUBLE_TICK} />}
			</div>
			<div className="notice-title">
				{title}
				<div className="notice-reader">&middot;</div>
				<span className="notice-status">{noticeStatus}</span>
			</div>
			<div className="notice-msg">
				{renderText()}
				{msg.length > maxLength && (
					<button
						onClick={toggleExpanded}
						style={{
							border: 'none',
							display: 'inline',
							background: 'none',
							color: '#EF452F',
							fontWeight: 'bold',
							padding: 0,
							cursor: 'pointer',
						}}
					>
						readmore
					</button>
				)}
			</div>
			<div className="notice-pub">
				<div className="notice-actions-bottom-right">
					<div className="notice-views">{formatViews() + ' seen'}</div>
				</div>
				<div className="notice-date">{date}</div>
			</div>
		</div>
	);
};
