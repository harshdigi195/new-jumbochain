import { combineReducers } from '@reduxjs/toolkit';

import themeReducer from './themeSlice';

const rootReducer = combineReducers({
	theme: themeReducer,
	// Add other slice reducers here
});

export default rootReducer;
