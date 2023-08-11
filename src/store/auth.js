import { createSlice } from '@reduxjs/toolkit';

export const auth = createSlice({
	name: 'auth',
	initialState: {
		isLoggedIn:
			localStorage.getItem('loggedIn') !== null
				? localStorage.getItem('loggedIn')
				: false,
	},
	reducers: {
		loggedIn: (state) => {
			localStorage.setItem('loggedIn', true);
			state.isLoggedIn = 'true';
		},
		loggedOut: (state) => {
			localStorage.setItem('loggedIn', false);
			state.isLoggedIn = 'false';
		},
	},
});

// Action creators are generated for each case reducer function
export const { loggedIn, loggedOut } = auth.actions;

export default auth.reducer;
