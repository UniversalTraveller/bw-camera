import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SettingsState = {
  playShutterSound: boolean
  blackViewfinderWhenShutterPressed: boolean
}

const initialState: SettingsState = {
  playShutterSound: true,
  blackViewfinderWhenShutterPressed: true
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
    }
  }
})

export const { setPlayShutterSound, setBlackViewfinderWhenShutterPressed } = settingsSlice.actions
export default settingsSlice.reducer
