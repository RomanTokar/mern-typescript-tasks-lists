import {combineReducers, configureStore} from '@reduxjs/toolkit';
import appReducer from './appSlice';

const reducer = combineReducers({
  app: appReducer
})

const store = configureStore({
  reducer
})

export type State = ReturnType<typeof store.getState>;

export default store;