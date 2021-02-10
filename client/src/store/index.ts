import {configureStore} from '@reduxjs/toolkit';
import appReducer from './appSlice';
import themeSlice from './themeSlice';

const store = configureStore({
  reducer: {
    app: appReducer,
    theme: themeSlice
  }
})

export type State = ReturnType<typeof store.getState>;

export default store;