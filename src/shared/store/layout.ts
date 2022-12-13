import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    header: "Users",
  },
  reducers: {
    setHeader(state, action: PayloadAction<string>) {
      state.header = action.payload
    },
  },
})

export const { setHeader } = layoutSlice.actions
export default layoutSlice.reducer
