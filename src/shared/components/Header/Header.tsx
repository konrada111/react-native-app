import { RootState } from "@shared/store"
import React from "react"
import { View, Text } from "react-native"
import { useSelector } from "react-redux"

const Header = () => {
  const { header } = useSelector((state: RootState) => state.layout)
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 24,
      }}>
      <Text
        style={{
          color: "#62A1CB",
          fontWeight: "500",
          fontSize: 16,
        }}>
        {header}
      </Text>
    </View>
  )
}

export default Header
