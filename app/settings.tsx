import { View, Text } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

const SettingsScreen = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <View style={{ flex: 1, width: '100%' }}>{/* TODO: Add settings UI here */}</View>
    </SafeAreaView>
  )
}
export default SettingsScreen
