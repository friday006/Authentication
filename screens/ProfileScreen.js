import React from 'react'
import { View, Text,Button } from 'react-native'

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ProfileScreen</Text>
      <Button title='click' onPress={()=>alert('Button Clicked')}/>
    </View>
  )
}