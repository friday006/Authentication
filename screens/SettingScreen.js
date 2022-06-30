import { View, Text, Button } from 'react-native'
import React from 'react'

export default function SettingScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SettingScreen</Text>
      <Button title='click' onPress={()=>alert('Button Clicked')}/>
    </View>
  )
}