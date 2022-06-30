import React from 'react';
import {
    Button,
    Text,
    View,
  } from 'react-native';

  const Homescreen = ({navigation}) =>{
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>HomeScreen</Text>
        <Button
        title='Goto DetailsScreen'
        onPress={()=>navigation.navigate("Details")}
        />
      </View>
    );
  }

  export default Homescreen;