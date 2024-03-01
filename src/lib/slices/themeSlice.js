import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	themeMode: 'light',
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		// Define your reducer actions and logic
		toggleTheme(state) {
			if (state.themeMode === 'light') {
				state.themeMode = 'dark';
			} else if (state.themeMode === 'dark') {
				state.themeMode = 'light';
			}
		},
	},
});

export default themeSlice.reducer;
