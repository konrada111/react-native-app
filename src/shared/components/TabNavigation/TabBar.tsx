import React from "react"
import { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Pressable, View } from "react-native"
import { getIcon } from "./getIcon"
import { useDispatch } from "react-redux"
import { setHeader } from "@shared/store/layout"

const TabBar = ({ state, navigation }: BottomTabBarProps) => {
  const { bottom } = useSafeAreaInsets()
  const dispatch = useDispatch()
  return (
    <View
      style={{
        paddingHorizontal: 6,
        backgroundColor: "white",
        shadowColor: "black",
        shadowRadius: 16,
        shadowOffset: {
          width: 0,
          height: -15,
        },
        shadowOpacity: 0.04,
        height: 56 + bottom,
        flexDirection: "row",
      }}>
      <>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index
          const color = isFocused ? "#62A1CB" : "#9E9E9E"

          const onPress = () => {
            navigation.navigate(route.name)
            dispatch(setHeader(route.name))
          }
          return (
            <Pressable
              style={{
                flex: 1,
                paddingVertical: 4,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={onPress}>
              {getIcon(route.name, color)}
            </Pressable>
          )
        })}
      </>
    </View>
  )
}

export default TabBar
