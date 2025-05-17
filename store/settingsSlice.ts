import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type SettingsState = {
  playShutterSound: boolean
  blackViewfinderWhenShutterPressed: boolean
  hideStatusBar: boolean
}

const initialState: SettingsState = {
  playShutterSound: true,
  blackViewfinderWhenShutterPressed: true,
  hideStatusBar: true
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setPlayShutterSound: (state, action: PayloadAction<boolean>) => {
      state.playShutterSound = action.payload
    },
    setBlackViewfinderWhenShutterPressed: (state, action: PayloadAction<boolean>) => {
      state.blackViewfinderWhenShutterPressed = action.payload
    },
    setHideStatusBar: (state, action: PayloadAction<boolean>) => {
      state.hideStatusBar = action.payload
    }
  }
})

export const { setPlayShutterSound, setBlackViewfinderWhenShutterPressed, setHideStatusBar } =
  settingsSlice.actions
export default settingsSlice.reducer
