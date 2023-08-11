import { createSlice } from '@reduxjs/toolkit';
import { CommonConstants } from '../constants/commonConstants';

export const sidebar = createSlice({
	name: 'sidebar',
	initialState: {
		showLeftSide:
			localStorage.getItem(CommonConstants.SHOW_LEFT_SIDEBAR) === 'true'
				? true
				: false,
		showRightSide:
			localStorage.getItem(CommonConstants.SHOW_RIGHT_SIDEBAR) === 'true'
				? true
				: false,
		currentPage:
			localStorage.getItem(CommonConstants.CURRENT_PAGE) === null
				? 'home'
				: localStorage.getItem(CommonConstants.CURRENT_PAGE) === null,
	},
	reducers: {
		toggleLeftSidebar: (state) => {
			state.showLeftSide = !state.showLeftSide;
			localStorage.setItem(
				CommonConstants.SHOW_LEFT_SIDEBAR,
				state.showLeftSide
			);
		},
		toggleRightSidebar: (state) => {
			state.showRightSide = !state.showRightSide;
			localStorage.setItem(
				CommonConstants.SHOW_RIGHT_SIDEBAR,
				state.showRightSide
			);
		},
	},
});

export const { toggleLeftSidebar, toggleRightSidebar } = sidebar.actions;
export default sidebar.reducer;
