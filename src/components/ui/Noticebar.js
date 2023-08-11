import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export const Noticebar = ({
	items,
	itemSelected,
	selectedItem,
	setNoticeType,
}) => {
	const [noticeStatus, setNoticeStatus] = useState({
		value: 'set',
		id: selectedItem,
	});

	const navigate = useNavigate();
	const handleNoticeClick = (noticeId, url, type) => {
		setNoticeStatus({ value: 'set', id: noticeId });
		itemSelected(noticeId);
		setNoticeType(type);
		navigate(url);
		console.log(url);
	};

	useEffect(() => {
		setNoticeStatus({ value: 'set', id: selectedItem });
	}, [selectedItem]);

	console.log(noticeStatus);
	return (
		<ul className="notice-bar-items">
			{items.map((item, index) => (
				<li
					key={index}
					onClick={() => handleNoticeClick(index, item.url, item.type)}
					className={
						noticeStatus.value === 'set' && noticeStatus.id === index
							? 'selected'
							: ''
					}
				>
					{item.label}
				</li>
			))}
		</ul>
	);
};
