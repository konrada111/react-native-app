import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { Text } from "react-native"

const Stack = createNativeStackNavigator()

const SearchScreen = () => {
  return <Text>Search</Text>
}

const SearchNavigator = () => {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen name="default" component={SearchScreen} />
    </Stack.Navigator>
  )
}

export default SearchNavigator
