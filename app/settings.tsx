import { List, Switch } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setPlayShutterSound, setBlackViewfinderWhenShutterPressed } from '../store/settingsSlice'

const SettingsScreen = () => {
  const dispatch = useAppDispatch()
  const { playShutterSound, blackViewfinderWhenShutterPressed } =
    useAppSelector(state => state.settings)

  return (
    <SafeAreaView>
      <List.Item
        title="Play shutter sound"
        description="Play a short click sound when the shutter is pressed."
        right={() => (
          <Switch
            value={playShutterSound}
            onValueChange={(value: boolean) => {
              dispatch(setPlayShutterSound(value))
            }}
          />
        )}
      />

      <List.Item
        title="Black viewfinder when taking photo"
        description="Let the viewfinder go black when taking a photo."
        right={() => (
          <Switch
            value={blackViewfinderWhenShutterPressed}
            onValueChange={(value: boolean) => {
              dispatch(setBlackViewfinderWhenShutterPressed(value))
            }}
          />
        )}
      />
    </SafeAreaView>
  )
}

export default SettingsScreen
