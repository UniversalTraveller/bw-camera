import { List, Switch } from 'react-native-paper'

import { useAppDispatch, useAppSelector } from '../store/hooks'
import {
  setPlayShutterSound,
  setBlackViewfinderWhenShutterPressed,
  setHideStatusBar
} from '../store/settingsSlice'
import ScreenView from '../components/ScreenView'

const SettingsScreen = () => {
  const dispatch = useAppDispatch()
  const { playShutterSound, blackViewfinderWhenShutterPressed, hideStatusBar } = useAppSelector(
    state => state.settings
  )

  return (
    <ScreenView>
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

      <List.Item
        title="Hide status bar"
        description="Hide the status bar for an undestracted experience."
        right={() => (
          <Switch
            value={hideStatusBar}
            onValueChange={(value: boolean) => {
              dispatch(setHideStatusBar(value))
            }}
          />
        )}
      />
    </ScreenView>
  )
}

export default SettingsScreen
