import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React, { useEffect } from "react"
import { Text, View } from "react-native"

const Stack = createNativeStackNavigator()

const CartScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}>
      <Text>Cart!</Text>
    </View>
  )
}

const CartNavigator = () => {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen name="default" component={CartScreen} />
    </Stack.Navigator>
  )
}

export default CartNavigator
