import { MD3DarkTheme, useTheme } from 'react-native-paper'

export const appTheme = { ...MD3DarkTheme, colors: { ...MD3DarkTheme.colors, background: 'black' } }

export type AppTheme = typeof appTheme

export const useAppTheme = () => useTheme<AppTheme>(appTheme)
