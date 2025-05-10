import { Stack } from 'expo-router'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Layout = () => {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name="settings" />
        </Stack>
      </SafeAreaProvider>
    </PaperProvider>
  )
}

export default Layout
