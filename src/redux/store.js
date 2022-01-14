import { configureStore } from '@reduxjs/toolkit';
import UsersReducer from './reducers';

const store = configureStore({
  reducer: {
    users: UsersReducer,
  },
});

export default store;
