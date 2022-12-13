import { createSlice } from "@reduxjs/toolkit"
import { getUsers } from "./thunk"

export interface UserData {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [] as UserData[],
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload
      state.loading = false
    })
    builder.addCase(getUsers.rejected, state => {
      state.loading = false
    })
  },
})

export default usersSlice.reducer
