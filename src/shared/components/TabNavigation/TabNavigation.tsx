import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import React from "react"
import CartNavigator from "src/shared/screens/Cart"
import HomeNavigator from "src/shared/screens/Home/navigator"
import SearchNavigator from "src/shared/screens/Search/navigator"
import UsersNavigator from "src/shared/screens/Users/navigator"
import TabBar from "./TabBar"

const TabNavigation = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeNavigator} options={{}} />
      <Tab.Screen name="Search" component={SearchNavigator} />
      <Tab.Screen name="Cart" component={CartNavigator} />
      <Tab.Screen name="Users" component={UsersNavigator} />
    </Tab.Navigator>
  )
}

export default TabNavigation
