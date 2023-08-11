import { useState, useEffect } from 'react';
import { Noticebar } from '../components/ui';

function NoticeBarItems({ noticeType, setNoticeType }) {
	const items = [
		{
			id: 1,
			label: 'Published',
			url: '/dashboard/notices/published',
			type: 'published',
		},
		{
			id: 2,
			label: 'Approved',
			url: '/dashboard/notices/approved',
			type: 'approved',
		},
		{
			id: 3,
			label: 'Approved Pending',
			url: '/dashboard/notices/approvedpending',
			type: 'approvedpending',
		},
		{
			id: 4,
			label: 'Saved Template',
			url: '/dashboard/notices/savedtemplate',
			type: 'savedtemplate',
		},
		{ id: 5, label: 'Draft', url: '/dashboard/notices/draft', type: 'draft' },
		{
			id: 6,
			label: 'Expired',
			url: '/dashboard/notices/expired',
			type: 'expired',
		},
	];
	const [selectedItem, setSelectedItem] = useState('');
	const selectedItemByNoticebar = (item) => {
		setSelectedItem(item);
	};

	useEffect(() => {
		const index = items.findIndex((d, i) => {
			return d.url.includes(noticeType);
		});
		setSelectedItem(index);
	}, [noticeType]);

	return (
		<div>
			<Noticebar
				items={items}
				selectedItem={selectedItem}
				itemSelected={selectedItemByNoticebar}
				setNoticeType={setNoticeType}
			/>
		</div>
	);
}

export default NoticeBarItems;
