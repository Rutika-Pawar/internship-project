import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button, SvgIcon } from '../components/ui';
import { NoticeCard } from '../components/ui/NoticeCard';
import { SearchBox } from '../components/ui/Searchbox';
import { Svgs, SearchBoxType, ButtonType } from '../enums';
import NoticeBarItems from './Nav';
import {
	buttonArray,
	noticeArray,
} from '../constants/noticeComponentConstants';
import { DialogWithBackdrop } from '../components/layout';

import NoticesPopup from '../container/Notices/index';
import { CreateNotice } from '../components/ui';
import NoticeApiService from '../services/noticeService';
export const Notices = () => {
	const { id } = useParams();
	const [noticeContent, setNoticeContent] = useState(noticeArray);
	const [publishDate, setPublishDate] = useState();
	const [noticeStatusArr, setNoticeStatusArr] = useState(buttonArray);
	const [noticeType, setNoticeType] = useState(id);
	const [isCreateNoticeActive, setIsCreateNoticeActive] = useState(false);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [selectedNoticeData, setSelectedNoticeData] = useState({});
	const InvokePopUp = (data) => {
		setIsDialogOpen(!isDialogOpen);
		setSelectedNoticeData(data);
	};
	// const handleOpenDialog = () => {
	// 	setIsDialogOpen(true);
	// };

	const handleCloseDialog = () => {
		setIsDialogOpen(!isDialogOpen);
	};

	const handleIsCreateNoticeActive = () => {
		setIsCreateNoticeActive(!isCreateNoticeActive);
	};
	const handleStatusChange = (index) => {
		const modifiedNoticeStatusArr = noticeStatusArr.map((d, i) => {
			if (i === index) {
				return { ...d, isActive: true };
			}
			return { ...d, isActive: false };
		});

		setNoticeStatusArr(modifiedNoticeStatusArr);
	};

	useEffect(() => {
		const status = noticeStatusArr.find((d) => {
			return d.isActive;
		});
		const modifiedNoticeContent = noticeContent.map((d, i) => {
			if (d.type === noticeType && status.title === 'All') {
				return { ...d, isActive: true };
			}
			if (d.type === noticeType && status.title === d.noticeStatus) {
				return { ...d, isActive: true };
			}
			return { ...d, isActive: false };
		});
		setNoticeContent([...modifiedNoticeContent]);
	}, [noticeType, noticeStatusArr]);

	useEffect(() => {
		(async () => {
			const data = await NoticeApiService.getAllNotice();
			console.log(data.data, 'response');
		})();
	}, []);

	return (
		<>
			<div className="heading-wrapper">
				{' '}
				<div className="heading">Notice</div>{' '}
				<Button
					buttonType="create-btn"
					title={
						<>
							<SvgIcon iconName={Svgs.CREATE_PENCIL} />
							Create Notice
						</>
					}
					pressMe={handleIsCreateNoticeActive}
				/>
			</div>

			<div className="notice-search">
				<SearchBox
					icon={Svgs.SEARCH_BOX}
					SearchBoxType={SearchBoxType.PRIMARY_MEDIUM_NOTICES}
					iconHeight={17}
					iconWidth={17}
					text="Search notice..."
				></SearchBox>
			</div>
			<NoticeBarItems noticeType={noticeType} setNoticeType={setNoticeType} />
			<div className="notice-button">
				{noticeStatusArr.map((item, itemIndex) => {
					return (
						<Button
							key={itemIndex}
							buttonType={
								item.isActive
									? ButtonType.PRIMARY_MEDIUM_DEFAULT_NOTICE_ACTIVE
									: ButtonType.PRIMARY_MEDIUM_DEFAULT_NOTICE
							}
							title={item.title}
							pressMe={() => handleStatusChange(itemIndex)}
						/>
					);
				})}
			</div>

			<DialogWithBackdrop isOpen={isDialogOpen} onClose={handleCloseDialog}>
				<NoticesPopup noticeData={selectedNoticeData} />

				{/* <CreateNotice /> */}
			</DialogWithBackdrop>
			<DialogWithBackdrop
				isOpen={isCreateNoticeActive}
				onClose={handleIsCreateNoticeActive}
			>
				{/* <NoticesPopup noticeData={selectedNoticeData} /> */}

				<CreateNotice
					publishDate={publishDate}
					setPublishDate={setPublishDate}
				/>
			</DialogWithBackdrop>

			{noticeContent
				.filter((d, i) => {
					return d.isActive;
				})
				.map((item, itemIndex) => (
					<NoticeCard
						key={itemIndex}
						title={item.title}
						msg={item.msg}
						date={item.date}
						item={item}
						noticeStatus={item.noticeStatus}
						InvokePopUp={InvokePopUp}
					/>
				))}
		</>
	);
};
