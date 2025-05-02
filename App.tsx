import { PaperProvider } from 'react-native-paper'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import CameraScreen from './src/CameraScreen'

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <CameraScreen />
      </SafeAreaProvider>
    </PaperProvider>
  )
}
