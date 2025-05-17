import React from 'react'

import { SafeAreaView, StyleProp, ViewStyle } from 'react-native'

import { StatusBar } from 'expo-status-bar'

import { useAppSelector } from '../store/hooks'

const ScreenView = ({
  children,
  style
}: {
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
}) => {
  const { hideStatusBar } = useAppSelector(state => state.settings)

  return (
    <>
      <StatusBar style="light" hidden={hideStatusBar} />

      <SafeAreaView style={style}>{children}</SafeAreaView>
    </>
  )
}

export default ScreenView
