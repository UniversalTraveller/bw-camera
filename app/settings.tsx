import { useState } from 'react'

import { List, Switch } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

const SettingsScreen = () => {
  const [playShutterSound, setPlayShutterSound] = useState(true)

  const [blackScreenWhenShutterPressed, setBlackScreenWhenShutterPressed] = useState(true)

  return (
    <SafeAreaView>
      <List.Item
        title="Play shutter sound"
        description="Play a short click sound when the shutter is pressed."
        right={() => (
          <Switch
            value={playShutterSound}
            onValueChange={() => setPlayShutterSound(!playShutterSound)}
          />
        )}
      />

      <List.Item
        title="Black viewfinder when taking photo"
        description="Let the viewfinder go black when taking a photo."
        right={() => (
          <Switch
            value={blackScreenWhenShutterPressed}
            onValueChange={() => setBlackScreenWhenShutterPressed(!blackScreenWhenShutterPressed)}
          />
        )}
      />
    </SafeAreaView>
  )
}
export default SettingsScreen
