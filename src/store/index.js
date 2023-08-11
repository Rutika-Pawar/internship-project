import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import counterReducer from './counter';
import sidebarReducer from './sidebar';

export default configureStore({
	reducer: {
		counter: counterReducer,
		auth: authReducer,
		sidebar: sidebarReducer,
	},
});
