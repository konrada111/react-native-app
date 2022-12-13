import React from "react"
import { SafeAreaView } from "react-native"
import { Provider } from "react-redux"
import { store } from "./shared/store"
import { NavigationContainer } from "@react-navigation/native"
import Message from "./shared/components/Message"
import TabNavigation from "./shared/components/TabNavigation"
import navTheme from "@shared/utils/navTheme"

const App = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <Message />
          <TabNavigation />
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  )
}

export default App
