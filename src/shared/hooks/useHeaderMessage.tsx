import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setMessage } from "../store/message"

export const useHeaderMessage = (value: string) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setMessage(value))
  }, [])
}
