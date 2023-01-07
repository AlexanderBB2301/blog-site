import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Jimmy Travis" },
  { id: "1", name: "Kaia Blanchard" },
  { id: "2", name: "Rebbeca Elusive" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
