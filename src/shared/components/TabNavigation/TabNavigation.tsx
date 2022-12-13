import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import CartNavigator from "@shared/screens/Cart/navigator"
import HomeNavigator from "@shared/screens/Home/navigator"
import SearchNavigator from "@shared/screens/Search/navigator"
import UsersNavigator from "@shared/screens/Users/navigator"

import React from "react"

import TabBar from "./TabBar"

const TabNavigation = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Tab.Screen name="Users" component={UsersNavigator} />
      <Tab.Screen name="Home" component={HomeNavigator} options={{}} />
      <Tab.Screen name="Search" component={SearchNavigator} />
      <Tab.Screen name="Cart" component={CartNavigator} />
    </Tab.Navigator>
  )
}

export default TabNavigation
