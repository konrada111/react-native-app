import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const USERS_URL = "https://reqres.in/api/users?delay=1"

export const getUsers = createAsyncThunk("users/get", async () => {
  try {
    const response = await axios.get(USERS_URL)

    return response.data.data
  } catch (e) {
    throw e
  }
})
