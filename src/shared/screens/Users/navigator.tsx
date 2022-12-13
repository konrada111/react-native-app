import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Profile from "@shared/components/Profile/Profile"
import { AppDispatch, RootState } from "@shared/store"

import React, { useEffect } from "react"
import { ActivityIndicator, Button, Image, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "./redux/thunk"

const Stack = createNativeStackNavigator()

const UsersScreen = () => {
  const dispatch: AppDispatch = useDispatch()
  const { users, loading } = useSelector((state: RootState) => state.users)

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ justifyContent: "center", marginTop: 100 }}>
        {users.map(({ avatar, email, first_name, id, last_name }) => (
          <Profile
            avatar={avatar}
            email={email}
            firstName={first_name}
            lastName={last_name}
            key={id}
          />
        ))}
        <Button title={"Reload"} onPress={() => dispatch(getUsers())} />
      </View>
    </View>
  )
}

const UsersNavigator = () => {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen name="default" component={UsersScreen} />
    </Stack.Navigator>
  )
}

export default UsersNavigator
