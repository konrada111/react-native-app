import { configureStore } from "@reduxjs/toolkit"
import layoutReducer from "./layout"
import usersReducer from "@shared/screens/Users/redux/slice"

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    users: usersReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
