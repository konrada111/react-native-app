import React from "react"
import { View, Text } from "react-native"
import { useSelector } from "react-redux"
import { RootState } from "src/shared/store"

const Message = () => {
  const { message } = useSelector((state: RootState) => state.message)

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 24,
      }}>
      <Text style={{ alignSelf: "flex-start" }}>{message}</Text>
    </View>
  )
}

export default Message
