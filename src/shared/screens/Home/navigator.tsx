import { createNativeStackNavigator } from "@react-navigation/native-stack"

import React from "react"
import { Text, View } from "react-native"

const Stack = createNativeStackNavigator()

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  )
}

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen name="default" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default HomeNavigator
