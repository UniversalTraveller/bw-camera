import { Stack } from 'expo-router'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import { appTheme, useAppTheme } from '../theme/appTheme'
import { store } from '../store'

export default function Layout() {
  const { colors } = useAppTheme()

  return (
    <Provider store={store}>
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
    </Provider>
  )
}
