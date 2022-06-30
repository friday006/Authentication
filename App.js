/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
 import React, { useEffect } from 'react';
 import {View,ActivityIndicator} from 'react-native'
 import {NavigationContainer} from '@react-navigation/native';
//  import {createStackNavigator} from '@react-navigation/stack';
 import {createDrawerNavigator} from '@react-navigation/drawer';
 import { DrawerContent } from './screens/DrawerContent';
 import MainTabScreen from './screens/MainTabScreen';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 
 import { AuthContext } from './components/context';

//  import Detailscreen from './screens/detailscreen';
//  import Homescreen from './screens/homescreen';
//  import SplashScreen from './screens/SplashScreen';
 import RootStackScreen from './screens/RootStackScreen';
// import { color } from 'react-native-reanimated';



 const Drawer = createDrawerNavigator();

 
 


 const App = () => {
    // const[isLoading,setIsLoading]=React.useState(true);
    // const[userToken,setUserToken]=React.useState(null);

    const initialLoginState={
      isLoading:true,
      userName:null,
      userToken:null,
    };

    const loginReducer =(prevState,action)=>{
      switch (action.type) {
        case 'RETRIEVE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'LOGIN':
          return {...prevState,
            userName: action.id,
            userToken: action.token,
            isLoading: false,};
        case 'LOGOUT':
          return {...prevState,
            userName: null,
            userToken: null,
            isLoading: false,};
        case 'REGISTER':
          return {...prevState,
            userName: action.id,
            userToken: action.token,
            isLoading: false,};
      }
    }

     const [loginState, dispatch] = React.useReducer(loginReducer,initialLoginState)
     const authContext=React.useMemo(()=>({
      signIn: async(userName, password)=>{
        // setUserToken('fuck')
        // setIsLoading(false)
        let userToken;
        userToken = null;
        if( userName == "user" && password== "pass") {
          userToken = 'dfgdfg'
          try {
            await AsyncStorage.setItem('userToken')
          } catch(e) {
            console.log(e)
          }
        }
        // console.log('user token', userToken)
        dispatch({type: 'LOGIN', id: userName,token: userToken})
      },
      signOut: async()=>{
        // setUserToken(null)
        // setIsLoading(false)
        try {
          await AsyncStorage.removeItem('userToken')
        } catch(e) {
          console.log(e)
        }
        dispatch({type: 'LOGOUT'})
      },
       signUp: ()=>{
        // setUserToken('fuck')
        // setIsLoading(false)
       },
      }),[])

useEffect(() => {
  setTimeout(async()=>{
  // setIsLoading(false)
  let userToken;
  userToken = null;
  try {
    userToken = await AsyncStorage.getItem('userToken', userToken)
  } catch(e) {
    console.log(e)
  }
  // console.log('user token', userToken)
  dispatch({type: 'REGISTER', token: userToken})
  },1000)
}, [])
     if(loginState.isLoading){
      return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
           <ActivityIndicator size="large"/>
         </View>
      );}
   return (
    <AuthContext.Provider value={authContext}>
     <NavigationContainer>
      { loginState.userToken !== null ?(
          <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown:false}} drawerContent={props => <DrawerContent {...props} />}>
             <Drawer.Screen name="Home" component={MainTabScreen} />
             {/* <Drawer.Screen name="Details" component={DetailsStackScreen} />  */}
       </Drawer.Navigator>
      )
    :
      <RootStackScreen/>
    }
      
       </NavigationContainer>
     </AuthContext.Provider>
   );
 };
 
 export default App;
 