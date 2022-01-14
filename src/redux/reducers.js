import { createSlice } from '@reduxjs/toolkit';
import UserData from '../FakeData';

const UserSlice = createSlice({
  name: 'Users',
  initialState: { value: UserData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {},
    updateUser: (state, action) => {},
  },
});
export const { addUser, deleteUser, updateUser } = UserSlice.actions;
export default UserSlice.reducer;
