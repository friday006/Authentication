import React from 'react';
import {
    Button,
    Text,
    View,
  } from 'react-native';

  const Detailscreen = ({navigation}) =>{
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DetailsScreen</Text>
        <Button
        title='Goto HomeScreen'
      onPress={()=>navigation.navigate("Overview")}
       />
        <Button
        title='Goto Details again...'
      onPress={()=>navigation.push("Details")}
       />
        <Button
        title='Go Back'
      onPress={()=>navigation.goBack()}
       />
        <Button
        title='Goto Home'
      onPress={()=>navigation.popToTop()}
       />
      </View>
    );
  }

  export default Detailscreen;
  