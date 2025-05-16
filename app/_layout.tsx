import { Stack } from 'expo-router'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { appTheme, useAppTheme } from '../theme/appTheme'
import { store, persistor } from '../store'

export default function Layout() {
  const { colors } = useAppTheme()

  const defaultScreenOptions = {
    headerStyle: {
      backgroundColor: colors.background
    },
    headerTintColor: colors.onSurface,
    headerTitleStyle: { color: colors.onSurface }
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <PaperProvider theme={appTheme}>
            <Stack
              screenOptions={{
                contentStyle: { backgroundColor: colors.background }
              }}
            >
              <Stack.Screen
                name="index"
                options={{
                  headerShown: false
                }}
              />

              <Stack.Screen
                name="settings"
                options={{ ...defaultScreenOptions, title: 'Settings' }}
              />

              <Stack.Screen
                name="gallery"
                options={{ ...defaultScreenOptions, title: 'Photos' }}
              />
            </Stack>
          </PaperProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}
