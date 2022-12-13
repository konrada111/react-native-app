import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { Text, View } from "react-native"

const Stack = createNativeStackNavigator()

const SearchScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}>
      <Text>Search!</Text>
    </View>
  )
}

const SearchNavigator = () => {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen name="default" component={SearchScreen} />
    </Stack.Navigator>
  )
}

export default SearchNavigator
