import HomeScreen from 'pages/Home';
import Login from 'pages/Authentication/Login';
import Profile from 'pages/Authentication/Profile';
import React from 'react';
import {RootStackParamList} from 'types/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const NavigationRoot = (): React.JSX.Element => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default NavigationRoot;
