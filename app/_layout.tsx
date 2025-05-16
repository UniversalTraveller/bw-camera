import { Stack } from 'expo-router'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { appTheme, useAppTheme } from '../theme/appTheme'
import { store, persistor } from '../store'

export default function Layout() {
  const { colors } = useAppTheme()

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
                options={{
                  title: 'Settings',
                  headerStyle: {
                    backgroundColor: colors.background
                  },
                  headerTintColor: colors.onSurface,
                  headerTitleStyle: {
                    color: colors.onSurface
                  }
                }}
              />
            </Stack>
          </PaperProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}
