import { createNativeStackNavigator } from "@react-navigation/native-stack"

import React from "react"
import { View } from "react-native"

const Stack = createNativeStackNavigator()

const UsersScreen = () => {
  return <View>Users</View>
}

const UsersNavigator = () => {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen name="default" component={UsersScreen} />
    </Stack.Navigator>
  )
}

export default UsersNavigator
